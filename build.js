require('@babel/register')();

const path = require('path');
const fs = require('fs');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom')
const App = require('./src/App').default;
const { oneLine } = require('common-tags');

const BUILD_DIR = './build';
const routes = ['index', 'example'];

const contexts = {
  index: require('./src/api/index.json'),
  example: require('./src/api/example.json')
};

const renderFullPage = (context, html) => oneLine`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${context.title}</title>
    </head>
    <body>
      ${html}
    </body>
  </html>
`;

const htmlPages = routes.reduce((acc, r) => ({
  ...acc,
  [r]:
    renderFullPage(contexts[r],
      renderToString(
        React.createElement(StaticRouter, {
          location: r === 'index' ? '/' : `/${r}`,
          context: contexts[r],
          children: React.createElement(App)
        })
      )
    )
}), {});

Object.keys(htmlPages).forEach(name => {
  fs.writeFile(`${BUILD_DIR}/${name}.html`, htmlPages[name], () => {
    console.log(`Rendered file: ${name}.html`);
  });
});
