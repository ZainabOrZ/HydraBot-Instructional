const tmi = require('tmi.js');
const { channel1, channelbot1, channel2, channelbot2, channel3, channelbot3, username, password, username1, password1, username2, password2, username3, password3, username4, password4, username5, password5 } = require('./settings.json');

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

USER1.on('message', (channel, user, message) => {

    let isSub = user.subscriber;
    let isVIP = false;
    try {
        if (user.badges.vip) {
            isVIP = true;
        }
    } catch (error) {}
    let isMod = user.mod || user['user-type'] === 'mod';
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

        if (user.username == channelbot1.toLowerCase() || user.username == "ravenfallofficial") {
            if (message.startsWith("USER1, You have joined the dungeon")) {
                setTimeout(function() { USER2.say(channel1, "!dungeon") }, 500);
                setTimeout(function() { USER3.say(channel1, "!dungeon") }, 1000);
                setTimeout(function() { USER4.say(channel1, "!dungeon") }, 1500);
                setTimeout(function() { USER5.say(channel1, "!dungeon") }, 2000);
                setTimeout(function() { USER6.say(channel1, "!dungeon") }, 2500);
            }
            if (message.startsWith("USER1, You have joined the raid")) {
                setTimeout(function() { USER2.say(channel1, "!raid") }, 500);
                setTimeout(function() { USER3.say(channel1, "!raid") }, 1000);
                setTimeout(function() { USER4.say(channel1, "!raid") }, 1500);
                setTimeout(function() { USER5.say(channel1, "!raid") }, 2000);
                setTimeout(function() { USER6.say(channel1, "!raid") }, 2500);
            }
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

        if (user.username == channelbot2.toLowerCase() || user.username == "ravenfallofficial") {
            if (message.startsWith("USER1, You have joined the dungeon")) {
                setTimeout(function() { USER2.say(channel2, "!dungeon") }, 500);
                setTimeout(function() { USER3.say(channel2, "!dungeon") }, 1000);
                setTimeout(function() { USER4.say(channel2, "!dungeon") }, 1500);
                setTimeout(function() { USER5.say(channel2, "!dungeon") }, 2000);
                setTimeout(function() { USER6.say(channel2, "!dungeon") }, 2500);
            }
            if (message.startsWith("USER1, You have joined the raid")) {
                setTimeout(function() { USER2.say(channel2, "!raid") }, 500);
                setTimeout(function() { USER3.say(channel2, "!raid") }, 1000);
                setTimeout(function() { USER4.say(channel2, "!raid") }, 1500);
                setTimeout(function() { USER5.say(channel2, "!raid") }, 2000);
                setTimeout(function() { USER6.say(channel2, "!raid") }, 2500);
            }
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

        if (user.username == channelbot3.toLowerCase() || user.username == "ravenfallofficial") {
            if (message.startsWith("USER1, You have joined the dungeon")) {
                setTimeout(function() { USER2.say(channel3, "!dungeon") }, 500);
                setTimeout(function() { USER3.say(channel3, "!dungeon") }, 1000);
                setTimeout(function() { USER4.say(channel3, "!dungeon") }, 1500);
                setTimeout(function() { USER5.say(channel3, "!dungeon") }, 2000);
                setTimeout(function() { USER6.say(channel3, "!dungeon") }, 2500);
            }
            if (message.startsWith("USER1, You have joined the raid")) {
                setTimeout(function() { USER2.say(channel3, "!raid") }, 500);
                setTimeout(function() { USER3.say(channel3, "!raid") }, 1000);
                setTimeout(function() { USER4.say(channel3, "!raid") }, 1500);
                setTimeout(function() { USER5.say(channel3, "!raid") }, 2000);
                setTimeout(function() { USER6.say(channel3, "!raid") }, 2500);
            }
        }
    }
});


//Please enter a unique name must match the name you set in the commands
const USER2options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: username1,
        password: password1
    },

    channels: [channel1, channel2, channel3],
};

const USER2 = new tmi.Client(USER2options);
USER2.connect().catch(console.error);


//Please enter a unique name in the brackets  and remove the brackets for this user
const USER3options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: username2,
        password: password2
    },

    channels: [channel1, channel2, channel3],
};

const USER3 = new tmi.Client(USER3options);
USER3.connect().catch(console.error);


//Please enter a unique name in the brackets  and remove the brackets for this user
const USER4options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: username3,
        password: password3
    },

    channels: [channel1, channel2, channel3],
};

const USER4 = new tmi.Client(USER4options);
USER4.connect().catch(console.error);


//Please enter a unique name in the brackets  and remove the brackets for this user
const USER5options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: username4,
        password: password4
    },

    channels: [channel1, channel2, channel3],
};

const USER5 = new tmi.Client(USER5options);
USER5.connect().catch(console.error);


//Please enter a unique name in the brackets  and remove the brackets for this user
const USER6options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: username5,
        password: password5
    },

    channels: [channel1, channel2, channel3],
};
const USER6 = new tmi.Client(USER6options);
USER6.connect().catch(console.error);