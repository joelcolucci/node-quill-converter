# node-quill-converter
> Convert HTML to a Quill Delta or a Quill Delta to HTML

The purpose of this package is to assist in migrating to or from the [Quill editor](https://quilljs.com/).

CAUTION!
Package is in active development! Please note only convertTextToDelta is implemented correctly as this time.

## Installation
```
# Via NPM
npm install node-quill-converter --save

# Via Yarn
yarn add node-quill-converter
```

## Getting Started
Convert a plain text string to a Quill delta:
```js
const { convertTextToDelta } = require('node-quill-converter');

let text = 'hello, world';
let delta = convertTextToDelta(text);

console.log(delta) // { ops: [ { insert: 'hello, world\n' } ] }
```


Convert an HTML string to a Quill delta:
### Not yet implemented!!!
```js
const { convertHtmlToDelta } = require('node-quill-converter');

let htmlString = '<h1>hello, world</h1>';
let delta = convertHtmlToDelta(htmlString);

console.log(delta) 
```

Convert an Quill delta to an HTML string:
### Not yet implemented!!!
```js
const { convertDeltaToHtml } = require('node-quill-converter');

let html = convertDeltaToHtml(delta);

console.log(html) 
```

## License
MIT License Copyright (c) 2018 Joel Colucci