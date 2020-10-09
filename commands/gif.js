const cheerio = require('cheerio');
const request = require('request');

module.exports = {
    name: 'gif',
    description: "gives random 1975 image",
    execute(message, args, tags){
            var options = {
                url: "http://results.dogpile.com/serp?qc=images&q=" + "The 1975 gifs",
                method: "GET",
                headers: {
                    "Accept": "text/html",
                    "User-Agent": "Chrome"
                }
            };
            request(options, function(error, response, responseBody){
                if(error) {
                    return;
                }

                $ = cheerio.load(responseBody);

                var links = $(".image a.link");

                var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));

               //console.log(urls);
                if (!urls.length) {
                    return;
                }

                message.channel.send(urls[Math.floor(Math.random() * urls.length)]);
            });
    }
}