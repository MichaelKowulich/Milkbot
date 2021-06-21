const fetch = require('node-fetch');
const config = process.env.TENOR;

module.exports = {
    name: 'gif',
    description: "gives random 1975 image",
    async execute(message, args, tags){
        const tenorApiKey = config;

        let url = `https://g.tenor.com/v1/search?q=the1975&key=${tenorApiKey}&limit=50`;
        let response = await fetch(url);
        let json = await response.json();
        let index = Math.floor(Math.random() * json.results.length);
        message.channel.send(json.results[index].url);
    }
}