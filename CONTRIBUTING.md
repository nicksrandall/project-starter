# Contributing

**tl;dr**
* Changes come through pull requests
  * This is a shared repository (across apps and teams) so it is important
  changes are reviewed and properly communicated.
* Update all DomoBits components, when needed, to support your changes (if you update db-button's contract you may need to update db-dropdown to use it correctly).
* Keep the documentation up-to-date and as complete as possible
  * Show different types, themes, sizes, etc.
* Compile by running `gulp` before merging into master.

### Development

You'll need gulp to develop in DomoBits:

```bash
npm install -g gulp
```

After that's done, clone the repo, run `npm install`, make needed changes
to source files (in `src` directory).

DomoBits uses `webpack` for compilation,
which provides a `webpack-dev-server` that you can optionally use during
development to auto-compile and reload your test/documentation pages
(http://localhost:8080/webpack-dev-server/).

Run `$ npm start` to start the webpack dev server.

### Documentation

After your needed updates are done, make sure to update (or add) the
documentation. If this is an existing component, make sure that the options
(api) are up-to-date and that any additional examples are added. For new
components, you'll need to create a new `html` file in the `docs` directory.
Make sure you name this file after the component's name (drop the `db-` prefix)
and include it as a feature in the `features` array in `docs.js`. See `docs/button.html` for
an example.

### Submission

After your changes in the source code and documentation are completed, make
sure to run `gulp` to compile - now you're ready to submit this change for
review. If you're adding a new component or are making style changes, then you
will need to get a designer to sign off on this. James Friedman is a good
resource to get this done. You will also need another developer to review the
code changes. Walter Weidner, Nick Randall, and Marcos Minond are good
resources for this, but any senior developer in the UI team can help, too.

### Importing

After your pull request has been merged, you may import the lastest version of
DomoBits by hardcoding your merge commit's sha as the dependency's version.
Here's an example of how you would do that in a node app (`package.json`):

```json
{
  "dependencies": {
    "domo-bits": "git+ssh://git@git.empdev.domo.com/Development/DomoBits.git#<YOUR_COMMIT_SHA>"
  }
}
```

### Releases

After your pull request has been merged, you may also want to tag these changes
as a new release.

We adhere to [Semantic Versioning](http://semver.org/) standards, which follows
a major (when you make incompatible API changes), minor (when you add
functionality in a backwards-compatible manner), and patch (when you make
backwards-compatible bug fixes) convention. Depending on the type of changes
you are bringing over (and also on the changes in between you and the last
release), detemine which of the version numbers need to be increased and then
run `gulp release:[major|minor|patch]` to bump that specific version.

This command will do the following:

1. bump the version in bower.json
2. bump the version in package.json
3. commit file changes
4. create a new git tag

You will need to run `git push origin master --tags` afterwards.

## <a name="commit"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more readable messages** that are easy to follow when looking through the **project history**.  But also, we use the git commit messages to **generate the Angular change log**.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

### Scope
The scope could be anything specifying place of the commit change. In most cases, it will be the component name.

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.


A detailed explanation can be found in this [document](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#).
