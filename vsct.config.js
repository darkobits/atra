const env = require('@darkobits/env');
const isDev = require('@darkobits/is-dev');


const isPublish = env('IS_PUBLISH');
const useDevTag = isDev() && !isPublish;


module.exports = {
  // Output folder for compiled themes. N.B. This folder should be listed in our
  // package.json "files" array.
  outDir: 'themes',
  // Themes provided by this package.
  themes: [{
    label: `${useDevTag ? '[DEV] ' : ''}Astra`,
    path: 'dist/astra.js',
    uiTheme: 'vs-dark'
  }]
};
