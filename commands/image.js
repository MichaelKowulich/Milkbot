var Scraper = require('images-scraper');

const google = new Scraper ({
    puppeteer: {
        headless: true
    }
})
module.exports = {
    name: 'image',
    description: "gives random 1975 image",
    async formatArguments (message, args) {
        try {
            if (
                !args[1] ||
                args[1].toUpperCase() == "THE1975" ||
                (args[1].toUpperCase() === "THE" && args[2] === "1975")
            ) {
                execute(message, args, "the 1975");
            } else if (args[1].toUpperCase() === "HELP") {
                throw TypeError;
            } else if (
                args[1].toUpperCase() === "ADAM" ||
                args[1].toUpperCase() === "HANN"
            ) {
                execute(message, args, "Adam Hann The 1975");
            } else if (args[1].toUpperCase() === "GEORGE") {
                execute(message, args, "George Daniel The 1975");
            } else if (
                args[1].toUpperCase() === "MATTY" ||
                args[1].toUpperCase() === "MATT" ||
                args[1].toUpperCase() === "MATTHEW"
            ) {
                execute(message, args, "Matty Healy The 1975");
            } else if (
                args[1].toUpperCase() === "ROSS" ||
                args[1].toUpperCase() == "RASS"
            ) {
                execute(message, args, "Ross MacDonald The 1975");
            } else {
                throw TypeError;
            }
        } catch (TypeError) {
            var err = new Discord.MessageEmbed()
                .setColor("#3CB371")
                .setTitle(
                "Please Format >Image Command as follows (not case sensitive):"
                )
                .addFields({
                name: ">Image (the1975/Matty/Ross/George/Adam)",
                value:
                    'Note: Providing no options will result in the same operation as ">Image The 1975"',
                });
            message.channel.send(err);
        }
        async function execute(message, args, searchTerm){
            const image_results = await google.scrape(searchTerm, 50);
            var max = 49;
            var min = 0;
            var rand = Math.floor(Math.random() * (max - min) + min);
            message.channel.send(image_results[rand].url);
        }
    }
}