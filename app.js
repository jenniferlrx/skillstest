//================================
//SETUP
//================================
var express = require("express");
var app = express();
app.set("view engine","ejs");
app.use(express.static("public"));

//================================
// ROUTES 
//================================
app.get("/", function(req,res){
	res.send("Hello World!");
});

// ROUTE "/megaHelloWorld" 
app.get("/megaHelloWorld", function(req,res){
	var feedbackString = "This is the response to GET requests!!";
	var queryString = req.query;
	// get query keys
	var urlkey = Object.keys(queryString);
	// add key/value pairs to GET response
	if(urlkey){
		urlkey.forEach(function(oneKey){
			if(!queryString[oneKey]){
				queryString[oneKey]="(empty)";
			}
			feedbackString += "<br>The "+oneKey+" was "+queryString[oneKey]+". "; 
		});
	}
	res.send(feedbackString);
});

app.post("/megaHelloWorld", function(req,res){
	res.send("It was a POST request!");
});

app.put("/megaHelloWorld", function(req,res){
	res.send("Got a PUT request!");
});

app.delete("/megaHelloWorld", function(req,res){
	res.send("Requst to DELETE something?");
});

// ROUTE "/testRoute" 
app.get("/testRoute", function(req,res){
	res.render("testRoute");
})

app.get("/*", function(req,res){
	res.send("Sorry, you've reached an unavailable page");
})
//===================================
// start server, listen to port 3000
//===================================
app.listen(3000, function(){
	console.log('Example app listening on port 3000!');
});