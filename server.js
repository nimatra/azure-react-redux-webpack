var exec = require('child_process').exec;
var cmd = '"./node_modules/.bin/gulp" serve';

exec(cmd, function (error, stdout, stderr) {
  if (error) {
    console.log(stderr);
  }else{
    console.log(stdout);
  }
});