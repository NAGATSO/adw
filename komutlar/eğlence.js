const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("NAS BOT  yeniden sizlerle.")
.setTitle("<a:Yldz:742698148329291826> Destiny Eğlence Komutları <a:Yldz:742698148329291826>")
 .setTimestamp()
.setDescription(" **-tersyazı** = Bir Yazıyı Bot Ters Yazar.  \n  **-mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n  **-fbi** = Bot FBi Gif Atar.  \n  **-token** = Tokenimi Öğrenmek İstemezmisin?  \n **-düello** = Düello Atarsın.  \n  **-wasted** = Polis tarafından yakalanırsın.  \n **-atatürk** = Dene ve gör... (1881-1938) ")
.setImage("https://cdn.discordapp.com/attachments/941773732924489735/941783103217729628/standard_1.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}