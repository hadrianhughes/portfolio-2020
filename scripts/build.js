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
      <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
      <script>window.APP_CONTEXT = ${JSON.stringify(context)};</script>
      <title>${context.title}</title>
    </head>
    <body>
      ${html}
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
