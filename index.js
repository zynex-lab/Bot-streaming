const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
.setApplicationId('1296771384487448596')
    .setType('STREAMING')
   .setURL('https://www.twitch.tv/veiine') //Must be a youtube video link 
    .setState('Your State')
    .setName('zynex')
    .setDetails(`yo guys [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1337044208539668490/1343960941707923537/64B2429B-72A8-4F82-B44B-400FBAE1D3BD.gif?ex=67bf2caa&is=67bddb2a&hm=22ad69b15433eafc10ac9b0fd10c1126d2f4067173bbcec9cca395e72d2cc62c&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Large Text') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1337044208539668490/1343960948754612284/IMG_2846.gif?ex=67bf2cab&is=67bddb2b&hm=92ed903955dbd9161db35c2841e14c7437df7171e86f92ab14deadc271efd9df&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') //Text when you hover the Small image
    .addButton('fav', 'https://youtu.be/d9r0pCMHBDo?si=ybrVZNVncQrGOSCV')

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `zynxer [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);