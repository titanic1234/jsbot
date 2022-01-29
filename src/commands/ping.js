module.exports = {
    name: 'ping',
    description: 'Antwortet mit pong',
    async execute(message, args){

        return message.reply('Pong!');

    }

}

module.exports = {
    name: 'ping2',
    description: 'Antwortet mit pong2',
    async execute(message, args){

        return message.reply('Pong2!');

    }

}
