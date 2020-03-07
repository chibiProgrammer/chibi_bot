require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const {
    handleFox
} = require('./src');

const app = express();

app.use(bodyParser());
app.get('/', (_, res) => res.send("hello"));
app.post('/webhook', async (req, res) => {
    const command = await req.body.command;
    const channel_id = await req.body.channel_id;
    switch(command) {
    case '/fox':
        handleFox(channel_id);
        break;
    }
    return await res.status(200).send('running...');
});

const port = process.env.PORT || 18000;
app.listen(port, () => console.log("good!!!!!"))
