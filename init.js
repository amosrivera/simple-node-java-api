var express	= require("express");
var rest	= require(__dirname+"/routes/rest"); 
var config 	= require(__dirname+"/config");
var app 	= express();

app.use(config.logger);
app.get('/test', rest.test);
app.get('/hello', rest.helloWorld);

app.listen(3000);
console.log("Server has started.");
