module.exports = {
    name: 'cover',
    description: "displays an album cover art from the 1975",
    execute(message, args, database){
        //////////////////////////////////////////////////////
        //
        //  If user does not specify a file type
        //
        if(!args[1]) {
            var max = 1;
            var min = 1;
            let query = "SELECT COUNT(*) AS 'COUNT' FROM albumCovers";
              database.get(query, (err, row) => {
                if (err) {
                  console.log(err);
                  return;
                }
                if (row != undefined) {
                  max = row.COUNT;
                  var rand = Math.floor(Math.random() * (max - min) + min);
                  let query = "SELECT albumCoverFile FROM albumCovers WHERE id = ".concat(
                    rand.toString()
                  );
                  database.get(query, (err, row) => {
                    if (err) {
                      console.log(err);
                      return;
                    }
                    if (row != undefined) {
                      var filename = row.albumCoverFile;
                      message.channel.send("", {files:["./album_covers/"+filename]});
                    }
                  });
                }
            });
        //////////////////////////////////////////////////////////////////////////////
        //
        //  If user does specify arguments
        // 
        } else {
            ////////////////////////////////////////////////////////////////////////////
            //
            // Input sanitization (allows users to enter one option many ways)
            //
            args[1] = args[1].toLowerCase();
            const [first, ...remaining] = args;
            let arg = remaining.join("_");
            switch(arg) {
                case "self_titled":
                    arg = "the_1975";
                break;
                case "i_like_it_when_you_sleep":
                    arg = "iliwys";
                break;
                case "i_like_it_when_you_sleep_for_you_are_so_beautiful_yet_so_unaware_of_it":
                    arg = "iliwys";
                break;
                case "a_brief_inquiry":
                    arg = "abiior";
                break;
                case "a_brief_inquiry_into_online_relationships":
                    arg = "abiior";
                break;
                case "notes_on_a_conditional_form":
                    arg = "noacf";
                break;
                case "notes":
                    arg = "noacf";
                break;
                case "sex_ep":
                    arg = "sex";
                break;
                case "music_for_cars_ep":
                    arg = "music_for_cars";
                break;
                case "iv_ep":
                    arg = "iv";
                break;
                case "facedown_ep":
                    arg = "facedown";
                break;
                case "falling_for_you":
                    arg = "fallingforyou";
                break;
                case "haunt//bed":
                    arg = "fallingforyou";
                break;
                case "haunt_bed":
                    arg = "fallingforyou";
                break;
            }
            let query = "SELECT * FROM albumCovers WHERE albumCoverName = '".concat(
                arg
              ).concat("'");
              database.get(query, (err, row) => {
                if (err) {
                  console.log(err);
                  return;
                }
                if (row != undefined) {
                  let filename = row.albumCoverFile;
                  message.channel.send("", {files:["./album_covers/"+filename]});
                }
              });
        }
    }
}