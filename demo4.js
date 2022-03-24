//Load Package
var http=require('http');

//Create Server Code
http.createServer(function(req,res){
    //print message on browser
    res.end("<h1>Welcome to node js</h1>");
}).listen(3000);
console.log("Server is started http://127.0.0.1:3000");