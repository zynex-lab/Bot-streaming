const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { // Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', // Change this to your timezone
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
    .setURL('https://www.twitch.tv/veiine')
    .setState('Your State')
    .setName('zynex')
    .setDetails(`yo guys [${formatTime()}]`)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1337044208539668490/1343960941707923537/64B2429B-72A8-4F82-B44B-400FBAE1D3BD.gif')
    .setAssetsLargeText('Large Text')
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1337044208539668490/1343960948754612284/IMG_2846.gif')
    .setAssetsSmallText('Small Text')
    .addButton('fav', 'https://youtu.be/d9r0pCMHBDo?si=ybrVZNVncQrGOSCV');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); // dnd, online, idle, offline

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

// Login with the token from environment variable in Render
client.login(process.env.TOKEN);