module.exports = require('@darkobits/ts').nps(() => ({
  scripts: {
    // Ensure that the "themes" folder is removed in addition to the "dist"
    // folder, which will be removed by ts.
    prebuild: 'ts.del themes',
    // After the primary build script runs, compile from "dist" to "themes".
    postbuild: 'vsct compile',
    start: {
      description: 'Continuously re-build the project and theme file.',
      script: 'nps build.watch & vsct start'
    }
  }
}));
