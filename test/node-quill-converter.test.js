const {
  convertTextToDelta,
  convertHtmlToDelta,
  convertDeltaToHtml } = require('../lib/index.js');

describe('node-quill-converter', () => {
  it('convertTextToDelta', () => {
    let text = 'hello, world';
    let deltaExpected = {ops: [{insert: 'hello, world\n'}]};

    let deltaResult = convertTextToDelta(text);

    expect(deltaResult).toEqual(deltaExpected);
  });

  it('convertHtmlToDelta', () => {
    let html = `<p>hello, <strong>world</strong></p>`;
    let deltaExpected = {
      ops:[
        {
          insert: "hello, "
        },
        {
          insert:"world",
          attributes: {
            bold: true
          }
        }
      ]
    };
    
    let deltaResult = convertHtmlToDelta(html);

    expect(deltaResult).toEqual(deltaExpected);
  });

  it('convertHtmlToDelta', () => {
    let delta = {
      ops:[
        {
          insert: "hello, "
        },
        {
          insert:"world",
          attributes: {
            bold: true
          }
        }
      ]
    };

    let htmlExpected = `<p>hello, <strong>world</strong></p>`;
    let htmlResult = convertDeltaToHtml(delta);

    expect(htmlResult).toEqual(htmlExpected);
  });
});
