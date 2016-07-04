var path = require('path');
var execFile = require('child_process').execFile;

var exePath = path.resolve(__dirname, './deploy.sh');
execFile(exePath, function(error, stdout, stderr) {
  console.log('stdout: ' + stdout);
  console.log('stderr: ', stderr);
   if (error !== null) {
       console.log('exec error: ', error);
   }
});
