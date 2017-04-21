var assert = require('assert');
const path = require('../index');
const relativePath = "../../";
assert.equal(path.winPath(process.cwd()), "C:/Users/Administrator/Desktop/winPath/test");
assert.equal(path.isRelativePath(relativePath),true);
