const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  // Output folder for compiled themes. N.B. This folder should be listed in our
  // package.json "files" array.
  outDir: 'themes',
  // Themes provided by this package.
  themes: [{
    label: `${isDev ? '[DEV] ' : ''}Astra`,
    path: 'dist/astra.js',
    uiTheme: 'vs-dark'
  }]
};
