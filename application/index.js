var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

  var t = req.url.split("=")
  let delay = (t.length > 0)?t[1]:0
  // console.log(req.url, delay)
  res.writeHead(200, {'Content-Type': 'text/html', 'delay': `${delay}`});
  setTimeout(function(){ 
    res.end(`${process.env.MESSAGE} asd`);
  }, delay);

}).listen(8080);