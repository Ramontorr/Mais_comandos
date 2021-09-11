const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#9900fd')
    .setDescription(`Coloque coisas aq!`)
    .setTimestamp()
    .setFooter(`Coloque coisas aq!`)
    .addFields(
        {
            name: '',
            value: ``,
            inline: true
        },
        {
            name: 'Coloque coisas aq!',
            value: `Coloque coisas aq!`,
            inline: true
        },
    )
    message.channel.send(embed);
}