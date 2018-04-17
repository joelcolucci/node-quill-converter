# node-quill-converter
> Convert HTML to a Quill Delta or a Quill Delta to HTML

The purpose of this package is to assist in migrating to or from the [Quill editor](https://quilljs.com/).

## Installation
```
# Via NPM
npm install node-quill-converter --save

# Via Yarn
yarn add node-quill-converter
```

## Getting Started
Convert an HTML string to a Quill delta:
```js
const { convertHtmlToDelta } = require('node-quill-converter');

let htmlString = '<h1>hello, world</h1>';
let delta = convertHtmlToDelta(htmlString);

console.log(delta) // { ops: [ { insert: '<h1>hello, world</h1>\n' } ] }
```

Convert an Quill delta to an HTML string:
```js
Coming soon..
```

## License
MIT License Copyright (c) 2018 Joel Colucci