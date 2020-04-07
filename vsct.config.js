const packageJson = require('./package.json');

const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
  // Output folder for compiled themes. N.B. This folder should be listed in our
  // package.json "files" array.
  outDir: 'themes',
  // Themes provided by this package.
  themes: [{
    label: ['Astra', IS_DEV ? ' (DEV)' : ''].join(''),
    path: 'dist/astra.js',
    uiTheme: 'vs-dark'
  }]
}
