module.exports = {
    name: 'sheSaid',
    description: "says what she said",
    execute(message, args, database){
        var max = 28;
        var min = 1;
        var rand = Math.floor(Math.random() * (max - min) + min);
        let query = "SELECT description FROM SheSaid WHERE id = ".concat(
            rand.toString()
          );
          database.get(query, (err, row) => {
            if (err) {
              console.log(err);
              return;
            }
            if (row != undefined) {
              let lyric = row.description;
              message.channel.send(lyric);
            }
          });
    }
}