import path from 'path';
import fs from 'fs';
import gulp from 'gulp';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import gulpLoadPlugins from 'gulp-load-plugins';
import webpack from 'webpack';
import del from 'del';
import config from './webpack.config';
import git from 'gulp-git';
import bump from 'gulp-bump';
import filter from 'gulp-filter';
import tagVersion from 'gulp-tag-version';

import map from 'map-stream';
import conventionalChangelog from 'conventional-changelog';

const $ = gulpLoadPlugins();

gulp.task('clean', cb => del(['dist'], cb) );

gulp.task('webpack', cb => {
  webpack(config, (err, stats) => {
    if(err) throw new $.util.PluginError('webpack', err);
    $.util.log("[webpack]", stats.toString({
      colors: true
    }));
    cb();
  });
});

gulp.task('compress-js', ['clean', 'webpack'], () => {
  return gulp.src('dist/*.js')
    .pipe($.rename('project.min.js'))
    .pipe($.sourcemaps.init())
    .pipe($.uglify())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('compress-css', ['clean', 'webpack'], () => {
  return gulp.src('dist/*.css')
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.sourcemaps.init())
    .pipe($.minifyCss())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

function changelog () {
  return map((file, cb) => {
    conventionalChangelog({
      repository: 'https://git.empdev.domo.com/Development/DomoBits',
      preset: 'angular'
    }, (err, log) => {
      if (err) {
        return cb(err, file);
      } else {
        fs.writeFile('./CHANGELOG.md', log, (err) => {
          cb(err, file);
        });
      }
    });
  });
}

function commitChangelog () {
  return map((file, cb) => {
    return gulp.src(['./package.json', './bower.json', './CHANGELOG.md'])
      // commit the changed version number
      .pipe(git.commit('AUTOMATED: bumps package version and CHANGELOG.md'))
      .on('end', () => {
        cb(null, file);
      });
  });
}

function inc (importance) {
  // get all the files to bump version in
  return gulp.src(['./package.json', './bower.json'])
    // bump the version number in those files
    .pipe(bump({type: importance}))
    // save it back to filesystem
    .pipe(gulp.dest('./'))
    // read only one file to get the version number
    .pipe(filter('package.json'))
    // generate the changelog
    .pipe(changelog())
    // commit the changelog
    .pipe(commitChangelog())
    // tag it in the repository
    .pipe(tagVersion());
}

gulp.task('release:patch', () => inc('patch'));
gulp.task('release:minor', () => inc('minor'));
gulp.task('release:major', () => inc('major'));

gulp.task('default', ['clean', 'webpack', 'compress-js', 'compress-css']);
