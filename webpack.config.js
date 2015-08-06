var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    'project': './index.js'
  },
  resolve: {
    extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?sourceMap!autoprefixer-loader!sass-loader?sourceMap'
      },
      {
        test: /\.png$/,
        loader: 'url-loader'
      },
      {
        test: /\.(woff|ttf|eot|svg).*$/,
        loader: 'file-loader?name=[name].[ext]?[hash]'
      }
    ]
  },
  plugins: [
    new ngAnnotatePlugin({
      add: true,
      remove: true
    }),
    new ExtractTextPlugin('[name].css')
  ],
  externals: [
    {
      'angular': {
        root: 'angular',
        commonjs: 'angular',
        commonjs2: 'angular',
        amd: 'angular'
      }
    },
    {
      'lodash': {
        root: '_',
        commonjs: 'lodash',
        commonjs2: 'lodash',
        amd: 'lodash'
      }
    },
    {
      'jquery': {
        root: '$',
        commonjs: 'jquery',
        commonjs2: 'jquery',
        amd: 'jquery'
      }
    }
  ],
  ts: {
    compilerOptions: {
      "module": "commonjs",
      "target": "es5",
      "sourceMap": true
    }
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    libraryTarget: 'umd',
  },
  devServer: {
    contentBase: './',
    noInfo: true, //  --no-info option
    hot: true,
    inline: true,
    proxy: {
      '/api': "https://dev.dev.domo.com"
    }
  }
};
