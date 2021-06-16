module.exports = () => {
  return {
    outDir: 'extension',
    displayName: 'Astra',
    themes: [
      {
        path: './dist/astra.js',
        label: 'Astra',
        uiTheme: 'vs-dark'
      }
    ]
  };
};
