const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("NAS BOT sürümüyle sizlerle.")
.setTitle("  Moderasyon Komutları ")
 .setTimestamp()
.setDescription(" **-sil** = Yazdığınız miktarda mesajı siler.  \n  **-ban** = Etiketlediğiniz kişiyi banlarsınız.  \n  **-kick** = Etiketlediğiniz kişiyi atarsınız.  \n  **-duyuru** = Bota duyuru yaptırırsınız.  \n  **-küfür** = Küfür engel sistemini açarsınız.  \n  **-reklam** = Reklam engel sistemi açarsınız.  \n  **-slowmode** = Yavaş modu ayarlarsınız.  \n  **-forceban** = Birisine id ban atarsınız.  \n  **-unban** = Birisinin banını açarsınız.  \n <a:yan:750065080741134407> **-sa-as** = Bot biri sa dedimi cevap verir. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-sunucubilgi** = Sunucu bilgilerini görürsün. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-üyedurum** = Üyelerin durumlarını görürsün. <a:developeremoji:749525084586115153> \n <a:yan:750065080741134407> **-çekiliş** = Çekiliş başlatırsınız. <a:developeremoji:749525084586115153>")
.setImage("https://cdn.discordapp.com/attachments/744536225230094360/751100899836821534/Night_Sky_Mountain_Decorative_Border_Youtube_Thumbnail.png")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}