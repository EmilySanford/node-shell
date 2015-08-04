var commands = require("./commands.js");
var fs = require('fs');
var request = require('request');
// var userCommand = 'pwd';
// var date = 'date';


// console.log("hello");
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
  var response = data.toString().trim(); // remove the newline
  var cmdList = response.split(/\s*\|\s*/g);
  for (var i = 0; i < cmdList.length; i++){
  	var cmd = cmdList[i][0];
  }
  //var cmd = cmdList[0];
  // console.log(cmd);
  //var file = cmdList.split(" ").slice(1).join(" ");
  // console.log(file);

  
  if (commands[cmd]) {
  	commands[cmd](stdin, file, done);
  // 	process.stdout.write(process.cwd());
  }

});

var done = function(output){
	console.log(output);
	process.stdout.write('\nprompt > ');

}