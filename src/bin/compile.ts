#!/usr/bin/env node

import path from 'path';
import fs from 'fs-extra';
import yargs from 'yargs';
import log from 'lib/log';


const {themeFile, outDir} = yargs
.option('theme-file', {
  type: 'string',
  required: true
})
.option('out-dir', {
  type: 'string',
  required: true
})
.argv;


function requireDefault(modulePath: string): any {
  const module = require(modulePath);
  return module.default ? module.default : module;
}


async function writeTheme(outPath: string, theme: any): Promise<void> {
  await fs.writeJson(outPath, theme, {spaces: 2});
}


async function compileTheme(): Promise<void> {
  const outFile = `${path.resolve(outDir, path.parse(themeFile).name)}.json`;

  await fs.ensureFile(outFile);
  await writeTheme(outFile, requireDefault(path.resolve(themeFile)));
  log.info('compile', path.relative(process.cwd(), outFile));
}


export default compileTheme();
