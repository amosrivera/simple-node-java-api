var express	= require("express");
var rest	= require(__dirname+"/routes/rest");
var config 	= require(__dirname+"/config");
var app 	= express();

app.use(config.logger);
app.get('/javaexec', rest.execExample);
app.get('/javapackage', rest.javaPackageExample);

app.listen(3000);
console.log("Server has started.");
