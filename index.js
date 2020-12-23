const Discord = require('discord.js');
const config = require('./config.json');
const cheerio = require('cheerio');
const request = require('request');
var search = require('youtube-search');
const bot = new Discord.Client();

const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

const opts = {
    maxResults: 1,
    key: config.YOUTUBE_API,
    type: 'video'
};

const PREFIX = '>';
bot.on('ready', () => {
    console.log('MilkBot online');
})



bot.on('message', async message=> {
    let args = message.content.substring(PREFIX.length).split(" ");

    if (message.content.startsWith('>')) {
    switch (args[0].toUpperCase()) {
        case 'PING':
            bot.commands.get('ping').execute(message, args);
            break;
        case 'PONG':
            bot.commands.get('pong').execute(message, args);
            break;
        case 'SUGGEST':
            try {
            if ((args[1].toUpperCase() === "THE" && args[2].toString().toUpperCase() == '1975') || (args[1].toString().toUpperCase() === "1975")) {
            var max = 86;
            var min = 1;
            var rand = Math.floor(Math.random() * (max - min) + min);
            var title = "";
            var tag = "";
            switch (rand){
                case 1:
                    tag = ("I think you should listen to 'the 1975' by the 1975\n");
                    title = "the 1975 the 1975 self titled";
                break;
                case 2:
                    tag = ("I think you should listen to 'The City (Album Version)' by the 1975\n");
                    title = "The City (Album Version) the 1975";
                break;
                case 3:
                    tag = ("I think you should listen to 'M.O.N.E.Y' by the 1975\n");
                    title = "M.O.N.E.Y the 1975";
                break;
                case 4:
                    tag = ("I think you should listen to 'Chocolate' by the 1975\n");
                    title = "Chocolate the 1975";
                break;
                case 5:
                    tag = ("I think you should listen to 'Sex (Album Version)' by the 1975\n");
                    title = "Sex (album version) the 1975 music video";
                break;
                case 6:
                    tag = ("I think you should listen to 'Talk!' by the 1975\n");
                    title = "Talk! the 1975";
                break;
                case 7:
                    tag = ("I think you should listen to 'An Encounter' by the 1975\n");
                    title = "An Encounter the 1975";
                break;
                case 8:
                    tag = ("I think you should listen to 'Heart Out' by the 1975\n");
                    title = "Heart Out the 1975 music video";
                break;
                case 9:
                    tag = ("I think you should listen to 'Settle Down' by the 1975\n");
                    title = "Settle Down the 1975 music video"
                break;
                case 10:
                    tag = ("I think you should listen to 'Robbers' by the 1975\n");
                    title = "Robbers the 1975 music video"
                break;
                case 11:
                    tag = ("I think you should listen to 'Girls' by the 1975\n");
                    title = "Girls the 1975 music video";
                break;
                case 12:
                    tag = ("I think you should listen to '12' by the 1975\n");
                    title = "12 the 1975"
                break;
                case 13:
                    tag = ("I think you should listen to 'She Way Out' by the 1975\n");
                    title = "She way out the 1975";
                break;
                case 14:
                    tag = ("I think you should listen to 'Menswear' by the 1975\n");
                    title = "Menswear the 1975";
                break;
                case 15:
                    tag = ("I think you should listen to 'Pressure' by the 1975\n");
                    title = "Pressure the 1975";
                break;
                case 16:
                    tag = ("I think you should listen to 'Is there Somebody Who Can Watch You' by the 1975\n");
                    title = "Is there somebody who can watch you the 1975";
                break;
                case 17:
                    tag = ("I think you should listen to 'the 1975' by the 1975\n");
                    title = "the 1975 the 1975 preview";
                break;
                case 18:
                    tag = ("I think you should listen to 'Love Me' by the 1975\n");
                    title = "Love Me The 1975 music video";
                break;
                case 19:
                    tag = ("I think you should listen to 'UGH!' by the 1975\n");
                    title = "UGH! the 1975 music video";
                break;
                case 20:
                    tag = ("I think you should listen to 'A Change Of Heart' by the 1975\n");
                    title = "A Change of heart the 1975 music video";
                break;
                case 21:
                    tag = ("I think you should listen to 'She's American' by the 1975\n");
                    title = "Shes American the 1975";
                break;
                case 22:
                    tag = ("I think you should listen to 'If I Believe You' by the 1975\n");
                    title = "If I believe you the 1975";
                break;
                case 23:
                    tag = ("I think you should listen to 'Please Be Naked' by the 1975\n");
                    title = "Please be naked the 1975 studio";
                break;
                case 24:
                    tag = ("I think you should listen to 'Lostmyhead' by the 1975\n");
                    title = "Lostmyhead the 1975 studio"
                break;
                case 25:
                    tag = ("I think you should listen to 'The Ballad Of Me And My Brain' by the 1975\n");
                    title = "The ballad of me and my brain the 1975";
                break;
                case 26:
                    tag = ("I think you should listen to 'Somebody Else' by the 1975\n");
                    title = "Somebody else the 1975 music video";
                break;
                case 27:
                    tag = ("I think you should listen to 'Loving Someone' by the 1975\n");
                    title = "Loving someone the 1975 studio";
                break;
                case 28:
                    tag = ("I think you should listen to 'I like it when you sleep, for you are so beautiful yet so unaware of it' by the 1975\n");
                    title = "I like it when you sleep for you are so beautiful yet so unaware of it the 1975"
                break;
                case 29:
                    tag = ("I think you should listen to 'The Sound' by the 1975\n");
                    title = "The Sound the 1975 music video";
                break;
                case 30:
                    tag = ("I think you should listen to 'This Must Be My Dream' by the 1975\n");
                    title = "This must be my dream the 1975";
                break;
                case 31:
                    tag = ("I think you should listen to 'Paris' by the 1975\n");
                    title = "Paris the 1975";
                break;
                case 32:
                    tag = ("I think you should listen to 'Nana' by the 1975\n");
                    title = "Nana the 1975";
                break;
                case 33:
                    tag = ("I think you should listen to 'She Lays Down' by the 1975\n");
                    title = "She Lays Down the 1975";
                break;
                case 34:
                    tag = ("I think you should listen to 'the 1975' by the 1975\n");
                    title = "the 1975 the 1975 a brief inquiry into online relationships";
                break;
                case 35:
                    tag = ("I think you should listen to 'Give Yourself A Try' by the 1975\n");
                    title = "Give yourself a try the 1975 music video";
                break;
                case 36:
                    tag = ("I think you should listen to 'TOOTIMETOOTIMETOOTIME' by the 1975\n");
                    title = "TOOTIMETOOTIMETOOTIME the 1975 music video";
                break;
                case 37:
                    tag = ("I think you should listen to 'How To Draw / Petrichor' by the 1975\n");
                    title = "How to draw / petrichor the 1975";
                break;
                case 38:
                    tag = ("I think you should listen to 'Love It If We Made It' by the 1975\n");
                    title = "Love it if we made it the 1975 music video";
                break;
                case 39:
                    tag = ("I think you should listen to 'Be My Mistake' by the 1975\n");
                    title = "Be My Mistake the 1975";
                break;
                case 40:
                    tag = ("I think you should listen to 'Sincerity Is Scary' by the 1975\n");
                    title = "Sincerity is scary the 1975 music video";
                break;
                case 41:
                    tag = ("I think you should listen to 'I Like America And America Likes Me' by the 1975\n");
                    title = "I like America and america likes me the 1975";
                break;
                case 42:
                    tag = ("I think you should listen to 'The Man Who Married A Robot / Love Theme' by the 1975\n");
                    title = "The Man Who Married A Robot / Love theme the 1975";
                break;
                case 43:
                    tag = ("I think you should listen to 'Inside Your Mind' by the 1975\n");
                    title = "Inside your mind the 1975";
                break;
                case 44:
                    tag = ("I think you should listen to 'It's Not Living (If It's Not With You)' by the 1975\n");
                    title = "It's not living (If It's Not With You) the 1975 music video";
                break;
                case 45:
                    tag = ("I think you should listen to 'Surrounded By Heads And Bodies' by the 1975\n");
                    title = "Surrounded by heads and bodies the 1975";
                break;
                case 46:
                    tag = ("I think you should listen to 'Mine' by the 1975\n");
                    title = "Mine the 1975";
                break;
                case 47:
                    tag = ("I think you should listen to 'I Couldn't Be More In Love' by the 1975\n");
                    title = "I couldn't be more in love the 1975";
                break;
                case 48:
                    tag = ("I think you should listen to 'I Always Wanna Die (Sometimes)' by the 1975\n");
                    title = "I always wanna die (sometimes) the 1975";
                break;
                case 49:
                    tag = ("I think you should listen to 'the 1975' by the 1975\n");
                    title = "notes on a conditional form the 1975 the 1975"
                break;
                case 50:
                    tag = ("I think you should listen to 'People' by the 1975\n<Epilepsy Warning!> \n");
                    title = "People the 1975 Music video";
                break;
                case 51:
                    tag = ("I think you should listen to 'The End (Music For Cars)' by the 1975\n");
                    title = "The End (Music For Cars) the 1975";
                break;
                case 52:
                    tag = ("I think you should listen to 'Frail State Of Mind' by the 1975\n");
                    title = "Frail state of mind the 1975 music video";
                break;
                case 53:
                    tag = ("I think you should listen to 'Streaming' by the 1975\n");
                    title = "Streaming the 1975"
                break;
                case 54:
                    tag = ("I think you should listen to 'The Birthday Party' by the 1975\n");
                    title = "The birthday party the 1975 music video";
                break;
                case 55:
                    tag = ("I think you should listen to 'Yeah I Know' by the 1975\n");
                    title = "Yeah i know the 1975";
                break;
                case 56:
                    tag = ("I think you should listen to 'Then Because She Goes' by the 1975\n");
                    title = "Then because she goes the 1975";
                break;
                case 57:
                    tag = ("I think you should listen to 'Jesus Christ 2005 God Bless America' by the 1975\n");
                    title = "Jesus Christ 2005 God Bless America the 1975";
                break;
                case 58:
                    tag = ("I think you should listen to 'Roadkill' by the 1975\n");
                    title = "Roadkill the 1975";
                break;
                case 59:
                    tag = ("I think you should listen to 'Me & You Together Song' by the 1975\n");
                    title = "Me & you together song the 1975 music video";
                break;
                case 60:
                    tag = ("I think you should listen to 'I Think There's Something You Should Know' by the 1975\n");
                    title = "I Think there's something you should know the 1975";
                break;
                case 61:
                    tag = ("I think you should listen to 'Nothing Revealed / Everything Denied' by the 1975\n");
                    title = "Nothing Revealed / Everything Denied the 1975";
                break;
                case 62:
                    tag = ("I think you should listen to 'Tonight (I Wish I Was Your Boy)' by the 1975\n");
                    title = "Tonight (I Wish I Was Your boy) the 1975"
                break;
                case 63:
                    tag = ("I think you should listen to 'Shiny Collarbone' by the 1975\n");
                    title = "Shiny Collarbone the 1975";
                break;
                case 64:
                    tag = ("I think you should listen to 'If You’re Too Shy (Let Me Know)' by the 1975\n");
                    title = "If You're Too Shy (Let Me Know) the 1975";
                break;
                case 65:
                    tag = ("I think you should listen to 'Playing On My Mind' by the 1975\n");
                    title = "Playing on my mind the 1975";
                break;
                case 66:
                    tag = ("I think you should listen to 'Having No Head' by the 1975\n");
                    title = "Having no head the 1975";
                break;
                case 67:
                    tag = ("I think you should listen to 'What Should I Say' by the 1975\n");
                    title = "What Should I Say The 1975"
                break;
                case 68:
                    tag = ("I think you should listen to 'Bagsy Not in Net' by the 1975\n");
                    title = "Bagsy Not In Net The 1975";
                break;
                case 69:
                    tag = ("I think you should listen to 'Don't Worry' by the 1975\n");
                    title = "Don't worry the 1975";
                break;
                case 70:
                    tag = ("I think you should listen to 'Guys' by the 1975\n");
                    title = "Guys the 1975 music video";
                break;
                case 71:
                    tag = ("I think you should listen to 'Facedown' by the 1975\n");
                    title = "Facedown the 1975";
                break;
                case 72:
                    tag = ("I think you should listen to 'The City (EP Version)' by the 1975\n");
                    title = "The City (EP Version) the 1975";
                break; 
                case 73:
                    tag = ("I think you should listen to 'Antichrist' by the 1975\n");
                    title = "Antichrist the 1975";
                break;
                case 74:
                    tag = ("I think you should listen to 'Intro/Set3' by the 1975\n");
                    title = "Intro/set3 the 1975";
                break;
                case 75:
                    tag = ("I think you should listen to 'Undo' by the 1975\n");
                    title = "Undo the 1975";
                break;
                case 76:
                    tag = ("I think you should listen to 'Sex (EP Version)' by the 1975\n");
                    title = "Sex (EP Version) the 1975";
                break;
                case 77:
                    tag = ("I think you should listen to 'You' by the 1975\n");
                    title = "You the 1975";
                break;
                case 78:
                    tag = ("I think you should listen to 'Milk' by the 1975\n");
                    title = "Milk the 1975";
                break;
                case 79:
                    tag = ("I think you should listen to 'Anobrain' by the 1975\n");
                    title = "Anobrain the 1975";
                break;
                case 80:
                    tag = ("I think you should listen to 'HNSCC' by the 1975\n");
                    title = "HNSCC the 1975";
                break;
                case 81:
                    tag = ("I think you should listen to 'Head.Cars.Bending' by the 1975\n");
                    title = "Head.cars.bending the 1975";
                break; 
                case 82:
                    tag = ("I think you should listen to 'Me' by the 1975\n");
                    title = "Me the 1975";
                break;
                case 83:
                    tag = ("I think you should listen to 'Haunt//Bed' by the 1975\n");
                    title = "Haunt//bed the 1975";
                break;
                case 84:
                    tag = ("I think you should listen to 'So Far (It's Alright)' by the 1975\n");
                    title = "So far (It's alright) the 1975";
                break;
                case 85:
                    tag = ("I think you should listen to 'fallingforyou' by the 1975\n");
                    title = "fallingforyou the 1975";
                break;
                case 86:
                    tag = ("I think you should listen to '102' by the 1975\n");
                    title = "102 the 1975";
                break;
            }
            //-----------------------------------------------
            //  Youtube Search
            //-----------------------------------------------
            let results = await search(title, opts).catch(err => console.log(err));
            if(results) {
                let youtubeResults = results.results;
                let link = youtubeResults.map(result => {
                    return result.link;
                })
                message.reply(tag.concat(link[0]));
            } 
        }
        else if ((args[1].toUpperCase() === 'DLID') || (args[1].toUpperCase() === 'DRIVE' && args[2].toUpperCase() === 'LIKE' && args[3].toUpperCase() === 'I' && args[4].toUpperCase() === "DO")) {
            var max = 30;
            var min = 1;
            var title = "";
            var tag = "";
            var rand = Math.floor(Math.random() * (max - min) + min);
            switch(rand) {
            case 1:
                tag = ("I think you should listen to 'Forward' by Drive Like I Do\n");
                title = "Forward Drive Like I do";
            break;
            case 2:
                tag = ("I think you should listen to 'The Go' by Drive Like I Do\n");
                title = "The Go Drive Like I Do";
            break;
            case 3:
                tag = ("I think you should listen to 'Wolves' by Drive Like I Do\n");
                title = "Wolves Drive Like I Do";
            break;
            case 4:
                tag = ("I think you should listen to 'Lost Boys' by Drive Like I Do\n");
                title = "Lost boys Drive Like I Do";
            break;
            case 5:
                tag = ("I think you should listen to 'Au Bord De La Mer' by Drive Like I Do\n");
                title = "Au Bord De La Mer Drive Like I Do";
            break;
            case 6:
                tag = ("I think you should listen to '28' by Drive Like I Do\n");
                title = "28 Drive Like I Do";
            break;
            case 7:
                tag = ("I think you should listen to 'Moon' by Drive Like I Do\n");
                title = "Moon Drive Like I Do";
            break;
            case 8:
                tag = ("I think you should listen to 'Shoot Out At The University Fair' by Drive Like I Do\n");
                title = "Shoot Out At The University Fair Drive Like I Do";
            break;
            case 9:
                tag = ("I think you should listen to 'Penelope' by Drive Like I Do\n");
                title = "Penelope Drive Like I Do";
            break;
            case 10:
                tag = ("I think you should listen to 'Kobra Kai Never Dies' by Drive Like I Do\n");
                title = "Kobra Kai Never Dies Drive Like I Do";
            break;
            case 11:
                tag = ("I think you should listen to 'We Are The Street Fighters' by Drive Like I Do\n");
                title = "We Are The Street Fighters Drive Like I Do";
            break;
            case 12:
                tag = ("I think you should listen to 'I Can't Believe We're Back On Emerald Hill' by Drive Like I Do\n");
                title = "I Can't Believe We're Back On Emerald Hill Drive Like I Do";
            break;
            case 13:
                tag = ("I think you should listen to 'Liu Kang Vs. Ryu' by Drive Like I Do\n");
                title = "Liu Kang Vs. Ryu Drive Like I Do";
            break;
            case 14:
                tag = ("I think you should listen to 'Jump.Start.Souxie' by Drive Like I Do\n");
                title = "Jump.Start.Souxie Drive Like I Do";
            break;
            case 15:
                tag = ("I think you should listen to 'Cheeriosandkungfumovies' by Drive Like I Do\n");
                title = "Cheeriosandkungfumovies Drive Like I Do";
            break;
            case 16:
                tag = ("I think you should listen to 'Love Without Sleep' by Drive Like I Do\n");
                title = "Love Without Sleep Drive Like I Do";
            break;
            case 17:
                tag = ("I think you should listen to 'Scary Monsters' by Drive Like I Do\n");
                title = "Scary Monsters Drive Like I Do";
            break;
            case 18:
                tag = ("I think you should listen to 'Ghosts' by B I G S L E E P\n");
                title = "Ghosts B I G S L E E P";
            break;
            case 19:
                tag = ("I think you should listen to 'One Wish' by B I G S L E E P\n");
                title = "One Wish B I G S L E E P";
            break;
            case 20:
                tag = ("I think you should listen to 'Antichrist (Demo)' by B I G S L E E P\n");
                title = "The 1975 Antichrist Old Version";
            break;
            case 21:
                tag = ("I think you should listen to 'M.O.N.E.Y (Demo)' by B I G S L E E P\n");
                title = "M.O.N.E.Y B I G S L E E P";
            break;
            case 22:
                tag = ("I think you should listen to 'The City (Demo)' by B I G S L E E P\n");
                title = "The City Drive Like I Do";
            break;
            case 23:
                tag = ("I think you should listen to 'Robbers (Demo)' by B I G S L E E P\n");
                title = "The 1975 Robbers Old Version";
            break;
            case 24:
                tag = ("I think you should listen to 'Sex (Demo)' by B I G S L E E P\n");
                title = "The 1975 Sex Drive Like I Do Demo";
            break;
            case 25:
                tag = ("I think you should listen to 'Chocolate (Demo) 1' by B I G S L E E P\n");
                title = "The 1975 Chocolate Demo 1";
            break;
            case 26:
                tag = ("I think you should listen to 'Chocolate (Demo) 2' by B I G S L E E P\n");
                title = "The 1975 Chocolate Demo 2";
            break;
            case 27:
                tag = ("I think you should listen to 'She Way Out (Demo)' by B I G S L E E P\n");
                title = "She Way Out B I G S L E E P";
            break;
            case 28:
                tag = ("I think you should listen to 'Out My Head' by Talkhouse\n");
                title = "Out My Head Talkhouse";
            break;
            case 29:
                tag = ("I think you should listen to 'If I Ever Fall In Love' by Talkhouse\n");
                title = "If I Ever Fall In Love Talkhouse";
            break;
            }
            //-----------------------------------------------
            //  Youtube Search
            //-----------------------------------------------
            let results = await search(title, opts).catch(err => console.log(err));
            if(results) {
                let youtubeResults = results.results;
                let link = youtubeResults.map(result => {
                    return result.link;
                })
                message.reply(tag.concat(link[0]));
            }
        }
        else if (args[1].toUpperCase() === 'LEWIS' && args[2].toUpperCase() === 'POOLE') {
                message.reply("I think you should listen to 'Oxygen' by Lewis Poole\n https://www.youtube.com/watch?v=iE5TOOJrF9o");
        }
        else {
            throw TypeError;
        }
    }catch (TypeError) {
        var exampleEmbed = new Discord.MessageEmbed()
        .setColor('#3CB371')
        .setTitle('Please specify one of the following inputs (not case sensitive):')
        .addFields (
            {name: '>Suggest (the 1975/1975)', value: 'Gives a random 1975 song suggestion'},
            {name: '>Suggest (dlid/drive like i do)', value: 'Gives a random Drive Like I Do/B I G S L E E P/Talkhouse song suggestion'},
        );
        message.channel.send(exampleEmbed);
    }
        break; // Break for >Suggest case
        //-Whats the vibe?
        //---------------------------------------------
        case 'WHATS':
        case 'WHAT\'S':
            try {
                if (args[1].toUpperCase() == 'THE' && (args[2].toUpperCase() == 'VIBE' || args[2].toUpperCase() == 'VIBE?')) {
                    message.channel.send("I wouldn't know, I'm normally in bed at this time");
                }
            } catch (TypeError){

            }
        break;
        case 'WHATSTHEVIBE':
            message.channel.send("I wouldn't know, I'm normally in bed at this time");
        break; // Break for whatsthevibe 
        
        //-She said
        //-----------------------------------------------
        case 'SHESAID':
            bot.commands.get('sheSaid').execute(message, args);
        break; // end of "shesaid"
        case 'SHE':
            try {
                if(args[1].toUpperCase() === 'SAID') {
                    bot.commands.get('sheSaid').execute(message, args);
                }
            } catch (TypeError) {}
        break;
        //-MilkWalker
        //----------------------------------------------
        case 'MILKWALKER':
            message.channel.send("", {files:["./milkwalker.jpg"]});
        break;
        //-Poll
        //----------------------------------------------
        case 'POLL':
            bot.commands.get('poll').execute(message, args, bot);
        break;
        //-Image
        //----------------------------------------------
        case 'IMAGE':
            try {
                if (!args[1] || args[1].toUpperCase() == "THE1975" || (args[1].toUpperCase() === "THE" && args[2] === "1975")) {
                    bot.commands.get('image').execute(message, args, "the 1975");
                }
                else if (args[1].toUpperCase() === "HELP") {
                    throw TypeError;
                }
                else if (args[1].toUpperCase() === 'ADAM' || args[1].toUpperCase() === 'HANN') { 
                    bot.commands.get('image').execute(message, args, "Adam Hann The 1975");
                }
                else if (args[1].toUpperCase() === 'GEORGE' ) { 
                    bot.commands.get('image').execute(message, args, "George Daniel The 1975");
                }               
                else if (args[1].toUpperCase() === 'MATTY' || args[1].toUpperCase() === "MATT" || args[1].toUpperCase() === "MATTHEW") { 
                    bot.commands.get('image').execute(message, args, "Matty Healy The 1975");
                }
                else if (args[1].toUpperCase() === 'ROSS' || args[1].toUpperCase() == "RASS") { 
                    bot.commands.get('image').execute(message, args, "Ross MacDonald The 1975");
                }
                else {
                    throw TypeError;
                }
            } catch (TypeError) {
                var err = new Discord.MessageEmbed()
                .setColor('#3CB371')
                .setTitle('Please Format >Image Command as follows (not case sensitive):')
                .addFields (
                    {name: '>Image (the1975/Matty/Ross/George/Adam)', value: 'Note: Providing no options will result in the same operation as ">Image The 1975"'}
                );
                message.channel.send(err);
            }
        break;
        //-Gif
        //------------------------------------------------
        case 'GIF':
            bot.commands.get('gif').execute(message,args, "the 1975 gifs");
        break;
        //-Artwork
        //----------------------------------------------
        case 'ARTWORK':
            try {
            if (!args[1]) {
                bot.commands.get('artwork').execute(message,args,1,70, -1);
            }
            else if (args[1].toUpperCase() === "HELP") {
                throw TypeError;
            }
            //>artwork the1975
            else if(args[1].toUpperCase() === "THE1975") {
                try {
                if (!args[2]) {
                    bot.commands.get('artwork').execute(message,args,1,16, -1);
                }
                else if (parseInt(args[2]) > 16 || parseInt(args[2]) < 1){
                    message.channel.send("Error: invalid track number");
                }
                else {
                    bot.commands.get('artwork').execute(message,args,1,16, parseInt(args[2]));
                }
                }catch (TypeError){
                    message.channel.send("Error: invalid track number");
                }
            }
            //>artwork the 1975
            else if (args[1].toUpperCase() === "THE" && args[2].toUpperCase() === "1975") {
                try {
                    if (!args[3]) {
                        bot.commands.get('artwork').execute(message,args,1,16, -1);
                    }
                    else if (parseInt(args[3]) > 16 || parseInt(args[3]) < 1){
                        message.channel.send("Error: invalid track number");
                    }
                    else {
                        bot.commands.get('artwork').execute(message,args,1,16, parseInt(args[3]));
                    }
                    }catch (TypeError){
                        message.channel.send("Error: invalid track number");
                    }
            }
            //>artwork iliwys
            else if (args[1].toUpperCase() === "ILIWYS") {
                try {
                    if (!args[2]) {
                        bot.commands.get('artwork').execute(message,args,17,33, -1);
                    }
                    else if (parseInt(args[2]) > 17 || parseInt(args[2]) < 1){
                        message.channel.send("Error: invalid track number");
                    }
                    else {
                        bot.commands.get('artwork').execute(message,args,1,16, parseInt(args[2])+16);
                    }
                    }catch (TypeError){
                        message.channel.send("Error: invalid track number");
                    }
            }
            //>artwork abiior
            else if (args[1].toUpperCase() === "ABIIOR") {
                try {
                if (!args[2]) {
                    bot.commands.get('artwork').execute(message,args,34,48, -1);
                }
                else if (parseInt(args[2]) > 15 || parseInt(args[2]) < 1){
                    message.channel.send("Error: invalid track number");
                }
                else {
                    bot.commands.get('artwork').execute(message,args,1,16, parseInt(args[2])+33);
                }
                }catch (TypeError){
                    message.channel.send("Error: invalid track number");
                }
            }
            //>artwork noacf
            else if (args[1].toUpperCase() === "NOACF") {
                try {
                    if (!args[2]) {
                        bot.commands.get('artwork').execute(message,args,49,70, -1);
                    }
                    else if (parseInt(args[2]) > 22 || parseInt(args[2]) < 1){
                        message.channel.send("Error: invalid track number");
                    }
                    else {
                        bot.commands.get('artwork').execute(message,args,1,16, parseInt(args[2])+48);
                    }
                    }catch (TypeError){
                        message.channel.send("Error: invalid track number");
                    }
            }
            else {
                throw TypeError;
            }
        } catch (TypeError){
            var err = new Discord.MessageEmbed()
            .setColor('#3CB371')
            .setTitle('Please Format >Artwork Command as follows (not case sensitive):')
            .addFields (
                {name: '>Artwork (OPTIONAL: the1975/ILIWYS/ABIIOR/NOACF) (OPTIONAL: Track Number)', value: 'Note: Providing no options will randomize all artworks'}
            );
            message.channel.send(err);
        }
        break;
        //-Help
        //----------------------------------------------
        case 'HELP':
    var exampleEmbed = new Discord.MessageEmbed()
                .setColor('	#3CB371')
                .setTitle('--:milk: MilkBot Menu :milk:--')
                .addFields (
                     {name: '>Artwork', value: '-Displays a random official 1975 song artwork (exclusive of roadkill). See ">Artwork help" for more information'},
                     {name: '>Gif', value: '-Posts a random 1975 related gif'},
                     {name: '>Help', value: '-Displays this help menu'},
                     {name: '>Image', value: '-Displays a random 1975 related image. See ">Image help" for more information'},
                     {name: '>Ping', value: '-Tests if bot is online'},
                     {name: '>Poll', value: '-Create a new poll! See ">Poll help" for more information'},
                     {name: '>She Said', value: '-Gives a random "She said" 1975 lyric'},
                     {name: '>Suggest', value: '-Suggests a random (the 1975/Drive Like I Do) song to listen to'}
                 );
                    message.channel.send(exampleEmbed);
        break; //Break for Help 
    } //end of switch(args[0])
} // end of if (checks for >prefix)
})

bot.login(config.TOKEN);