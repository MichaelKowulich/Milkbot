module.exports = {
    name: 'suggest',
    description: "Suggests a random 1975 song",
    execute(message, args, database, band, options){
        var search = require("youtube-search");
        //The 1975
        if (band == "the 1975") {
            var max = 88;
            var min = 1;
            var rand = Math.floor(Math.random() * (max - min) + min);
            let query = "SELECT tag, title FROM the1975 WHERE id = ".concat(
                rand.toString()
              );
            database.get(query, async (err, row) => {
            if (err) {
                console.log(err);
                return;
            }
            if (row != undefined) {
                let tag = row.tag;
                let title = row.title;
                let results = await search(title, options).catch((err) =>
                console.log(err)
                );
                if (results) {
                    let youtubeResults = results.results;
                    let link = youtubeResults.map((result) => {
                    return result.link;
                });
                message.reply(tag.concat('\n').concat(link[0]));
                }
            }
            });
        }
        // Drive Like I Do
        else if (band == "dlid") {
            var max = 29;
            var min = 1;
            var rand = Math.floor(Math.random() * (max - min) + min);
            let query = "SELECT tag, title FROM dlid WHERE id = ".concat(
                rand.toString()
              );
            database.get(query, async (err, row) => {
            if (err) {
                console.log(err);
                return;
            }
            if (row != undefined) {
                let tag = row.tag;
                let title = row.title;
                let results = await search(title, options).catch((err) =>
                console.log(err)
                );
                if (results) {
                    let youtubeResults = results.results;
                    let link = youtubeResults.map((result) => {
                    return result.link;
                });
                message.reply(tag.concat('\n').concat(link[0]));
                }
            }
            });
        }
    }
}