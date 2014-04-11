exports.execExample = function (req,res) {
	var exec = require('child_process').exec, child;

	child = exec('/usr/bin/java -jar '+__dirname+'/../jars/example_1.jar', function (error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if(error !== null){
			console.log('exec error: ' + error);
		}
		process.exit();
	});
}

exports.javaPackageExample = function(req,res) {
	var java = require('java');
	java.classpath.push(__dirname+'/../jars/example_2.jar');
	java.callStaticMethod("com.ser.as400.webservice.Lubricantes", "name", "amos rivera", function(err, results) {
	    if(err) { console.error(err); return; }
	   console.log( results);
	});
}
