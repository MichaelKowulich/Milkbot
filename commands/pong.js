module.exports = {
    name: 'pong',
    description: "says ping",
    execute(message, args){
        message.channel.send('Ping!');
    }
}