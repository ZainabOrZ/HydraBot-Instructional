const tmi = require('tmi.js');
const { channel1, channelbot1, channel2, channelbot2, channel3, channelbot3, username, password } = require('./settings.json');

//Please enter a unique name for this user, if you have VS Code you can hilight  it and then ctrl+f2 to change every USER1 to the choosen name. Make sure all USER1 has been changed to the same name
const USER1options = {
    options: { debug: false },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: username,
        password: password
    },

    channels: [channel1, channel2, channel3],
};

const USER1 = new tmi.Client(USER1options);
USER1.connect().catch(console.error);

USER1.on('connected', () => {
    // FOR "#USER1" PUT YOUR NAME AS IT APPEARS ON TWITCH I.E ("#TWITCHNAME" ...
    USER1.say("#USER1", `HydraBot has been activated!`);

});

USER1.on('message', (channel, user, message) =>{
    if(message == `!d`)
    {
        setTimeout(function(){USER1.say(channel, `!dungeon`)}, 2000);            
    }
    
    if(message == `!r`)
    {
        setTimeout(function(){USER1.say(channel, `!raid`)}, 2000);
    }
});

// IF YOU HAVE QUESTIONS YOU CAN FIND ME AT TWITCH.TV/CARTMANZ_ZNOOBIS. GOOD LUCK
