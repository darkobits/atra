import path from 'path';
import fs from 'fs-extra';
import pkgDir from 'pkg-dir';


export default async function pkgInfo(cwd: string = __dirname) {
  const pkgRoot = await pkgDir(cwd);

  if (!pkgRoot) {
    throw new Error('[pkgInfo] Unable to locate "package.json".');
  }

  const absPkgRoot = path.resolve(pkgRoot);

  const pkgJson = await fs.readJson(path.resolve(absPkgRoot, 'package.json'));

  return {
    root: absPkgRoot,
    json: pkgJson
  };
}
