var path = require('path');
var execFile = require('child_process').execFile;

var exePath = path.resolve(__dirname, './deploy.sh');
execFile(exePath, function(error, stderr) {
   console.log('stderr: ', __dirname);
   if (error !== null) {
       console.log('exec error: ', error);
   }
});
