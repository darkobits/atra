#!/usr/bin/env node

import path from 'path';
import fs from 'fs-extra';
import yargs from 'yargs';

import log from 'lib/log';
import pkgInfo, {unscopedName} from 'lib/pkg-info';
import {capitalize} from 'lib/misc';


const argv = yargs
.option('in-file', {
  type: 'string',
  required: true
})
.option('out-file', {
  type: 'string',
  required: true
})
.argv;


/**
 * Provided a path to a module, requires the module. If the module contains a
 * "default" export, the default export is returned. Otherwise, the module is
 * returned as-is.
 */
function requireDefault(modulePath: string): any {
  const module = require(path.resolve(modulePath));
  return module.default ? module.default : module;
}


/**
 * Updates the local project's package.json such that the "label" for the theme
 * is synchronized to the "version" in package.json.
 */
async function updatePackageJson() {
  const {root, json} = await pkgInfo();
  const name = capitalize(unscopedName(json.name));

  if (json.contributes && json.contributes.themes) {
    json.contributes.themes = json.contributes.themes.map((themeDescriptor: any) => ({
      ...themeDescriptor,
      label: `${name} (${json.version})`,
    }));
  }

  const outPath = path.resolve(root, 'package.json');
  await fs.writeJson(outPath, json, {spaces: 2});
  log.verbose('pkg', `Wrote updated package.json to ${outPath}`);
}


/**
 * Reads a theme from the input file
 */
async function compileTheme(inFile: string, outFile: string): Promise<void> {
  try {
    await updatePackageJson();

    // Require the indicated theme module.
    const theme = requireDefault(inFile);

    // Compute the absolute path to the desired output file.
    const absOutFile = path.resolve(outFile);

    // Ensure the output file exists before we write to it (ie: touch).
    await fs.ensureFile(absOutFile);

    // Write theme.
    await fs.writeJson(absOutFile, theme, {spaces: 2});

    log.info('compile', path.relative(process.cwd(), path.resolve(outFile)));
  } catch (err) {
    log.error('compile', `Error during compilation: ${err.stack}`);
  }
}


export default compileTheme(argv.inFile, argv.outFile);
