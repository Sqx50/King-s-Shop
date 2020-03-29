const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


const adminprefix = "=";
const devs = ['561603836326707250'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
} else 
  if (message.content.startsWith(adminprefix + 'rename')) {
client.user.setUsername(argresult).
    message.channel.sendMessage(`**:white_check_mark: , The Name Of The Bot Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
} else
  if (message.content.startsWith(adminprefix + 'setstatus')) {
client.user.setStatus(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Bot Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
} else
if (message.content.startsWith(adminprefix + 'stream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/King-s-Shop")
    message.channel.sendMessage(`**:white_check_mark: , The Stream Bot Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client.login(process.env.BOT_TOKEN);
