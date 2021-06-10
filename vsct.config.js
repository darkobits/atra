const env = require('@darkobits/env');
const useDevTag = !env('IS_PUBLISH');

module.exports = {
  // Use a custom "name" in extension manifest.
  name: useDevTag ? 'astra-dev' : 'astra',
  // Use a custom "displayName" in extension manifest.
  displayName: useDevTag ? 'Astra (Dev)' : 'Astra {version}',
  outDir: 'extension',
  themes: [
    { path: './dist/astra.js' }
  ]
};
