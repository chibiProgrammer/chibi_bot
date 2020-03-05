const express = require("express");

const app = express();
app.get('/', (req, res)=> res.send("hello"));

const port = 18000;
app.listen(port, () => console.log("good"))