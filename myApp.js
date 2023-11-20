let express = require('express');
let app = express();

console.log("Hello World");

let absPath = __dirname + '/views/index.html';


app.get("/", (req, res) => {
	// res.send("Hello Express");
	res.sendFile(absPath);
});
































 module.exports = app;
