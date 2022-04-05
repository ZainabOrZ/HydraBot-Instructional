const tmi = require('tmi.js');
const { channel1, channelbot1, channel2, channelbot2, channel3, channelbot3, username, password } = require('./settings.json');

//Please enter a unique name everywher USER1 is located for this user. If you are using VS Code you can hilight it and then ctrl+f2 to change every USER1 to the choosen name
const USER1options = {
    options: { debug: true },
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
    USER1.say(channel, `HydraBot has been activated!`);

});

USER1.on('mssage', (channel, user, message) => {
    let isSub = user.subscriber;
    let isVIP = false;
    try {
        if (user.badges.vip) {
            isVIP = true;
        }
    } catch (error) {}
    let isMod = user.mod || user 'user-type' === 'mod';
    let isBroadcaster = channel.slice(1) === user.username;
    let isSubUp = isSub || isVIP || isMod || isBroadcaster;
    let isVIPUp = isVIP || isMod || isBroadcaster;
    let isModUp = isMod || isBroadcaster;

    //Commands to use in the channel are as follows
    if (channel.toLowerCase() == channel1) {
        if (message == "!d") {
            setTimeout(function() { USER1.say(channel1, "!dungeon") }, 2000);
        }
        if (message == "!r") {
            setTimeout(function() { USER1.say(channel1, "!raid") }, 2000);
        }
    }
    //Channel2 commands
    else if (channel.toLowerCase() == channel2) {
        if (message == "!d") {
            setTimeout(function() { USER1.say(channel2, "!dungeon") }, 2000);
        }
        if (message == "!r") {
            setTimeout(function() { USER1.say(channel2, "!raid") }, 2000);
        }
    }
    //CHANNEL3 COMMANDS
    else if (channel.toLowerCase() == channel3) {
        if (message == "!d") {
            setTimeout(function() { USER1.say(channel3, "!dungeon") }, 2000);
        }
        if (message == "!r") {
            setTimeout(function() { USER1.say(channel3, "!raid") }, 2000);
        }
    }
})
