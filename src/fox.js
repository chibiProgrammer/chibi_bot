const axios = require('axios');
const { postMessage } = require('./utils');

const fetchFox = async () => {
    const url = 'https://randomfox.ca/floof/';
    const res = await axios.get(url);
    return await res.data;
};

const handleFox = async channel_id => {
    const data = await fetchFox();
    const url = data.message;
    console.log('URLLLLLLL' + url)
    console.log('CHANNEEEEELLLLLLL' + channel_id)
    postMessage(channel_id, url);
};

module.exports = handleFox;