#detect path of absolute or relative on nodejs 

### Install
```
$ npm install --save winpath
```

### Usage
```js
const pathIsAbsolute = require('winpath');
// Running on Linux
pathIsAbsolute.isAbsolutePath('/home/foo');
//=> true
pathIsAbsolute.isAbsolutePath('C:/Users/foo');
//=> false

// Running on Windows
pathIsAbsolute.isAbsolutePath('C:/Users/foo');
//=> true
pathIsAbsolute.isAbsolutePath('/home/foo');
//=> false

// Running on any OS
pathIsAbsolute.posix('/home/foo');
//=> true
pathIsAbsolute.posix('C:/Users/foo');
//=> false
pathIsAbsolute.win32('C:/Users/foo');
//=> true
pathIsAbsolute.win32('/home/foo');
//=> false
```
The absolute path detection  is based on [path-is-absolute](https://github.com/sindresorhus/path-is-absolute)

```js
const path = require('winpath');
path.isRelativePath("../../");
//=>true
```
The relative path detection is base on regex of `/^\.\.?[/\\]/;`
```js
const path = require('winpath');
path.winPath("c://desktop://");
```


API