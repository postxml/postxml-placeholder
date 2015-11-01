# postxml-placeholder
[![npm version][npm-image]][npm-url]

> [PostXML] plugin for image's placeholder shortcut (with width and height).

## Installation
`npm i postxml-placeholder --save-dev`

## [Usage]

## Example

### Input
```html
<img src=":600x400/000/fff.jpg&text=выыва">
```

### Output
```html
<img src="http://dummyimage.com/600x400/000/fff.jpg&text=выыва" width="600" height="400">
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
[Usage]: https://github.com/postxml/postxml#usage

[npm-url]: https://www.npmjs.org/package/postxml-placeholder
[npm-image]: http://img.shields.io/npm/v/postxml-placeholder.svg?style=flat-square
