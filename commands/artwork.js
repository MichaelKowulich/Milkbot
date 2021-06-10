module.exports = {
    name: 'artwork',
    description: "displays 1975 song artwork",
    execute(message, args, setmin, setmax, tracknumber){
        var max;
        var min;
        var rand;
        if (tracknumber == -1) {
          max = setmax;
          min = setmin;
          rand = Math.floor(Math.random() * (max - min) + min);
        } else if (tracknumber > 0) {
            rand = tracknumber;
        }
        else {
            message.channel.send("Error: invalid track number");
        }
        switch(rand) {
            case 1:
                message.channel.send("", {files:["./images/the_1975(1).jpeg"]});
            break;
            case 2:
                message.channel.send("", {files:["./images/the_city.jpeg"]});
            break;
            case 3:
                message.channel.send("", {files:["./images/money.jpeg"]});
            break;
            case 4:
                message.channel.send("", {files:["./images/chocolate.jpeg"]});
            break;
            case 5:
                message.channel.send("", {files:["./images/sex.jpeg"]});
            break;
            case 6:
                message.channel.send("", {files:["./images/talk!.jpeg"]});
            break;
            case 7:
                message.channel.send("", {files:["./images/an_encounter.jpeg"]});
            break;
            case 8:
                message.channel.send("", {files:["./images/heart_out.jpeg"]});
            break;
            case 9:
                message.channel.send("", {files:["./images/settle_down.jpeg"]});
            break;
            case 10:
                message.channel.send("", {files:["./images/robbers.jpeg"]});
            break;
            case 11:
                message.channel.send("", {files:["./images/girls.jpeg"]});
            break;
            case 12:
                message.channel.send("", {files:["./images/12.jpeg"]});
            break;
            case 13:
                message.channel.send("", {files:["./images/she_way_out.jpeg"]});
            break;
            case 14:
                message.channel.send("", {files:["./images/menswear.jpeg"]});
            break;
            case 15:
                message.channel.send("", {files:["./images/pressure.jpeg"]});
            break;
            case 16:
                message.channel.send("", {files:["./images/is_there_somebody_who_can_watch_you.jpeg"]});
            break;
            case 17:
                message.channel.send("", {files:["./images/the_1975(2).jpeg"]});
            break;
            case 18:
                message.channel.send("", {files:["./images/love_me.jpeg"]});
            break;
            case 19:
                message.channel.send("", {files:["./images/ugh!.jpeg"]});
            break;
            case 20:
                message.channel.send("", {files:["./images/a_change_of_heart.jpeg"]});
            break;
            case 21:
                message.channel.send("", {files:["./images/shes_american.jpeg"]});
            break;
            case 22:
                message.channel.send("", {files:["./images/if_i_believe_you.jpeg"]});
            break;
            case 23:
                message.channel.send("", {files:["./images/please_be_naked.jpeg"]});
            break;
            case 24:
                message.channel.send("", {files:["./images/lostmyhead.jpeg"]});
            break;
            case 25:
                message.channel.send("", {files:["./images/the_ballad_of_me_and_my_brain.jpeg"]});
            break;
            case 26:
                message.channel.send("", {files:["./images/somebody_else.jpeg"]});
            break;
            case 27:
                message.channel.send("", {files:["./images/loving_someone.jpeg"]});
            break;
            case 28:
                message.channel.send("", {files:["./images/i_like_it_when_you_sleep_for_you_are_so_beautiful_yet_so_unaware_of_it.jpeg"]});
            break;
            case 29:
                message.channel.send("", {files:["./images/the_sound.jpeg"]});
            break;
            case 30:
                message.channel.send("", {files:["./images/this_must_be_my_dream.jpeg"]});
            break;
            case 31:
                message.channel.send("", {files:["./images/paris.jpeg"]});
            break;
            case 32:
                message.channel.send("", {files:["./images/nana.jpeg"]});
            break;
            case 33:
                message.channel.send("", {files:["./images/she_lays_down.jpeg"]});
            break;
            case 34:
                message.channel.send("", {files:["./images/the_1975(3).jpeg"]});
            break;
            case 35:
                message.channel.send("", {files:["./images/give_yourself_a_try.jpeg"]});
            break;
            case 36:
                message.channel.send("", {files:["./images/tootimetootimetootime.jpeg"]});
            break;
            case 37:
                message.channel.send("", {files:["./images/how_to_draw_petrichor.jpeg"]});
            break;
            case 38:
                message.channel.send("", {files:["./images/love_it_if_we_made_it.jpeg"]});
            break;
            case 39:
                message.channel.send("", {files:["./images/be_my_mistake.jpeg"]});
            break;
            case 40:
                message.channel.send("", {files:["./images/sincerity_is_scary.jpeg"]});
            break;
            case 41:
                message.channel.send("", {files:["./images/i_like_america_and_america_likes_me.jpeg"]});
            break;
            case 42:
                message.channel.send("", {files:["./images/the_man_who_married_a_robot_love_theme.jpeg"]});
            break;
            case 43:
                message.channel.send("", {files:["./images/inside_your_mind.jpeg"]});
            break;
            case 44:
                message.channel.send("", {files:["./images/its_not_living_if_its_not_with_you.jpeg"]});
            break;
            case 45:
                message.channel.send("", {files:["./images/surrounded_by_heads_and_bodies.jpeg"]});
            break;
            case 46:
                message.channel.send("", {files:["./images/mine.jpeg"]});
            break;
            case 47:
                message.channel.send("", {files:["./images/i_couldnt_be_more_in_love.jpeg"]});
            break;
            case 48:
                message.channel.send("", {files:["./images/i_always_wanna_die_sometimes.jpeg"]});
            break;
            case 49:
                message.channel.send("", {files:["./images/the_1975(4).jpeg"]});
            break;
            case 50:
                message.channel.send("", {files:["./images/people.jpeg"]});
            break;
            case 51:
                message.channel.send("", {files:["./images/the_end_music_for_cars.jpeg"]});
            break;
            case 52:
                message.channel.send("", {files:["./images/frail_state_of_mind.jpeg"]});
            break;
            case 53:
                message.channel.send("", {files:["./images/streaming.jpeg"]});
            break;
            case 54:
                message.channel.send("", {files:["./images/the_birthday_party.jpeg"]});
            break;
            case 55:
                message.channel.send("", {files:["./images/yeah_i_know.jpeg"]});
            break;
            case 56:
                message.channel.send("", {files:["./images/then_because_she_goes.jpeg"]});
            break;
            case 57:
                message.channel.send("", {files:["./images/jesus_christ_2005_god_bless_america.jpeg"]});
            break;
            case 58:
                message.channel.send("", {files:["./images/roadkill.jpeg"]});
            break;
            case 59:
                message.channel.send("", {files:["./images/me_and_you_together_song.jpeg"]});
            break;
            case 60:
                message.channel.send("", {files:["./images/i_think_theres_something_you_should_know.jpeg"]});
            break;
            case 61:
                message.channel.send("", {files:["./images/nothing_revealed_everything_denied.jpeg"]});
            break;
            case 62:
                message.channel.send("", {files:["./images/tonight_i_wish_i_was_your_boy.jpeg"]});
            break;
            case 63:
                message.channel.send("", {files:["./images/shiny_collarbone.jpeg"]});
            break;
            case 64:
                message.channel.send("", {files:["./images/if_youre_too_shy_let_me_know.jpeg"]});
            break;
            case 65:
                message.channel.send("", {files:["./images/playing_on_my_mind.jpeg"]});
            break;
            case 66:
                message.channel.send("", {files:["./images/having_no_head.jpeg"]});
            break;
            case 67:
                message.channel.send("", {files:["./images/what_should_i_say.jpeg"]});
            break;
            case 68:
                message.channel.send("", {files:["./images/bagsy_not_in_net.jpeg"]});
            break;
            case 69:
                message.channel.send("", {files:["./images/dont_worry.jpeg"]});
            break;
            case 70:
                message.channel.send("", {files:["./images/guys.jpeg"]});
            break;
        }
    }
}