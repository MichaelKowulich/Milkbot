const translate = require('@vitalets/google-translate-api');

module.exports = {
  name: "lyric",
  description: "gets random 1975 lyric",
  execute(message, args, database) {
    var max = 970;
    var min = 1;
    var rand = Math.floor(Math.random() * (max - min) + min);
    let query = "SELECT description FROM lyric WHERE id = ".concat(
      rand.toString()
    );
    database.get(query, (err, row) => {
      if (err) {
        console.log(err);
        return;
      }
      if (row != undefined) {
        var lyric = row.description;
        // If the argument silly is not specified
        if(!args[1]) {
          message.channel.send(lyric);
        // If the argument silly is specified
        } else if (args[1].toLowerCase() == "silly") {
          var languages = [
            'es',
            'ru',
            'nl',
            'zh-CN',
            'fr',
            'et',
            'he',
            'hr',
            'hi',
            'ny',
            'bs',
            'id',
            'ko',
            'pl'
          ];
          var max = languages.length-1;
          var min = 0;
          var rand = Math.floor(Math.random() * (max - min) + min);
          translate(lyric, {to: languages[rand]}).then(res => {
            rand = Math.floor(Math.random() * (max - min) + min);
            translate(res.text, {to: languages[rand]}).then(res => {
              rand = Math.floor(Math.random() * (max - min) + min);
              translate(res.text, {to: languages[rand]}).then(res => {
                rand = Math.floor(Math.random() * (max - min) + min);
                translate(res.text, {to: languages[rand]}).then(res => {
                  rand = Math.floor(Math.random() * (max - min) + min);
                  translate(res.text, {to: languages[rand]}).then(res => {
                    rand = Math.floor(Math.random() * (max - min) + min);
                    translate(res.text, {to: languages[rand]}).then(res => {
                      rand = Math.floor(Math.random() * (max - min) + min);
                      translate(res.text, {to: languages[rand]}).then(res => {
                        rand = Math.floor(Math.random() * (max - min) + min);
                        translate(res.text, {to: languages[rand]}).then(res => {
                          rand = Math.floor(Math.random() * (max - min) + min);
                          translate(res.text, {to: languages[rand]}).then(res => {
                            rand = Math.floor(Math.random() * (max - min) + min);
                            translate(res.text, {to: 'en'}).then(res => {
                              message.reply(res.text);
                              if(args[2] && (args[2].toLowerCase() == 'translatedfrom' || args[2].toLowerCase() == 'tf')) {
                                message.channel.send("Translated From: ");
                                message.channel.send(lyric);
                              }
                            }).catch(err => {
                              console.error(err);
                            });
                          }).catch(err => {
                            console.error(err);
                          });
                        }).catch(err => {
                          console.error(err);
                        });
                      }).catch(err => {
                        console.error(err);
                      });
                    }).catch(err => {
                      console.error(err);
                    });
                  }).catch(err => {
                    console.error(err);
                  });
                }).catch(err => {
                  console.error(err);
                });
              }).catch(err => {
                console.error(err);
              });
            }).catch(err => {
              console.error(err);
            });
          }).catch(err => {
            console.error(err);
          });
        }
      }
    });
  },
};
