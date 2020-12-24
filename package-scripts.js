module.exports = require('@darkobits/ts').nps(({ npsUtils }) => ({
  scripts: {
    postbuild: 'ts.del themes && vsct compile',
    start: {
      description: 'Continuously re-build the project and theme file.',
      script: 'nps build.watch & NODE_ENV=development vsct start'
    },
    // Only used when publishing to the Microsoft store.
    package: {
      script: npsUtils.series(
        'nps build',
        'vsct compile',
        'cd themes && vsce package'
      )
    },
    publish: {
      script: npsUtils.series(
        'nps package'
      )
    }
  }
}));
