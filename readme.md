# join-text [![Build Status](https://travis-ci.org/danilosampaio/join-text.svg?branch=master)](https://travis-ci.org/danilosampaio/join-text)

> Join two texts into columns.


## Install

```
$ npm install --save join-text
```


## Usage

```js
var joinText = require('join-text');

joinText('left side text.\nthis text will be', 'concatenated with\nthe right text.', {paddingRight: 2});

//=> Result:

left side text.     concatenated with
this text will be   the right text.
```


## API

### joinText(left, right, [options])

#### left

*Required*  
Type: `string`

Left side text.


#### right

*Required*  
Type: `string`

Right side text.


#### options

##### valign

Type: `string`  
Default: `top`

Vertical alignment of the shorter text.


##### voffset

Type: `integer`  
Default: `0`

Vertical offset of the shorter text.


##### separator

Type: `string`  
Default: `''`

The text column separator.


##### paddingLeft

Type: `integer`  
Default: `0`

The padding before the separator.


##### paddingRight

Type: `integer`  
Default: `0`

The padding after the separator.

## License

MIT © [Danilo Sampaio](http://github.org/danilosampaio)
