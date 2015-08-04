var fs = require('fs');
var request = require('request');

module.exports = {
 	pwd: function(stdin,file, done){ 
  		var output = process.cwd();
  		done(output);

  	},
  	date: function(stdin, file, done){
  		var output = new Date();
  		done(output);
  	},
  	ls: function(stdin, file, done){
  		var output = "";
  		fs.readdir('.', function(err, files) {
  			if (err) throw err;
  			files.forEach(function(file) {
    		output += file.toString() + "\n";
  			})
  			done(output);
		});

  	},
  	echo: function(stdin, file, done){
  		var output = file;
  		done(output);
  	},

  	cat: function(stdin, file, done){
  		fs.readFile(file, 'utf8', function(err, data){
  			if (err) throw err;
  			else {
  			var output = data;
  			done(output);
  		}
  		});

  	},
  	head: function(stdin, file, done){
  		var fileToRead;
  		if (stdin){
  			fileToRead = stdin;
  		} else {
  			fileToRead = file;
  		}
  		fs.readFile(fileToRead, 'utf8', function(err, data){
  			if (err) throw err;
  			else {
  			var output = data.split("\n").slice(0,5).join("\n");
  			done(output);
  		}
  			//console.log(stringToReturn);
  			// process.stdout.write('\nprompt > ');

  		});
  	},
  	tail: function(stdin, file, done){
  		fs.readFile(file, 'utf8', function(err, data){
  			if (err) throw err;
  			else {
  			var output = data.split("\n").slice(-5).join("\n");
  			done(output);
  		}

  		});
  	},
  	curl: function(stdin, file, done){
  		request(file, function(error, response, body){
  			if (!error && response.statusCode == 200){
  				// console.log(body);
  				var output = body;
  				done(output);
  			}
  		});
  	}

}