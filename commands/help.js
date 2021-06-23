const Discord = require("discord.js");
module.exports = {
    name: 'help',
    description: "sends the help menu",
    async execute(message, args){
            var exampleEmbed = new Discord.MessageEmbed()
              .setColor("	#3CB371")
              .setTitle("--:milk: MilkBot Menu :milk:--")
              .addFields(
                {
                  name: ">Artwork",
                  value:
                    '-Displays a random official 1975 song artwork (exclusive of roadkill). See ">Artwork help" for more information',
                },
                {
                  name: ">Cover",
                  value:
                    '-Displays a random official 1975 official album cover See ">Cover help" for more information',
                },
                { name: ">Gif", value: "-Posts a random 1975 related gif" },
                { name: ">Help", value: "-Displays this help menu" },
                //{
                //  name: ">Image",
                //  value:
                //    '-Displays a random 1975 related image. See ">Image help" for more information',
                //}, 
                {
                  name: ">Lyric",
                  value: "-Displays a random 1975 lyric, or try >lyric silly translatedfrom for a silly google translated 1975 lyric",
                },
                { name: ">Ping", value: "-Tests if bot is online" },
                {
                  name: ">Poll",
                  value:
                    '-Create a new poll! See ">Poll help" for more information',
                },
                {
                  name: ">Promo",
                  value:
                    '-Displays a random official 1975 promo image. See ">Promo help" for more information',
                },
                {
                  name: ">She Said",
                  value: '-Gives a random "She said" 1975 lyric',
                },
                {
                  name: ">Suggest",
                  value:
                    "-Suggests a random (the 1975/Drive Like I Do) song to listen to",
                }
              );
            message.channel.send(exampleEmbed);
    }
}