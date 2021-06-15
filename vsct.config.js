module.exports = ({ json, isDev }) => ({
  outDir: 'extension',
  displayName: isDev ? 'Astra (Dev)' : `Astra v${json.version}`,
  themes: [
    {
      path: './dist/astra.js',
      label: isDev ? 'Astra (Dev)' : `Astra v${json.version}`,
      uiTheme: 'vs-dark'
    }
  ]
});
