const env = require('@darkobits/env');
const isPublish = env.eq('IS_PUBLISH', true);


module.exports = ({ json }) => ({
  // Use a custom "name" in extension manifest.
  name: isPublish ? 'astra' : 'astra-dev',
  // Use a custom "displayName" in extension manifest.
  displayName: isPublish ? `Astra v${json.version}` : 'Astra (Dev)',
  outDir: 'extension',
  themes: [
    {
      path: './dist/astra.js',
      label: isPublish ? `Astra v${json.version}` : 'Astra (Dev)',
      uiTheme: 'vs-dark'
    }
  ]
});
