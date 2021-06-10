module.exports = require('@darkobits/ts').nps(() => ({
  scripts: {
    // After the primary build script runs, compile the extension.
    postbuild: 'vsct compile',
    start: {
      description: 'Continuously re-build the project and theme file.',
      script: 'IS_PUBLISH=false nps build.watch & vsct start'
    }
  }
}));
