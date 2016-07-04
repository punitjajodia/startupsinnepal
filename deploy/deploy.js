//Lets require/import the HTTP module
var http = require('http');
var path = require('path');
var execFile = require('child_process').execFile;
var exePath = path.resolve(__dirname, './deploy.sh');


//Lets define a port we want to listen to
const PORT=9001;

//We need a function which handles requests and send response
function handleRequest(request, response){
  execFile(exePath, function(error, stdout, stderr) {
   if (error !== null) {
     response.end('exec error: ' + JSON.stringify(error));
   } else {
     response.end(stdout);
   }
});
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});


