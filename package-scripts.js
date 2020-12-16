module.exports = require('@darkobits/ts').nps(() => ({
  scripts: {
    postbuild: 'del themes && vsct compile',
    prepublishOnly: 'vsct compile',
    start: {
      description: 'Continuously re-build the project and theme file.',
      script: 'nps build.watch & NODE_ENV=development vsct start'
    }
  }
}));
