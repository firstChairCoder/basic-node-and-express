let express = require('express');
let app = express();

console.log("Hello World");

let absPath = __dirname + '/views/index.html';
let midPath = __dirname + '/public'


app.get("/", (req, res) => {
	// res.send("Hello Express");
	res.sendFile(absPath);
});



app.use("/public", express.static(midPath));




























 module.exports = app;
