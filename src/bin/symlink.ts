#!/usr/bin/env node

import path from 'path';
import os from 'os';
import fs from 'fs-extra';
import log from 'lib/log';
import pkgInfo from 'lib/pkg-info';


/**
 * Creates a symbolic link from the VS Code extensions directory back to the
 * local project root.
 */
async function createSymlink() {
  const {root, json} = await pkgInfo();

  const extensionsPath = path.resolve(os.homedir(), '.vscode', 'extensions');
  const themeDirName = `${json.publisher.toLowerCase()}.${json.displayName.toLowerCase()}-${json.version}`;
  const absThemeDir = path.resolve(extensionsPath, themeDirName);

  try {
    await fs.unlink(absThemeDir);
  } catch (err) { // tslint:disable-line no-unused
    // Link did not exist.
  }

  await fs.symlink(root, absThemeDir);
  log.info('symlink', absThemeDir, '=>', root);
}


export default createSymlink();
