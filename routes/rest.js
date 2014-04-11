exports.test = function (req,res) {
	res.send([{name:'wine1'}, {name:'wine2'}, {name:'wine3'}]);
}

exports.helloWorld = function (req,res) {
	var exec = require('child_process').exec, child;

	child = exec('/usr/bin/java -jar '+__dirname+'/../ws.jar', function (error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if(error !== null){
			console.log('exec error: ' + error);
		}
		process.exit();
	});
}

exports.javaPackageExample = function(req,res) {
	var java 	= require('java');
	java.classpath.push('/sites/simple-node-java-api/example1.jar');
	java.callStaticMethod('com.ser.as400.webservice.Lubricantes','name','test',function(err,results){
		console.log(err,results);
		process.exit();
	})
}
