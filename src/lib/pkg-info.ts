import path from 'path';
import fs from 'fs-extra';
import pkgDir from 'pkg-dir';


/**
 * Returns the root directory and parsed package.json for this package.
 */
export default async function pkgInfo(cwd: string = __dirname) {
  const pkgRoot = await pkgDir(cwd);

  if (!pkgRoot) {
    throw new Error('[pkgInfo] Unable to locate "package.json".');
  }

  const root = path.resolve(pkgRoot);

  const json = await fs.readJson(path.resolve(root, 'package.json'));

  return {root, json};
}


/**
 * Provided a full "name" field from a package.json, returns the portion after
 * the scope. If the name is unscoped, this has no effect.
 */
export function unscopedName(fullName: string): string {
  return (fullName.split('/').splice(-1)[0]).toLowerCase();
}
