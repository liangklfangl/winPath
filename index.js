const path = require("path");
const pathIsAbsolute = require('path-is-absolute');
const matchRelativePath = /^\.\.?[/\\]/;
//Whether is absolute path
function isAbsolutePath(str) {
  // return path.posix.isAbsolute(str) || path.win32.isAbsolute(str);
  return pathIsAbsolute(str);
}
function isRelativePath(str) {
  return matchRelativePath.test(str);
}
//compatiable in windows platform
function winPath(path) {
  return path.replace(/\\/g, '/');
}
module.exports ={
	isAbsolutePath,
	isRelativePath,
	winPath,
	posix:pathIsAbsolute.posix,
    win32:pathIsAbsolute.win32
}