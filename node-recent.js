const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    getTitle(res);
  })
  .listen(8080, 'localhost');

function getTitle(res) {
  fs.readFile('./node-title.json', (err, data) => {
    if (err) return hadError(err, res);
    getTemplate(JSON.parse(data.toString()), res);
  });
}

function getTemplate(title, res) {
  fs.readFile('./template.html', (err, data) => {
    if (err) return hadError(err, res);
    formatHtml(title, data.toString(), res);
  });
}

function formatHtml(title, tmpl, res) {
  const html = tmpl.replace('%', title.join('</li><li>'));
  res.writeHead(200, { 'Context-Type': 'text/html' });
  res.end(html);
}

function hadError(err, res) {
  console.error(err);
  res.end('error');
}
