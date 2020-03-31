module.exports = {
  // Output theme JSON to this folder. This folder should be listed in our
  // package.json "files" array.
  outDir: 'themes',
  // Themes provided by this package.
  themes: [{
    label: 'Astra (${version})',
    main: 'dist/index.js',
    uiTheme: 'vs-dark'
  }]
}