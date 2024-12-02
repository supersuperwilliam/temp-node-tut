const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end('Home page');
  }
  if (request.url === '/about') {
    response.end('About page');
  }
  if (request.url === '/socials') {
    response.end('Socials page');
  }
  response.end('Page not found');
});

server.listen(4000);