const npsUtils = require('nps-utils');

module.exports = require('@darkobits/ts-unified/dist/config/package-scripts')({
  scripts: {
    start: {
      description: 'Continuously re-build the project and theme file.',
      script: npsUtils.concurrent({
        build: 'nps build.watch',
        vsct: 'vsct start'
      })
    }
  }
});
