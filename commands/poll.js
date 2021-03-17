const Discord = require("discord.js");
const { MessageAttachment } = require('discord.js');
var numberToWords = require("number-to-words");
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

const width = 1600;
const height = 1200;


module.exports = {
  name: "poll",
  description: "Allows User Polls",
  async execute(message, args, bot) {
    try {
      //Regex pattern that will match anything between quotes
      const myRe = /\"(.*?)\"/g;
      //Iphones and mobile devices use different quotes, so process those as normal ones
      var inner = args.toString().replace(/”/g, '"').replace(/“/g, '"');
      // Match what matches the pattern
      var options = inner.match(myRe);
      
      /////////////////////////////////////////////////////////////////////////
      //
      //    If user requests help, send em to the same place as a syntax error
      //    Or if the user does not add anything to vote on, syntax error!
      //
      if (options[0] == "help") {
        throw TypeError;
      }
      if (!options[1]) {
        throw TypeError;
      }

      //////////////////////////////////////////////////////////////////////////
      //
      //    Create an embed that will prettify the the display of the poll
      //    Also, make the title bold!
      //
      const exampleEmbed = new Discord.MessageEmbed()
        .setColor("	#3CB371")
        .setTitle(
          "**".concat(
            options[0].concat("**").replace(/,/g, " ").replace(/\"/g, "")
          )
        );
      
      ///////////////////////////////////////////////////////////////////////////
      //
      //   Adding things to the embed, such as number of the option,
      //   the options themselves, and the emojis that are the numeric
      //   representation of the option.
      //
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

      ////////////////////////////////////////////////////////////////////////////
      //
      //    Send it away! But we need to hang onto the message ID so that in the
      //    future we can grab some meaningful data from it (reactions, etc)
      //
      let messageObject = await message.channel.send(exampleEmbed);
      let messageID = messageObject.id;

      ////////////////////////////////////////////////////////////////////////////
      //
      //    Fetch the message after you send it, and add some reacts to it
      //    to give the user the illusion of an interactive menu
      //
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

      //Run the function pollResults after X hours (default to 24)
      setTimeout(pollResults, 1000 * 60 * 60 * 24, messageObject, options)// 1000 (ms) = 1 sec, *60 = 1 min, *60 = 1hr, * 24 = 1 day;
    } catch (TypeError) {
      var err = new Discord.MessageEmbed()
        .setColor("#3CB371")
        .setTitle(
          "Please Format >Poll Command as follows (not case sensitive):"
        )
        .addFields({
          name: '>poll "Question to Poll" "Opt 1" "Opt 2" "Opt3" ... "Opt 10" ',
          value:
            "Note: Questions and options must be between double quotes. The most options this bot will allow is 10 and each poll must have at least 1 option.",
        });
      message.channel.send(err);
    }

    function pollResults(messageOBJ, opts) {
      var reacts = messageOBJ.reactions.cache;
      var index = 0;
      var question;
      var answers = [];
      var reactionCounts = [];
      //To ensure post was not deleted
      if (reacts) {
        reacts.map(react => {
          reactionCounts[index] = react.count - 1;
          index++;
        });
        var categorical = [];
        for (i = 0; i < options.length; i++) {
          //A max of ten options is allowed, even if user specifies more, it will drop the rest
          if (i > 10) {
            break;
          }
          categorical[i] = opts[i].replace(/,/g, " ").replace(/\"/g, "");
        }
        question = categorical[0];
        //Seeding labels
        for (i = 0; i < categorical.length - 1; i++) {
          answers[i] = categorical[i+1];
        }
        const canvas = new ChartJSNodeCanvas ({width, height, chartCallback: (ChartJS) => {
          /*
          ChartJS.plugins.register({
            beforeDraw: (chartInstance) => {
              const { chart } = chartInstance;
              const { ctx } = chartInstance.chart;
              ctx.fillStyle = 'white';
              ctx.fillRect(0,0, chart.width, chart.height)
            } 
          })*/}});
        const configuration = {
          type: 'bar',
          data: {
            labels: answers,
            datasets: [
              {
                data: reactionCounts,
                label: "Number of votes",
                backgroundColor: '#7289d9',
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: question,
              fontColor: '#7289d9',
              fontSize: 48
            },
            legend: {
              display: true,
              labels: {
                fontColor: '#7289d9',
                fontSize: 36
              },
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  fontColor: '#7289d9',
                  fontSize: 36
                },
                gridLines: {
                  lineWidth: 8
                }
              }],
              xAxes: [{
                ticks: {
                  fontColor: '#7289d9',
                  fontSize: 36
                }
              }]
            }
          }
        }

        console.log(question.toString());
        console.log(answers.toString());
        console.log(reactionCounts.toString());
        generateImage(canvas, configuration)


      }
    }

    async function generateImage (canvas, configuration){
      const image = await canvas.renderToBuffer(configuration);
      const attachment = new MessageAttachment(image);
      message.reply("", attachment);
    }
  }
};