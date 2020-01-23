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

exports.convertTextToDelta = (text) => {
  const quill = new DOM.window.Quill('#editor');

  quill.setText(text);

  let delta = quill.getContents();
  return delta;
};

exports.convertHtmlToDelta = (html) => {
  const quill = new DOM.window.Quill('#editor');

  let delta = quill.clipboard.convert(html);

  return delta;
};

exports.convertDeltaToHtml = (delta) => {
  const quill = new DOM.window.Quill('#editor');

  quill.setContents(delta);

  let html = quill.root.innerHTML;
  return html;
};
