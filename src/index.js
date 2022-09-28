var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  let url = req.url;
  if(url==='/welcome'){
    res.writeHead(200 , {'content-Type':'text/plain'});
    res.write('Welcome to Dominos');
    res.end(console.log('welcome page loaded successfully'))
  }else if(url==='/contact'){
    res.writeHead(200,{'content-Type':'application/json'});
    const file = JSON.stringify({
        phone: '18602100000', 
        email: 'guestcaredominos@jublfood.com' 
    });
    res.end(file);
  }else{
    res.writeHead(404);
    res.write('page note found');
    res.end(console.log('page not found'));
  }
}
httpServer.listen(8081 ,()=>console.log('server started at port 8081'))

module.exports = httpServer;