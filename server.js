// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const ipInfo = require("ipinfo");
//var assert = require("assert");
//var hostbyname = require("hostbyname");
//var cb = function(err, results){
//  console.log(results);
//};
ipInfo("23.13.177.164", (err, cLoc) => {
    console.log(err || cLoc);
        // { ip: '8.8.8.8',
        //   hostname: 'google-public-dns-a.google.com',
        //   city: 'Mountain View',
        //   region: 'California',
        //   country: 'US',
        //   loc: '37.3845,-122.0881',
        //   org: 'AS15169 Google Inc.',
        //   postal: '94040' }
 
        // Get organization
    ipInfo("23.13.177.164/org", (err, cLoc) => {
            console.log(err || cLoc);
            // AS15169 Google Inc.
        });
});

//hostbyname.resolve("a.et.nytimes.com", cb);

var dns = require('dns');
var w3 = dns.lookup('adservice.google.com', function (err, addresses, family) {
  console.log(addresses);
});

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

// button to upload file 

/*<var formidable = require('formidable'),
    http = require('http'),
    util = require('util');
 
http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();
 
    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
 
    return;}
  
 
  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}).listen(8080);*/
 