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
        let lyric = row.description;
        // If the argument silly is not specified
        if(!args[1]) {
          message.channel.send(lyric);
        // If the argument silly is specified
        } else if (args[1].toLowerCase() == "silly") {
          translate(lyric, {to: 'es'}).then(res => {
            //console.log(res.text);
            translate(res.text, {to: 'ru'}).then(res => {
              //console.log(res.text);
              translate(res.text, {to: 'nl'}).then(res => {
                //console.log(res.text);
                translate(res.text, {to: 'zh-CN'}).then(res => {
                  //console.log(res.text);
                  translate(res.text, {to: 'fr'}).then(res => {
                    //console.log(res.text);
                    translate(res.text, {to: 'et'}).then(res => {
                      //console.log(res.text);
                      translate(res.text, {to: 'he'}).then(res => {
                        //console.log(res.text);
                        translate(res.text, {to: 'hr'}).then(res => {
                          //console.log(res.text);
                          translate(res.text, {to: 'hi'}).then(res => {
                            //console.log(res.text);
                            translate(res.text, {to: 'en'}).then(res => {
                              message.channel.send(res.text);
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
