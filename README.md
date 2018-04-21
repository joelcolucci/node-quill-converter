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
### Convert a plain text string to a Quill delta:
```js
const { convertTextToDelta } = require('node-quill-converter');

let text = 'hello, world';
let delta = convertTextToDelta(text);

console.log(JSON.stringify(delta)); // {"ops":[{"insert":"hello, world\n"}]}
```

### Convert an HTML string to a Quill delta:
```js
const { convertHtmlToDelta } = require('node-quill-converter');

let htmlString = '<p>hello, <strong>world</strong></p>';
let delta = convertHtmlToDelta(htmlString);

console.log(JSON.stringify(delta); // {"ops":[{"insert":"hello, "},{"insert":"world","attributes":{"bold":true}}]}
```

### Convert an Quill delta to an HTML string:
```js
const { convertDeltaToHtml } = require('node-quill-converter');

let html = convertDeltaToHtml(delta);

console.log(html) ;
```

## License
MIT License Copyright (c) 2018 Joel Colucci