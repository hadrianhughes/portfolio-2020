require('@babel/register')();

const path = require('path');
const fs = require('fs');
const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('../src/App').default;
const { oneLine } = require('common-tags');

const BUILD_DIR = path.resolve(__dirname, '../build');
const content = require('../content.json');

const renderFullPage = (context, html) => oneLine`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="description" content="A full stack web developer with a passion for quality, scalable code and inspiring user experiences, based in Edinburgh." />
    <title>${context.title}</title>
    <script>window.APP_CONTEXT = ${JSON.stringify(context)};</script>
    <link href="https://fonts.googleapis.com/css?family=Merriweather|Bitter&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="/bundle.js"></script>
  </body>
  </html>
`;

const html = renderFullPage(content,
  renderToString(
    React.createElement(App, { context: content })
  )
);

fs.writeFile(`${BUILD_DIR}/index.html`, html, () => {
  console.info('Rendered index.html');
});
