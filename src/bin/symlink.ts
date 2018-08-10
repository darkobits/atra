#!/usr/bin/env node

import path from 'path';
import os from 'os';
import fs from 'fs-extra';
import pkgDir from 'pkg-dir';
import log from 'lib/log';


/**
 * Creates a symbolic link from the VS Code extensions directory back to the
 * local project root.
 */
async function createSymlink() {
  const PKG_ROOT = await pkgDir();

  if (!PKG_ROOT) {
    throw new Error(`[symlink] Unable to determine package root.`);
  }

  const PKG = await fs.readJSON(path.resolve(PKG_ROOT, 'package.json'));
  const EXTENSIONS_PATH = path.resolve(os.homedir(), '.vscode', 'extensions');
  const THEME_DIRNAME = `${PKG.publisher.toLowerCase()}.${PKG.displayName.toLowerCase()}-${PKG.version}`;
  const THEME_PATH = path.resolve(EXTENSIONS_PATH, THEME_DIRNAME);

  try {
    await fs.unlink(THEME_PATH);
  } catch (err) { // tslint:disable-line no-unused
    // Link did not exist.
  }

  await fs.symlink(PKG_ROOT, THEME_PATH);
  log.info('symlink', THEME_PATH, '=>', PKG_ROOT);
}


export default createSymlink();
