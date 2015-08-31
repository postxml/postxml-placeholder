# postxml-placeholder
[![npm version][npm-image]][npm-url]

> [PostXML] plugin for image's placeholder shortcut.

## Installation
`npm i postxml-placeholder --save-dev`

## Usage
```js
var fs = require('fs'),
   postxml = require('postxml'),
   plugin = require('postxml-placeholder');

var html = fs.readFileSync('input.html', 'utf8');

var output = postxml(
      html,
      [
         plugin()
      ]
   );
```

## Example

### Input
```html
<img src=":600x400/000/fff.jpg&text=выыва">
```

### Output
```html
<img src="http://dummyimage.com/600x400/000/fff.jpg&text=выыва">
```

## options

#### url
Type: `string` <br>
Default: `http://dummyimage.com/`

#### prefix
Type: `string` <br>
Default: `:`

## Licence
MIT

[PostXML]: https://github.com/postxml/postxml

[npm-url]: https://www.npmjs.org/package/postxml-placeholder
[npm-image]: http://img.shields.io/npm/v/postxml-placeholder.svg?style=flat-square
