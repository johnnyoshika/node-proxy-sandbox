var http = require('http');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

// to inspect headers in Charles:
// target: http://localhost:8100
// url: http://localhost:8110/rest/v1.0/jobcategories

// to proxy to Jobcast dashboard
// target: https://app.jobcast.net
// url: http://localhost:8110/dashboard/authentication
http.createServer(function(req, res){
  proxy.web(req, res, {
    target:'https://app.jobcast.net',
    changeOrigin: true,
    xfwd: true
  });
}).listen(8110);