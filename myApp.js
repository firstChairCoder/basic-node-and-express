require('dotenv').config();
let express = require('express');
let app = express();

console.log("Hello World");

let absPath = __dirname + '/views/index.html';
let midPath = __dirname + '/public'



app.use((req, res, next) => {
	console.log(req.method + ' ' + req.path + ' - ' + req.ip);
	next();
});

app.get("/", (req, res) => {
	// res.send("Hello Express");
	res.sendFile(absPath);
});



app.use("/public", express.static(midPath));

app.get("/json", (req, res) => {
	if(process.env.MESSAGE_STYLE === 'uppercase') {
		res.json({"message": "HELLO JSON"})
	} else {
		res.json({"message": "Hello json"})
	}
});



app.get("/now", (req, res, next) => {
	req.time = new Date().toString();
	next();
}, (req, res) => {
	res.json({ "time": req.time})
})






















 module.exports = app;
