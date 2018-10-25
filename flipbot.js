const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");  
const fs = require("fs");      
const dateFormat = require('dateformat');
const Canvas = require("canvas");
let profile = JSON.parse(fs.readFileSync("profile.json", "utf8"))

client.on('ready', () => {

console.log('iiFireGame');

client.user.setGame(`FilpBot | f!help`,'https://www.twitch.tv/TEST-Broadcast');

});

/// credits ///

client.on("message", message => {
 
  if (message.author.bot) return;
  if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'Super User',
    rep: 0,
    reps: 'NOT YET',
    lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 150,
  };
 
 
fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
 
 
 
client.on("message", (message) => {
  let men = message.mentions.users.first()
 
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credit')) {
  if(men) {
    if (!profile[men.id]) profile[men.id] = {
    lastDaily:'Not Collected',
    credits: 1,
  };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
  message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
 
if(message.content.startsWith(prefix + "daily")) {
  if(profile[message.author.id].lastDaily != moment().format('day')) {
    profile[message.author.id].lastDaily = moment().format('day')
    profile[message.author.id].credits += 160
     message.channel.send(`**${message.author.username} you collect your \`160\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
  }
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(1);
let sender = message.author
if(message.content.startsWith(prefix + 'trans')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
            let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 200;
fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
}
 
      });

/// bot ///

client.on('message', message => {
  if (message.content.startsWith("f!bot")) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setColor('RANDOM')
          .setTitle('FilpBot Info ')
          .addField('``Uptime``', timeCon(process.uptime()), true)
          .addField('``Ping Is``' , `${Date.now() - message.createdTimestamp}` + '``Ms``', true)
          .addField('``Guild Count``', client.guilds.size, true)
          .addField('``Bot In channel``' , `${client.channels.size}` , true)
          .addField('``Users rout``' ,`${client.users.size}` , true)
          .addField('``Name Bot Or tag``' , `${client.user.tag}` , true)
          .addField('``Bot Id``' , `${client.user.id}` , true)
          .setFooter('FlipBoT / iiFireGamerYT')
  })
}
});


function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400)
  let hours = Math.floor(time % 31536000 % 86400 / 3600)
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
  days = days > 9 ? days : '0' + days
  hours = hours > 9 ? hours : '0' + hours
  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds
  return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}


/// help ///


client.on("message", message => {
  var prefix = "f!";
if (message.content === "f!help") {
const embed = new Discord.RichEmbed()  
    .setColor("RANDOM")
    .setDescription(`
   
           Please Select Your Language
${prefix}help-ar
${prefix}help-en
           
    `)
 message.channel.sendEmbed(embed)
 
 }
 });

 client.on("message", message => {
if (message.content === "f!help-ar") {
const embed = new Discord.RichEmbed()  
    .setColor("RANDOM")
    .setDescription(`
   
          اختر:
f!help-gn-ar ⇏ اوامر عامة
f!help-ad-ar ⇏ اوامر ادارة السيرفر
           
f!help-mu-ar ⇏ اوامر الموسيقى
`)
message.channel.sendEmbed(embed)

}
});

client.on("message", message => {
  if (message.content === "f!help-en") {
   const embed = new Discord.RichEmbed()  
       .setColor("RANDOM")
       .setDescription(`
       
            Chose:
             
 f!help-gn-en ⇏ General commands
 
 f!help-ad-en ⇏ Server management commands
             
 f!help-mu-en ⇏ Music commands
 
 
 `)
 message.channel.sendEmbed(embed)
 
 }
 });

 client.on("message", message => {
  var prefix = "f!";
if (message.content === "f!help-gn-ar") {
   message.channel.send('**تم ارسال رسالة في الخاص** :mailbox_with_mail: ');
const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`
           
===================== اوامر عامة =====================
f!id ➾ معلومات عن حسابك
f!ping ➾ سرعة اتصالك بالانترنت
f!avatar ➾ يظهر صورة بروفابلك
f!server ➾ معلومات عن السيرفر
f!bot ➾ معلومات عن البوت
f!credit ➾ يظهرلك الكردت حقق
f!daily ➾ يومية
f!trans [number]  [@mention] ➾ لتحويل كردت لشخص اخر
f!say ➾ يكرر كلامك
f!server-image ➾ صورة السيرفر
f!roll ➾ قرعه من 1 الي 100
f!inv ➾ رابط اذخال البوت
f!support ➾ سيرفر الدعم
=========================================================
وقريباً المزيد من الاكواد
=========================================================
Support server : https://discord.gg/2tDG2Nz
`)
 message.author.sendEmbed(embed)
 
 }
 });





 client.on("message", message => {
  var prefix = "f!";
if (message.content === "f!help-gn-en") {
   message.channel.send('**Check your dm** :mailbox_with_mail: ');
const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`
           
==================== General commands =====================
f!id ➾ your informations
f!ping ➾ your ping
f!avatar ➾ your profile avatar
f!server ➾ server informations
f!bot ➾ bot informations
f!credit ➾ your credits
f!daily ➾ your daily credits
f!trans [number]  [@mention] ➾ to transfer credits for someone
f!say ➾ repeat your words
f!server-image ➾ server image
f!roll ➾ roll between 1 and 100
f!inv ➾ bot invite link
f!support ➾ support server
=========================================================
More commands soon
=========================================================
Support server : https://discord.gg/2tDG2Nz
`)
 message.author.sendEmbed(embed)
 
 }
 });

 client.on("message", message => {
  var prefix = "f!";
if (message.content === "f!help-ad-ar") {
   message.channel.send('**تم ارسال رسالة بالخاص** :mailbox_with_mail: ');
const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`
           
==================== اوامر ادارية =====================
f!bc ➾ لارسال رساله لجميع الاعضاء
f!ban [@mention] [reason] ➾  لحظر شخص من السيرفر
f!kick [@mention] [reason] ➾ لطرد شخص من السيرفر
f!mute [@mention] [reason] ➾ لاعطاء ميوت لعضو
f!unmute [@mention] ➾ لفك الميوت عن عضو
f!move [@mention] ➾ لنقل عضو لرومك الصوتي
f!mutechannel ➾ لاقفال الشات
f!unmutechannel ➾ لفتح الشات
f!clear ➾ لمسح الشات
f!role humans [role name] ➾ لعطاء رتبة للاشخاص فقط
f!role bots [role name] ➾ لاعطاء رتبة للبوتات فقط
f!role [@mention] [role name] ➾ لاعطاء رتبة لعضو
f!cv [room name] ➾ لعمل روم صوتيه
f!ct [room name] ➾ لعمل روم كتابيه
f!delet [room name] ➾ لمسح روم
f!ccolors [numbers] ➾ صنع الوان بعدد
f!role @user <rank> ➾ تعطي رتبه لشخص
f!roleremove @user <rank> ➾ تشيل رتبه من شخص
f!role all <rank> ➾ تعطي رتبه للبوتات و الاعضاء
f!role humans <rank> ➾ تعطي رتبه للاعضاء فضط
f!role bots <rank> ➾ تعطي رتبه للاغضاء فقط
=========================================================
وقريباً المزيد من الاكواد
=========================================================
Support server : https://discord.gg/2tDG2Nz
`)
 message.author.sendEmbed(embed)
 
}
});

client.on("message", message => {
var prefix = "f!";
if (message.content === "f!help-ad-en") {
message.channel.send('**Check your dm** :mailbox_with_mail: ');
const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setDescription(`
       
==================== Management commands =====================
f!bc ➾ for massage send message to server members
f!ban [@mention] [reason] ➾ to ban someone from the server
f!kick [@mention] [reason] ➾ to kick someone from the server
f!mute [@mention] [reason] ➾ to mute someone
f!unmute [@mention] ➾ to umnute someone
f!move [@mention] ➾ to move someone to your channel
f!mutechannel ➾ to mute chat
f!unmutechannel ➾ to ummute chat
f!clear ➾ to clear chat
f!role humans [role name] ➾ to give role for humans only
f!role bots [role name] ➾ to give role for bots only
f!role [@mention] [role name] ➾ to give role fo someone
f!cv [room name] ➾ to create new voice channel
f!ct [room name] ➾ to create new text channel
f!delet [room name] ➾ to delet any room
f!ccolors [numbers] ➾ to create colored roles
f!role @user <rank> ➾ to give rank to member
f!roleremove @user <rank> ➾ to remove rank from member
f!role all <rank> ➾ to give rank to bots and members
f!role humans <rank> ➾ to give rank to members only
f!role bots <rank> ➾ to give rank to bots only
=========================================================
More commands soon
=========================================================
Support server : https://discord.gg/2tDG2Nz
`)
message.author.sendEmbed(embed)

}
});


client.on("message", message => {
  var prefix = "f!";
if (message.content === "f!help-mu-ar") {
   message.channel.send('**تم ارسال رسالة بالخاص** :mailbox_with_mail: ');
const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`
           
==================== اوامر الميوزك =====================
f!play ➾ لتشغيل اغنية
f!skip ➾ لتخطي اغنية
f!pause ➾ لإيقآف الأغنية مؤقتا
f!resume ➾ لتشغيل الاغننية
f!vol ➾ لتغير مستوى الصوت 0 - 100
f!stop ➾ لاخراج البوت من الروم
f!np ➾ لمعرفة الاغنية مشغلة
f!queue ➾ قائمة الاغاني
f!join ➾ يدخل البوت للروم
f!disconnect ➾ يخرج البوت من الروم
=========================================================
وقريباً المزيد من الاكواد
=========================================================
Support server : https://discord.gg/2tDG2Nz
`)
 message.author.sendEmbed(embed)
 
}
});


client.on("message", message => {
  var prefix = "f!";
if (message.content === "f!help-mu-en") {
   message.channel.send('**Check your dm** :mailbox_with_mail: ');
const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`
           
==================== Music commands =====================
f!play ➾ to play song
f!skip ➾ to skip song
f!pause ➾ to pause the song
f!resume ➾ To resume the song
f!vol ➾ to change the volume 0 - 100
f!stop ➾ top remove the bot from room
f!np ➾ to show the song that is currently playing
f!queue ➾ to see the song list
f!join ➾ to make bot join to your channel
f!disconnect ➾ to make bot leave from your channel
=========================================================
More codes soon
=========================================================
Support server : https://discord.gg/2tDG2Nz
`)
 message.author.sendEmbed(embed)
 
}
});

/// avatar ///

client.on('message', message => {
  if (message.content.startsWith("f!avatar")) {
if(!message.channel.guild) return;
      var mentionned = message.mentions.users.first();
  var client;
    if(mentionned){
        var client = mentionned; } else {
        var client = message.author;
    }
      const embed = new Discord.RichEmbed()
                         .addField('Requested by:', "<@" + message.author.id + ">")
      .setColor(000000)
      .setImage(`${client.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});

/// inv ///

client.on('message', message => {
  if (message.content === "f!inv") {
      if(!message.channel.guild) return;
  let embed = new Discord.RichEmbed()
  .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
  .setTitle(`:heart_eyes: click here `)
  .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=502963656775041045&permissions=8&scope=bot`)
  .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")        
message.channel.sendEmbed(embed);
 }
});

/// support ///

   client.on('message', message => {
     if (message.content === "f!support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/4HSScYe**")
     
     
  message.channel.sendEmbed(embed);
    }
});

/// ccolors //

client.on('message', ra3d => {
  var prefix = "f!";
                          let args = ra3d.content.split(" ").slice(1).join(" ")
  if(ra3d.content.startsWith(prefix + 'ccolors')) {
      if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
               if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
                ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                    setInterval(function(){})
                      let count = 0;
                      let ecount = 0;
            for(let x = 1; x < `${parseInt(args)+1}`; x++){
              ra3d.guild.createRole({name:x,
                color: 'RANDOM'})
                }
              }
         });
		 
/// server image ///

client.on("message", message => {
  var prefix = "f!";
            
        if(!message.channel.guild) return;
 if(message.author.bot) return;
    if(message.content === prefix + "server-image"){ 
        const embed = new Discord.RichEmbed()

    .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
.setAuthor(message.author.username, message.guild.iconrURL)
  .setColor(0x164fe3)
  .setImage(message.guild.iconURL)
  .setURL(message.guild.iconrURL)
                  .setTimestamp()

 message.channel.send({embed});
    }
});

/// clear ///

client.on("message", message => {
  var prefix = "f!";
  var args = message.content.substring(prefix.length).split(" ");
  if (message.content.startsWith(prefix + "clear")) {
      if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {

}
}}).then(msg => {msg.delete(3000)});
                }


});

/// shtaym ///

client.on('message',function(message) {
  if(!message.channel.guild) return undefined;
  const swearWords = ["fuck","Fuck","ass","Ass","dick","Dick","طيز","احا","كسمك"];
  if (swearWords.some(word => message.content.includes(word)) ) {
    message.delete()
    message.reply("**ممنوع السب**"); 
  }
});

client.on('message', function(message) {
  var prefix = "f!";
  if(message.content.startsWith(prefix + 'roll')) {
      let args = message.content.split(" ").slice(1);
      if (!args[0]) {
          message.channel.send('**Put a number**');
          return;
          }
  message.channel.send(Math.floor(Math.random() * args.join(' ')));
          if (!args[0]) {
        message.edit('1')
        return;
      }
  }
});

/// server ///

client.on('message', message => {
  if (message.content === "f!server") {
      if (!message.channel.guild) return
      var verificationLevel = message.guild.verificationLevel;
      const verificationLevels = ['None','Low','Meduim','High','Extreme'];
      var Y1 = message.guild.createdAt.getFullYear() - 2000
      var M2 = message.guild.createdAt.getMonth()
      var D3 = message.guild.createdAt.getDate()
      const xNiTRoZ = new Discord.RichEmbed()
       .setAuthor(message.author.username , message.author.avatarURL)
       .setColor('RANDOM')
       .setTimestamp()
       .setTitle(message.guild.name,message.guild.iconURL)
       .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
       .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)             
       .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
       .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
       .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
       .addField(':earth_asia: الدوله',message.guild.region)
       .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
       .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
       .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','FlipBot')
       message.channel.send({embed:xNiTRoZ});
   }
  });
  
/// ping ///

client.on('message', message => {
  if(!message.channel.guild) return;
if (message.content.startsWith('f!ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});

/// say hla rd hla ///

client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('**هلا بيك حبي :heart:**');
  }
});

client.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply('**hello have nice time :heart:**');
  }
});

/// role ///

client.on("message", message => {
	var prefix = "f!";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});

/// say ///

var prefix = "f!";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "say") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});

/// ban ///

client.on('message', message => {
	var prefix = "f!"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

///  mute ///

client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "f!mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
});
  }

};

});

/// kick ///

client.on('message', message => {
	var prefix = "f!"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

/// bc ///

client.on('message', message => {
  var prefix = "f!";
  if (message.author.id === client.user.id) return;
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
  if (!args[1]) {
message.channel.send("**f!bc <message>**");
return;
}
      message.guild.members.forEach(m => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField('** الـسيرفر**', `${message.guild.name}`,true)
          .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
          .addField(' **الرسالة** ', args)
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
          m.send(`${m}`,{embed: bc});
      });
      const AziRo = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)   
      .setTitle('✔️ | جاري ارسال رسالتك ') 
      .addBlankField(true)
      .addField('👥 | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
      .addField('📋| الرسالة ', args)
      .setColor('RANDOM')  
      message.channel.sendEmbed(AziRo);          
  }
  } else {
      return;
  }
});

/// chat mute and unmute ///

client.on('message', message => {
  var prefix = "f!";

  if(message.content === prefix + "mutechannel") {
                      if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: false

         }).then(() => {
             message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
         });
           }
if(message.content === prefix + "unmutechannel") {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: true

         }).then(() => {
             message.reply("**__تم فتح الشات__:white_check_mark:**")
         });
           }
           
    
  
});

/// id ///

client.on('message', message => {
  if (message.content === "f!id") {
  var year = message.createdAt.getFullYear()
  var month = message.createdAt.getMonth()
  var day = message.createdAt.getDate()
       let embed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
      .addField("**اسمك:**",  '**[ ' + `${message.author.username}` + ' ]**')
        .setThumbnail(message.author.avatarURL)
                 .setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
    .addField('الكود الخاص بك:', message.author.discriminator)
    .addField("**عدد الايام منذ افتتاح حسابك:**", message.author.createdAt.getDate())
      .addField("** تم افتتاح حسابك عام:**", message.createdAt.getFullYear())
          .addField("** عدد الشهور منذ افتتاح حسابك:**", message.createdAt.getMonth())
  
    message.channel.send({embed});
      }
  });
  
/// create rooms ///

client.on("message", (message) => {
  if (message.content.startsWith("f!cv")) {
              if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
          let args = message.content.split(" ").slice(1);
      message.guild.createChannel(args.join(' '), 'voice');
      message.channel.sendMessage('تـم إنـشاء روم صـوتي')
      
  }
  });

client.on("message", (message) => {
    if (message.content.startsWith("f!ct")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'text');
    message.channel.sendMessage('تـم إنـشاء روم كـتابـي')
    
    }
    });
	
/// auto mute ///

client.on('message', function(message) {
  if (!message.member.hasPermissions(['ADMINISTRATOR'])){
          let command = message.content.split(" ")[0];
      if(message.content.includes('discord.gg')){
      message.reply (' ')
         if(!message.channel.guild) return message.reply('** This command only for servers**');
   message.member.addRole(message.guild.roles.find('name', 'Muted')); 
  const embed500 = new Discord.RichEmbed()
    .setTitle(":x: | تمت معاقبتك")
          .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الميوت عن طريق الخطأ تكلم مع الادآرة**`)
    .addField(`Flip`,`Bot`)
          .setColor("c91616")
          .setThumbnail(`${message.author.avatarURL}`)
          .setAuthor(message.author.username, message.author.avatarURL) 
      .setFooter(`${message.guild.name} Server`)
   message.channel.send(embed500) 
  
      
  }
  }
})

/// welcome ///

client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name', 'welcome');
  let memberavatar = member.user.avatarURL
    if (!channel) return; 
  let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField(':running_shirt_with_sash: | name :  ',`${member}`)
      .addField(':loudspeaker: | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)
      .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
              .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
             
                .addField("Name:",`<@` + `${member.id}` + `>`, true)
                    
                                   .addField(' الـسيرفر', `${member.guild.name}`,true)
                                     
   .setFooter("FlipBot")
      .setTimestamp()
  
    channel.sendEmbed(embed);
  });

/// music ///



/// move ///

client.on('message', message => {
	var prefix = "f!";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});

client.login("NTAyOTYzNjU2Nzc1MDQxMDQ1.Dq_m1A.iRBi2OHnmGnP_u1NhrYU7P4sttc");
