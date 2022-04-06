const tmi = require('tmi.js');
const { channel1, channelbot1, channel2, channelbot2, channel3, channelbot3, username, password, username1, password1, username2, password2, username3, password3, username4, password4, username5, password5 } = require('./settings.json');

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

USER1.on('connected', () => {
    // FOR "#USER1" PUT YOUR NAME AS IT APPEARS ON TWITCH I.E ("#TWITCHNAME" ...
    USER1.say("#USER1", `HydraBot has been activated!`);

});

USER1.on('message', (channel, user, message) =>{
    if (message == "!d") {
        setTimeout(function() { USER1.say(channel, "!dungeon") }, 2000);
    }
    if (message == "!r") {
        setTimeout(function() { USER1.say(channel, "!raid") }, 2000);
    }
    if (user.username == channelbot1.toLowerCase() || user.username =="ravenfallofficial") {
        if (message.startsWith("USER1, You have joined the dungeon")) {
            setTimeout(function() { USER2.say(channel, "!dungeon") }, 500);
            setTimeout(function() { USER3.say(channel, "!dungeon") }, 1000);
            setTimeout(function() { USER4.say(channel, "!dungeon") }, 1500);
            setTimeout(function() { USER5.say(channel, "!dungeon") }, 2000);
            setTimeout(function() { USER6.say(channel, "!dungeon") }, 2500);
        }
        if (message.startsWith("USER1, You have joined the raid")) {
            setTimeout(function() { USER2.say(channel, "!raid") }, 500);
            setTimeout(function() { USER3.say(channel, "!raid") }, 1000);
            setTimeout(function() { USER4.say(channel, "!raid") }, 1500);
            setTimeout(function() { USER5.say(channel, "!raid") }, 2000);
            setTimeout(function() { USER6.say(channel, "!raid") }, 2500);
        }
    }
    
    
});


//Please enter a unique name for this user, if you have VS Code you can hilight  it and then ctrl+f2 to change every USER1 to the choosen name. Make sure all USER1 has been changed to the same name
const USER2options = {
    options: { debug: false },
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


//Please enter a unique name for this user, if you have VS Code you can hilight  it and then ctrl+f2 to change every USER1 to the choosen name. Make sure all USER1 has been changed to the same name
const USER3options = {
    options: { debug: false },
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


//Please enter a unique name for this user, if you have VS Code you can hilight  it and then ctrl+f2 to change every USER1 to the choosen name. Make sure all USER1 has been changed to the same name
const USER4options = {
    options: { debug: false },
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


//Please enter a unique name for this user, if you have VS Code you can hilight  it and then ctrl+f2 to change every USER1 to the choosen name. Make sure all USER1 has been changed to the same name
const USER5options = {
    options: { debug: false },
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


//Please enter a unique name for this user, if you have VS Code you can hilight  it and then ctrl+f2 to change every USER1 to the choosen name. Make sure all USER1 has been changed to the same name
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

//IF THERE ARE TOO MANY OR NOT ENOUGH USERS PLEASE ADD OR DELETE AS NECESSARY
// IF YOU HAVE QUESTIONS YOU CAN FIND ME AT TWITCH.TV/CARTMANZ_ZNOOBIS. GOOD LUCK
