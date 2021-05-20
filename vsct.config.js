const env = require('@darkobits/env');
const isDev = require('@darkobits/is-dev');


const isPublish = env('IS_PUBLISH');
const useDevTag = isDev() && !isPublish;


module.exports = {
  // Output folder for compiled themes. N.B. This folder should be listed in our
  // package.json "files" array.
  outDir: 'themes',
  // Directory name to use in the VS Code extensions folder.
  installDir: `darkobits.astra${useDevTag ? '-dev' : ''}`,
  // Themes provided by this package.
  themes: [{
    label: `${useDevTag ? '[DEV] ' : ''}Astra`,
    // outputFilename: useDevTag ? 'astra-dev' : undefined,
    path: 'dist/astra.js',
    uiTheme: 'vs-dark'
  }]
};
