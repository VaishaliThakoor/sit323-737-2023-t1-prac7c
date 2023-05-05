const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const params = querystring.parse(body);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>Form Data Received:</h1>');
      res.write(`<p>Name: ${params.name}</p>`);
      res.write(`<p>Email: ${params.email}</p>`);
      res.end();
    });
  } else {
    const parsedUrl = url.parse(req.url, true);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form method="POST">');
    res.write('<label for="name">Name:</label>');
    res.write('<input type="text" name="name" id="name" required>');
    res.write('<br>');
    res.write('<label for="email">Email:</label>');
    res.write('<input type="email" name="email" id="email" required>');
    res.write('<br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.end();
  }
});

server.listen(7000, () => {
  console.log('Server running on port 7000');
});
