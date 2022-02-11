const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("NAS BOT  yeniden sizlerle.")
.setTitle(" Destiny Logo Komutları <a:Yldz:742698148329291826>")
 .setTimestamp()
.setDescription(" **-dinamik** = Dinamik logo oluşturur. > \n  **-altın** = Altın logo oluşturur.  \n  **-banner** = Banner logo oluşturur.  \n  **-basit** = Basit logo oluşturur.  \n  **-elmas** = Elmas logo oluşturur.  \n  **-sarı** = Sarı logo oluşturur.  \n <a:yan:75006508074113440> 7**-neonmavi** = Neon mavi logo oluşturur.  \n  **-kalın** = Kalın logo oluşturur.  \n  **-anime** = Anime yazı tipinde logo oluşturur.  \n  **-habbo** = Habbo yazı tipinde logo oluşturur.  \n  **-arrow** = Ok işaretli logo oluşturur.  \n  **-green** = Yeşil logo oluşturur.  \n  **-alev** = Alevli logo oluşturur.  \n  **-red** = Kırmızı logo oluşturur. ")
.setImage("https://cdn.discordapp.com/attachments/941773732924489735/941783103217729628/standard_1.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}