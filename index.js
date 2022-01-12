const { client } = require('tmi.js');
const tmi = require('tmi.js');
const { channel, username, password, username1, password1, username2, password2, username3, password3, username4, password4, username5, password5, username6, password6} = require('./settings.json') ;

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username,
        password      
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('connected', () => {
    client.say(channel, `${username} has connected!`);
});

client.on('message', (channel, user, message) => {
      
    if(message == `!ds` ) {
        client.say(channel, `!dungeon start`);
    }
    
    if(message == `!rs` ) {
        client.say(channel, `!raid start`);
    }    

    if(message == `!d` ) {
        client.say(channel, `!dungeon`);
    }

    if(message == `!r` ) {
        client.say(channel, `!raid`);
    }

    if(message == `!s` ) {
        client.say(channel, `!scrolls`);
    }
});

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username: username1,
        password: password1
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('connected', () => {
    client.say(channel, `user has connected!`);
});

client.on('message', (channel, user, message) => {
      
    if(message == `!ds1` ) {
        client.say(channel, `!dungeon start`);
    }

    if(message == `!rs1` ) {
        client.say(channel, `!raid start`);
    }
    
    if(message == `!d` ) {
        client.say(channel, `!dungeon`);
    }

    if(message == `!r` ) {
        client.say(channel, `!raid`);
    }

});

const Options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username: username2,
        password: password2      
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('connected', () => {
    client.say(channel, `user has connected!`);
});

client.on('message', (channel, user, message) => {
      
    if(message == `!ds2` ) {
        client.say(channel, `!dungeon start`);
    }

    if(message == `!rs2` ) {
        client.say(channel, `!raid start`);
    }
    
    if(message == `!d` ) {
        client.say(channel, `!dungeon`);
    }

    if(message == `!r` ) {
        client.say(channel, `!raid`);
    }

    if(message == `!s2` ) {
        client.say(channel, `!scrolls`);
    }
});

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username: username3,
        password: password3      
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('connected', () => {
    client.say(channel, `user has connected!`);
});

client.on('message', (channel, user, message) => {
      
    if(message == `!ds3` ) {
        client.say(channel, `!dungeon start`);
    }

    if(message == `!rs3` ) {
        client.say(channel, `!raid start`);
    }
    
    if(message == `!d` ) {
        client.say(channel, `!dungeon`);
    }

    if(message == `!r` ) {
        client.say(channel, `!raid`);
    }

    if(message == `!s3` ) {
        client.say(channel, `!scrolls`);
    }
});

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username: username4,
        password: password4     
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('connected', () => {
    client.say(channel, `user has connected!`);
});

client.on('message', (channel, user, message) => {
      
    if(message == `!ds4` ) {
        client.say(channel, `!dungeon start`);
    }

    if(message == `!rs4` ) {
        client.say(channel, `!raid start`);
    }
    
    if(message == `!d` ) {
        client.say(channel, `!dungeon`);
    }

    if(message == `!r` ) {
        client.say(channel, `!raid`);
    }

    if(message == `!s4` ) {
        client.say(channel, `!scrolls`);
    }
});

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username: username5,
        password: password5      
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('connected', () => {
    client.say(channel, `user has connected!`);
});

client.on('message', (channel, user, message) => {
      
    if(message == `!ds5` ) {
        client.say(channel, `!dungeon start`);
    }

    if(message == `!rs5` ) {
        client.say(channel, `!raid start`);
    }
    
    if(message == `!d` ) {
        client.say(channel, `!dungeon`);
    }

    if(message == `!r` ) {
        client.say(channel, `!raid`);
    }

    if(message == `!s5` ) {
        client.say(channel, `!scrolls`);
    }
});

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username: username6,
        password: password6     
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('connected', () => {
    client.say(channel, `user has connected!`);
});

client.on('message', (channel, user, message) => {
      
    if(message == `!ds6` ) {
        client.say(channel, `!dungeon start`);
    }

    if(message == `!rs6` ) {
        client.say(channel, `!raid start`);
    }
    
    if(message == `!d` ) {
        client.say(channel, `!dungeon`);
    }

    if(message == `!r` ) {
        client.say(channel, `!raid`);
    }

    if(message == `!s6` ) {
        client.say(channel, `!scrolls`);
    }
});    