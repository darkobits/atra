const npsUtils = require('nps-utils');

module.exports = require('@darkobits/ts-unified/dist/config/package-scripts')({
  scripts: {
    start: {
      script: npsUtils.concurrent({
        build: 'nps build.watch',
        vsct: 'vsct start'
      })
    }
  }
});
