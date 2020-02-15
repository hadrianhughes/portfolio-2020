const path = require('path');
const fs = require('fs');
const { oneLine } = require('common-tags');

const STATIC_DIR = path.resolve(__dirname, '../src/static');
const content = require('../content');

const html = oneLine`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <title>${content.title}</title>
    <script>window.APP_CONTEXT = ${JSON.stringify(content)};</script>
    <link href="https://fonts.googleapis.com/css?family=Merriweather|Bitter&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script src="/bundle.js"></script>
  </body>
  </html>
`;

fs.writeFile(`${STATIC_DIR}/index.html`, html, () => {
  console.info('Successfully rendered HTML');
});
