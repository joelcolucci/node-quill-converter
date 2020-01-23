const fs = require('fs');
const path = require('path');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

let quillFilePath = require.resolve('quill');
let quillMinFilePath = quillFilePath.replace('quill.js', 'quill.min.js');

let quillLibrary = fs.readFileSync(quillMinFilePath);
let mutationObserverPolyfill = fs.readFileSync(path.join(__dirname, 'polyfill.js'));

const JSDOM_TEMPLATE = `
  <div id="editor">hello</div>
  <script>${mutationObserverPolyfill}</script>
  <script>${quillLibrary}</script>
  <script>
    document.getSelection = function() {
      return {
        getRangeAt: function() { }
      };
    };
    document.execCommand = function (command, showUI, value) {
      try {
          return document.execCommand(command, showUI, value);
      } catch(e) {}
      return false;
    };
  </script>
`;

const JSDOM_OPTIONS = { runScripts: 'dangerously', resources: 'usable' };
const DOM = new JSDOM(JSDOM_TEMPLATE, JSDOM_OPTIONS);

const cache = {};

exports.convertTextToDelta = (text) => {
  if (!cache.quill) {
    cache.quill = new DOM.window.Quill('#editor');
  }

  cache.quill.setText(text);

  let delta = cache.quill.getContents();
  return delta;
};

exports.convertHtmlToDelta = (html) => {
  if (!cache.quill) {
    cache.quill = new DOM.window.Quill('#editor');
  }

  let delta = cache.quill.clipboard.convert(html);

  return delta;
};

exports.convertDeltaToHtml = (delta) => {
  if (!cache.quill) {
    cache.quill = new DOM.window.Quill('#editor');
  }

  cache.quill.setContents(delta);

  let html = cache.quill.root.innerHTML;
  return html;
};
