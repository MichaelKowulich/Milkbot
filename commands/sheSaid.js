module.exports = {
    name: 'sheSaid',
    description: "says what she said",
    execute(message, args){
        var max = 29;
        var min = 1;
        var rand = Math.floor(Math.random() * (max - min) + min);
        var ret = "";
        switch (rand) {
            case 1:
                ret = "It's your birthday, are you feeling alright?";
            break;
            case 2:
                ret = "How can I relate to somebody who doesn't speak? I feel like I'm just treading water";
            break;
            case 3:
                ret = "My name is Eileen, boy that's all you need";
            break;
            case 4:
                ret = "I could hear you giving her head";
            break;
            case 5:
                ret = "Use your hands and my spare time";
            break;
            case 6:
                ret = "Oh she's got a boyfriend anyway";
            break;
            case 7:
                ret = "I'm no fun if I've only a bottle of wine";
            break;
            case 8:
                ret = "Thats what";
            break;
            case 9:
                ret = "We're dressed in black, head to toe with guns hidden under our petticoats";
            break;
            case 10:
                ret = "Is that alright?";
            break;
            case 11:
                ret = "It's nice to have your friends 'round. We're watching the television with no sound";
            break;
            case 12:
                ret = "Babe, you look so cool";
            break;
            case 13:
                ret = "It's not about your body, it's just social implications are brought upon by this party that we're sitting in, and I'd like to say you've changed but you're always the same. I've got a feeling that the marijuana's rotting your brain";
            break;
            case 14:
                ret = "I'd love you to stay but that's simply insane. I've got a feeling that my friends are gonna kick in your brain";
            break;
            case 15:
                ret = "I've been so worried about you lately. You look shit and you smell a bit. You're mad thinking you could ever save me. Not looking like that";
            break;
            case 16:
                ret = "I've been so worried 'bout you lately. You were fit, but you're losing it. You played a part, 'this is how it starts'";
            break;
            case 17:
                ret = "I've got a lot to learn";
            break;
            case 18:
                ret = "I've got a problem with your shoes, and your tunes, but I might move in, And I thought that you were straight, now I'm wondering";
            break;
            case 19:
                ret = "Hello";
            break;
            case 20:
                ret = "I've been romanticizing heroin";
            break;
            case 21:
                ret = "That I should have liked it";
            break;
            case 22:
                ret = "I gave you four years of my life";
            break;
            case 23:
                ret = "My references were spot on (Spot on)";
            break;
            case 24:
                ret = "Oh God, I'll have to think, because we're mates, it doesn't feel right (Feel right)";
            break;
            case 25:
                ret = "My references were spot on (Spot on)";
            break;
            case 26:
                ret = "They should take this pain And give it a name";
            break;
            case 27:
                ret = "I guess I'll take this pain instead of your name";
            break;
            case 28:
                ret = "Maybe I would like you better if you took off your clothes";
            break;
            case 29:
                ret = "The bleeding's incidental";
            break;
        } // end of switch (rand)
        message.channel.send(ret);
    }
}