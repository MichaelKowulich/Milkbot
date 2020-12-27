const Discord = require("discord.js");
var numberToWords = require("number-to-words");
const cp = require("child_process");
const exec_options = {
  cwd: null,
  env: null,
  encoding: "utf8",
  timeout: 0,
  maxBuffer: 200 * 1024,
  killSignal: "SIGTERM",
};

module.exports = {
  name: "poll",
  description: "Allows User Polls",
  async execute(message, args, bot) {
    try {
      const myRe = /\"(.*?)\"/g;
      var inner = args.toString().replace(/”/g, '"').replace(/“/g, '"');
      var options = inner.match(myRe);

      if (options[0] == "help") {
        throw TypeError;
      }
      if (!options[1]) {
        throw TypeError;
      }
      const exampleEmbed = new Discord.MessageEmbed()
        .setColor("	#3CB371")
        .setTitle(
          "**".concat(
            options[0].concat("**").replace(/,/g, " ").replace(/\"/g, "")
          )
        );

      var PollNumber = "";
      for (i = 1; i < options.length; i++) {
        if (i > 10) {
          break;
        }
        if (i == 10) {
          PollNumber = ":keycap_ten:";
        } else {
          PollNumber = ":".concat(numberToWords.toWords(i).concat(":"));
        }
        exampleEmbed.addFields({
          name: PollNumber,
          value: options[i].replace(/,/g, " ").replace(/\"/g, ""),
        });
      }
      let messageObject = await message.channel.send(exampleEmbed);
      let messageID = messageObject.id;
      message.channel.messages.fetch(messageID).then((messageReaction) => {
        for (i = 1; i < options.length; i++) {
          if (i == 1) {
            messageReaction.react("1️⃣");
          }
          if (i == 2) {
            messageReaction.react("2️⃣");
          }
          if (i == 3) {
            messageReaction.react("3️⃣");
          }
          if (i == 4) {
            messageReaction.react("4️⃣");
          }
          if (i == 5) {
            messageReaction.react("5️⃣");
          }
          if (i == 6) {
            messageReaction.react("6️⃣");
          }
          if (i == 7) {
            messageReaction.react("7️⃣");
          }
          if (i == 8) {
            messageReaction.react("8️⃣");
          }
          if (i == 9) {
            messageReaction.react("9️⃣");
          }
          if (i == 10) {
            messageReaction.react("🔟");
          }
        }
      });
      setTimeout(pollResults, 1000 * 60 * 60 * 24, messageObject, options);
    } catch (TypeError) {
      var err = new Discord.MessageEmbed()
        .setColor("#3CB371")
        .setTitle(
          "Please Format >Poll Command as follows (not case sensitive):"
        )
        .addFields({
          name: '>poll "Question to Poll" "Opt 1" "Opt 2" "Opt3" ... "Opt 10" ',
          value:
            "Note: Questions and options must be between double quotes. The most options MilkBot will allow is 10 and each poll must have at least 1 option.",
        });
      message.channel.send(err);
    }

    //RUN INDEX FROM COMMAND LINE OTHERWISE THIS WILL NOT WORK
    function pollResults(messageOBJ, opts) {
      var reacts = messageOBJ.reactions.cache.array();
      if (reacts) {
        var categorical = [];
        for (i = 0; i < options.length; i++) {
          if (i > 10) {
            break;
          }
          categorical[i] = opts[i].replace(/,/g, " ").replace(/\"/g, "");
        }
        var cmd = "processing-java --sketch=./pollOutput --run ";
        cmd = cmd.concat('"').concat(categorical[0]).concat('" ');
        for (i = 0; i < categorical.length - 1; i++) {
          cmd = cmd
            .concat('"')
            .concat(categorical[i + 1])
            .concat('" ');
          cmd = cmd.concat(reacts[i].count - 1).concat(" ");
        }
        console.log(cmd);
        cp.exec(cmd, exec_options, (err, stdout, stderr) => {
          console.log("Drawing Executing...");
          console.log(stdout);
          message.reply("", { files: ["./pollOutput/output.png"] });
        });
      }
    }
  },
};
