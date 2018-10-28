const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {

console.log('iiFireGame');

client.user.setGame(`I am done`,'https://www.twitch.tv/TEST-Broadcast');

});

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
f!say ➾ يكرر كلامك
f!server-image ➾ صورة السيرفر
f!roll ➾ قرعه من 1 الي 100
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
f!say ➾ repeat your words
f!server-image ➾ server image
f!roll ➾ roll between 1 and 100
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

/// f!bot ///

client.on('message', message => {
  if (message.content.startsWith("f!bot")) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setColor('RANDOM')
          .setTitle('FireShop Info ')
          .addField('``Uptime``', timeCon(process.uptime()), true)
          .addField('``Ping Is``' , `${Date.now() - message.createdTimestamp}` + '``Ms``', true)
          .addField('``Guild Count``', client.guilds.size, true)
          .addField('``Bot In channel``' , `${client.channels.size}` , true)
          .addField('``Name Bot Or tag``' , `${client.user.tag}` , true)
          .setFooter('FireShop / iiFireGamerYT')
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

/// f!avatar ///

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
                         .addField('✅ Requested by:', "<@" + message.author.id + ">")
      .setColor(000000)
      .setImage(`${client.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});

/// f!ccolors ///

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


/// f!server-image ///

client.on("message", message => {
  var prefix = "f!";
            
        if(!message.channel.guild) return;
 if(message.author.bot) return;
    if(message.content === prefix + "server-image"){ 
        const embed = new Discord.RichEmbed()

    .setTitle(`✅ This is  ** ${message.guild.name} **  Photo !`)
.setAuthor(message.author.username, message.guild.iconrURL)
  .setColor(0x164fe3)
  .setImage(message.guild.iconURL)
  .setURL(message.guild.iconrURL)
                  .setTimestamp()

 message.channel.send({embed});
    }
});

/// f!clear ///

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
title: "``✅ تــم مسح الشات ``",
color: 0x06DF00,
footer: {

}
}}).then(msg => {msg.delete(3000)});
                }


});

/// shtaym ///

client.on('message',function(message) {
  if(!message.channel.guild) return undefined;
  const swearWords = ["fuck","Fuck","ass","Ass","dick","Dick","طيز","كسمك"];
  if (swearWords.some(word => message.content.includes(word)) ) {
    message.delete()
    message.reply("**ممنوع السب**"); 
  }
});

/// f!roll ///

client.on('message', function(message) {
  var prefix = "f!";
  if(message.content.startsWith(prefix + 'roll')) {
      let args = message.content.split(" ").slice(1);
      if (!args[0]) {
          message.channel.send('**⚠ Put a number**');
          return;
          }
  message.channel.send(Math.floor(Math.random() * args.join(' ')));
          if (!args[0]) {
        message.edit('1')
        return;
      }
  }
});

/// f!server ///

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
       .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','FireShopt')
       message.channel.send({embed:xNiTRoZ});
   }
  });

/// f!ping ///

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

client.on('message', msg => {
  if (msg.content === 'hi') {
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
          if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "FireShop";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
message.guild.members.forEach(m => {

var bc = new
   Discord.RichEmbed()
   .setColor('RANDOM')
   .setTitle('Broadcast')
   .addField('سيرفر', message.guild.name)
   .addField('المرسل', message.author.username)
   .addField('الرسالة', args)
   .setThumbnail(message.author.avatarURL)
   .setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
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
    .addField(`FireShop`,`Bot`)
          .setColor("c91616")
          .setThumbnail(`${message.author.avatarURL}`)
          .setAuthor(message.author.username, message.author.avatarURL) 
      .setFooter(`${message.guild.name} Server`)
   message.channel.send(embed500) 
  
      
  }
  }
})

/// welcome ///

client.on("guildMemberAdd", member => {
  let welcomer = member.guild.channels.find("name","welcome");
        if(!welcomer) return;
        if(welcomer) {
           moment.locale('ar-ly');
           var h = member.user;
          let norelden = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setThumbnail(h.avatarURL)
          .setAuthor(h.username,h.avatarURL)
          .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
          .addField(': انت عضو رقم',`${member.guild.memberCount}`,true)
           .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
       welcomer.send({embed:norelden});          
                 
   
        }
        });

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

/// join rank ///

client.on('guildMemberAdd', member=> {
  member.addRole(member.guild.roles.find("name","🔥 Fire 🔥"));
  });

/// member cont ///

client.on('message',async msg => {
  var p = "f!";
  if(msg.content.startsWith(p + "user")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **play away from here**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **sry i cant**');
  msg.guild.createChannel(`يتم تحضير الروم :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`FireShop :  → ${client.users.size} ← `);
 },1000);
  });
  }
 
});

client.login("NTAyOTYzNjU2Nzc1MDQxMDQ1.Dq_m1A.iRBi2OHnmGnP_u1NhrYU7P4sttc");
