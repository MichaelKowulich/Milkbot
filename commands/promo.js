const Discord = require("discord.js");
module.exports = {
    name: 'promo',
    description: "displays a promo image from the 1975",
    execute(message, args, database){
        //////////////////////////////////////////////////////////////////
        //
        //  If user does not specify an album to get a promo image from
        //
        if(!args[1]) {
            var max = 1;
            var min = 1;
            let query = "SELECT COUNT(*) AS 'COUNT' FROM promo";
              database.get(query, (err, row) => {
                if (err) {
                  console.log(err);
                  return;
                }
                if (row != undefined) {
                  max = row.COUNT;
                  var rand = Math.floor(Math.random() * (max - min) + min);
                  let query = "SELECT filename FROM promo WHERE id = ".concat(
                    rand.toString()
                  );
                  database.get(query, (err, row) => {
                    if (err) {
                      console.log(err);
                      return;
                    }
                    if (row != undefined) {
                      var filename = row.filename;
                      message.channel.send("", {files:["./promo/"+filename]});
                    }
                  });
                } else {
                    var helpMessage = new Discord.MessageEmbed()
                    .setColor("#3CB371")
                    .setTitle(
                        "Please specify one of the following inputs (not case sensitive):"
                    )
                    .addFields(
                        {
                            name: ">Promo <name_of_album>",
                            value:
                            "To select a specific album's artwork",
                        },
                        {
                            name: ">Promo",
                            value:
                            "To select a random album's artwork",
                        }
                    );
                message.channel.send(helpMessage);
                }
            });
        }
        //////////////////////////////////////////////////////////////
        //
        //  If user DOES specify which album they want the art from
        //
        else {
            /////////////////////////////////////////////////////////////////////
            //
            //  Input sanitization to allow user to type one thing many ways
            //
            args[1] = args[1].toLowerCase();
            if (args[1] != "help") {
                const [first, ...remaining] = args;
                let arg = remaining.join("_");
                switch(arg) {
                    case "self_titled":
                        arg = "the_1975";
                    break;
                    case "the_1975":
                        arg = "the_1975";
                    break;
                    case "i_like_it_when_you_sleep_for_you_are_so_beautiful_yet_so_unaware_of_it":
                        arg = "iliwys";
                    break;
                    case "i_like_it_when_you_sleep":
                        arg = "iliwys";
                    break;
                    case "a_brief_inquiry":
                        arg = "abiior";
                    break;
                    case "a_brief_inquiry_into_online_relationships":
                        arg = "abiior";
                    break;
                    case "notes":
                        arg = "noacf";
                    break;
                    case "notes_on_a_conditional_form":
                        arg = "noacf";
                    break;
                }
                let query = `SELECT COUNT(*) as 'COUNT' FROM promo WHERE album = '${arg}'`
                var max = 1;
                var min = 1;
                database.get(query, (err, row) => {
                    if (err) {
                      console.log(err);
                      return;
                    }
                    if (row != undefined) {
                      max = row.COUNT;
                      var rand = Math.floor(Math.random() * (max - min) + min);
                      let query = `SELECT filename FROM promo WHERE promo_listing = ${rand} AND album = '${arg}'`; 
                      database.get(query, (err, row) => {
                        if (err) {
                          console.log(err);
                          return;
                        }
                        if (row != undefined) {
                          var filename = row.filename;
                          message.channel.send("", {files:["./promo/"+filename]});
                        } else {
                            var helpMessage = new Discord.MessageEmbed()
                            .setColor("#3CB371")
                            .setTitle(
                                "Please specify one of the following inputs (not case sensitive):"
                            )
                            .addFields(
                                {
                                    name: ">Promo <name_of_album>",
                                    value:
                                    "To select a specific album's artwork",
                                },
                                {
                                    name: ">Promo",
                                    value:
                                    "To select a random album's artwork",
                                }
                            );
                            message.channel.send(helpMessage);
                        }
                      });
                    }
                });
            } else {
                var helpMessage = new Discord.MessageEmbed()
                    .setColor("#3CB371")
                    .setTitle(
                        "Please specify one of the following inputs (not case sensitive):"
                    )
                    .addFields(
                        {
                            name: ">Promo <name_of_album>",
                            value:
                            "To select a specific album's artwork",
                        },
                        {
                            name: ">Promo",
                            value:
                            "To select a random album's artwork",
                        }
                    );
                message.channel.send(helpMessage);
            }
        }
    }
}