/*
Imports
*/
const Discord = require("discord.js");
const config = require("./config.json");
const cheerio = require("cheerio");
const request = require("request");
const sqlite = require("sqlite3").verbose();
var search = require("youtube-search");
const bot = new Discord.Client();
const fs = require("fs");

/* 
Command Handler
*/
bot.commands = new Discord.Collection();
const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

/*
Options For Youtube Search
*/
const opts = {
  maxResults: 1,
  key: config.YOUTUBE_API,
  type: "video",
};

/*
When Bot Is Ready
*/
const PREFIX = ">";
bot.on("ready", () => {
  console.log("MilkBot online");
});

/*
When Bot Gets A Message
*/
bot.on("message", async (message) => {
  let args = message.content.substring(PREFIX.length).split(" ");
  let db = new sqlite.Database("./75db.db", sqlite.OPEN_READWRITE);
  if (message.content.startsWith(">")) {
    switch (args[0].toUpperCase()) {
      case "PING":
        bot.commands.get("ping").execute(message, args);
        break;
      case "PONG":
        bot.commands.get("pong").execute(message, args);
        break;
      case "SUGGEST":
        try {
          if (
            (args[1].toString().toUpperCase() === "THE" &&
              args[2].toString().toUpperCase() == "1975") ||
            args[1].toString().toUpperCase() === "1975" ||
            args[1].toString().toUpperCase() === "THE1975"
          ) {
            bot.commands
              .get("suggest")
              .execute(message, args, db, "the 1975", opts);
          } else if (
            args[1].toUpperCase() === "DLID" ||
            (args[1].toUpperCase() === "DRIVE" &&
              args[2].toUpperCase() === "LIKE" &&
              args[3].toUpperCase() === "I" &&
              args[4].toUpperCase() === "DO")
          ) {
            bot.commands
              .get("suggest")
              .execute(message, args, db, "dlid", opts);
          } else if (
            args[1].toUpperCase() === "LEWIS" &&
            args[2].toUpperCase() === "POOLE"
          ) {
            message.reply(
              "I think you should listen to 'Oxygen' by Lewis Poole\n https://www.youtube.com/watch?v=iE5TOOJrF9o"
            );
          } else {
            throw TypeError;
          }
        } catch (TypeError) {
          var exampleEmbed = new Discord.MessageEmbed()
            .setColor("#3CB371")
            .setTitle(
              "Please specify one of the following inputs (not case sensitive):"
            )
            .addFields(
              {
                name: ">Suggest (the 1975/1975)",
                value: "Gives a random 1975 song suggestion",
              },
              {
                name: ">Suggest (dlid/drive like i do)",
                value:
                  "Gives a random Drive Like I Do/B I G S L E E P/Talkhouse song suggestion",
              }
            );
          message.channel.send(exampleEmbed);
        }
        break; // Break for >Suggest case
      //-Whats the vibe?
      //---------------------------------------------
      case "WHATS":
      case "WHAT'S":
        try {
          if (
            args[1].toUpperCase() == "THE" &&
            (args[2].toUpperCase() == "VIBE" ||
              args[2].toUpperCase() == "VIBE?")
          ) {
            message.channel.send(
              "I wouldn't know, I'm normally in bed at this time"
            );
          }
        } catch (TypeError) {}
        break;
      case "WHATSTHEVIBE":
        message.channel.send(
          "I wouldn't know, I'm normally in bed at this time"
        );
        break; // Break for whatsthevibe

      //-She said
      //-----------------------------------------------
      case "SHESAID":
        bot.commands.get("sheSaid").execute(message, args, db);
        break; // end of "shesaid"
      case "SHE":
        try {
          if (args[1].toUpperCase() === "SAID") {
            bot.commands.get("sheSaid").execute(message, args, db);
          }
        } catch (TypeError) {}
        break;
      //-MilkWalker
      //----------------------------------------------
      case "MILKWALKER":
        message.channel.send("", { files: ["./milkwalker.jpg"] });
        break;
      //-Poll
      //----------------------------------------------
      case "POLL":
        bot.commands.get("poll").execute(message, args, bot);
        break;
      //-Image
      //----------------------------------------------
      /*
      case "IMAGE":
        try {
          if (
            !args[1] ||
            args[1].toUpperCase() == "THE1975" ||
            (args[1].toUpperCase() === "THE" && args[2] === "1975")
          ) {
            bot.commands.get("image").execute(message, args, "the 1975");
          } else if (args[1].toUpperCase() === "HELP") {
            throw TypeError;
          } else if (
            args[1].toUpperCase() === "ADAM" ||
            args[1].toUpperCase() === "HANN"
          ) {
            bot.commands
              .get("image")
              .execute(message, args, "Adam Hann The 1975");
          } else if (args[1].toUpperCase() === "GEORGE") {
            bot.commands
              .get("image")
              .execute(message, args, "George Daniel The 1975");
          } else if (
            args[1].toUpperCase() === "MATTY" ||
            args[1].toUpperCase() === "MATT" ||
            args[1].toUpperCase() === "MATTHEW"
          ) {
            bot.commands
              .get("image")
              .execute(message, args, "Matty Healy The 1975");
          } else if (
            args[1].toUpperCase() === "ROSS" ||
            args[1].toUpperCase() == "RASS"
          ) {
            bot.commands
              .get("image")
              .execute(message, args, "Ross MacDonald The 1975");
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
        break; */
      //-Gif
      //------------------------------------------------
      case "GIF":
        bot.commands.get("gif").execute(message, args, "the 1975 gifs");
        break;
      //-Artwork
      //----------------------------------------------
      case "ARTWORK":
        try {
          if (!args[1]) {
            bot.commands.get("artwork").execute(message, args, 1, 70, -1);
          } else if (args[1].toUpperCase() === "HELP") {
            throw TypeError;
          }
          //>artwork the1975
          else if (args[1].toUpperCase() === "THE1975") {
            try {
              if (!args[2]) {
                bot.commands.get("artwork").execute(message, args, 1, 16, -1);
              } else if (parseInt(args[2]) > 16 || parseInt(args[2]) < 1) {
                message.channel.send("Error: invalid track number");
              } else {
                bot.commands
                  .get("artwork")
                  .execute(message, args, 1, 16, parseInt(args[2]));
              }
            } catch (TypeError) {
              message.channel.send("Error: invalid track number");
            }
          }
          //>artwork the 1975
          else if (
            args[1].toUpperCase() === "THE" &&
            args[2].toUpperCase() === "1975"
          ) {
            try {
              if (!args[3]) {
                bot.commands.get("artwork").execute(message, args, 1, 16, -1);
              } else if (parseInt(args[3]) > 16 || parseInt(args[3]) < 1) {
                message.channel.send("Error: invalid track number");
              } else {
                bot.commands
                  .get("artwork")
                  .execute(message, args, 1, 16, parseInt(args[3]));
              }
            } catch (TypeError) {
              message.channel.send("Error: invalid track number");
            }
          }
          //>artwork iliwys
          else if (args[1].toUpperCase() === "ILIWYS") {
            try {
              if (!args[2]) {
                bot.commands.get("artwork").execute(message, args, 17, 33, -1);
              } else if (parseInt(args[2]) > 17 || parseInt(args[2]) < 1) {
                message.channel.send("Error: invalid track number");
              } else {
                bot.commands
                  .get("artwork")
                  .execute(message, args, 1, 16, parseInt(args[2]) + 16);
              }
            } catch (TypeError) {
              message.channel.send("Error: invalid track number");
            }
          }
          //>artwork abiior
          else if (args[1].toUpperCase() === "ABIIOR") {
            try {
              if (!args[2]) {
                bot.commands.get("artwork").execute(message, args, 34, 48, -1);
              } else if (parseInt(args[2]) > 15 || parseInt(args[2]) < 1) {
                message.channel.send("Error: invalid track number");
              } else {
                bot.commands
                  .get("artwork")
                  .execute(message, args, 1, 16, parseInt(args[2]) + 33);
              }
            } catch (TypeError) {
              message.channel.send("Error: invalid track number");
            }
          }
          //>artwork noacf
          else if (args[1].toUpperCase() === "NOACF") {
            try {
              if (!args[2]) {
                bot.commands.get("artwork").execute(message, args, 49, 70, -1);
              } else if (parseInt(args[2]) > 22 || parseInt(args[2]) < 1) {
                message.channel.send("Error: invalid track number");
              } else {
                bot.commands
                  .get("artwork")
                  .execute(message, args, 1, 16, parseInt(args[2]) + 48);
              }
            } catch (TypeError) {
              message.channel.send("Error: invalid track number");
            }
          } else {
            throw TypeError;
          }
        } catch (TypeError) {
          var err = new Discord.MessageEmbed()
            .setColor("#3CB371")
            .setTitle(
              "Please Format >Artwork Command as follows (not case sensitive):"
            )
            .addFields({
              name:
                ">Artwork (OPTIONAL: the1975/ILIWYS/ABIIOR/NOACF) (OPTIONAL: Track Number)",
              value: "Note: Providing no options will randomize all artworks",
            });
          message.channel.send(err);
        }
        break;
      //-Lyric
      //----------------------------------------------
      case "LYRIC":
        bot.commands.get("lyric").execute(message, args, db);
        break;
      //-Cover
      //----------------------------------------------
      case "COVER":
        bot.commands.get('cover').execute(message, args, db);
        break;
      //-Help
      //----------------------------------------------
      case "HELP":
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
          /*  {
              name: ">Image",
              value:
                '-Displays a random 1975 related image. See ">Image help" for more information',
            }, */
            {
              name: ">Lyric",
              value: "-Displays a random 1975 lyric",
            },
            { name: ">Ping", value: "-Tests if bot is online" },
            {
              name: ">Poll",
              value:
                '-Create a new poll! See ">Poll help" for more information',
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
        break; //Break for Help
    } //end of switch(args[0])
  } // end of if (checks for >prefix)
});

bot.login(config.TOKEN);
