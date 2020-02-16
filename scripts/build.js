require('@babel/register')();

const path = require('path');
const fs = require('fs');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { ServerStyleSheet } = require('styled-components');
const App = require('../src/App').default;
const { oneLine } = require('common-tags');

const BUILD_DIR = path.resolve(__dirname, '../build');
const content = require('../content.json');

const renderFullPage = (context, rendered) => oneLine`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="description" content="A full stack web developer with a passion for quality, scalable code and inspiring user experiences, based in Edinburgh." />
    <title>${context.title}</title>
    <script>window.APP_CONTEXT = ${JSON.stringify(context)};</script>
    <link href="https://fonts.googleapis.com/css?family=Merriweather|Bitter&display=swap" rel="stylesheet" />
    <style>${rendered.styleSheet}</style>
  </head>
  <body>
    <div id="root">${rendered.html}</div>
    <script src="/bundle.js"></script>
  </body>
  </html>
`;

const html = renderFullPage(content, (() => {
  const styleSheet = new ServerStyleSheet();

  const markup = renderToString(
    styleSheet.collectStyles(
      React.createElement(App, { context: content })
    )
  );

  const styleTags = styleSheet.getStyleTags();
  styleSheet.seal();

  return { html: markup, styleSheet: styleTags };
})());

fs.writeFile(`${BUILD_DIR}/index.html`, html, () => {
  console.info('Rendered index.html');
});
