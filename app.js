const express = require("express");
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const app = express();

const {
    handleFox
} = require('./src');

app.get('/', (_, res)=> res.send("hello"));
app.post('/webhook', (req, res)=> {
    const command = await req.body.command;
    const channel_id = await req.body.channel_id;
    switch(command){
      case '/fox':
        handleFox(channel_id)
        break;
    }
});

const port = process.env.PORT || 18000;
app.listen(port, () => console.log("good!!!!!"))
