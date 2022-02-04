<h1 align="center"> My HydraBot </h1>

<h2 align="center"> IMPORTANT </h2>
PLEASE BE SURE TO READ THIS PAGE BEFORE STARTING TO AVOID ANY ISSUES WITH THE BOT. You can also use the youtube video I referenced as a visual aid. There are multiple index.js and settings.json files for you to choose from based on your needs. Please use those files as a reference when setting up your index.js and settings.json file.

<h2 align="center"> Introduction </h2>
This bot was meant to be used as a Twitch chat bot. I created this bot using Chris Riot's YouTube video (https://www.youtube.com/watch?v=hoiWxlZ6xHw) and his coding template found here https://github.com/ChrisRiot/simple-twitch-bot I needed the bot to work for multiple users simultaneously but was unable to find anything on the web for a multi-headed bot so I made some adjustments. The game I am using the bot for is Ravenfall so the commands in this file were meant for that game. You can change the commands to fit your needs. You will need a code editor (I recommend Visual Studio Code but it is upto you)

<h2 align="center"> Bot download and configuration </h2>
<h3> Bot Download </h3>
Step 1 – Install Node.JS on your pc by going to this link https://nodejs.org/en/ <br>
Step 2 – Create a new folder on your Desktop (or wherever you feel most comfortable) to store your bot project <br>
Step 3 – Download Visual Studio Code if you don’t have it already https://code.visualstudio.com/ <br>
Step 4 – Sign into Twitch and get the oauth code from https://twitchapps.com/tmi/ (this has to be done for each account you are adding to the bot so I suggest having all the information on a sticky or notepad because you will need the information later) <br>
Step 5 – Open VS Code and navigate to the folder you created for the bot. (if you need instructions for Visual Studio Code, you can watch this https://www.youtube.com/watch?v=WPqXP_kLzpo ) <br>
Step 6 - Using the terminal in VS Code type in "npm init" (no quotes) to start the project. A series of prompts will start and you can contiue to hit enter as there is no special instructions that you have to input here <br>
Step 7 - Once npm init has finished you'll want to type "npm install tmi.js" (again no quotes) <br>
Step 8 - You will need to create two files. One called "settings.json" and the other "index.js" <br>

<h3> Bot Configuration </h3>
<h4> You will have more files in your folder than you see here and that is okay.  We will only be focusing on the settings.json and index.js files for this set up. </h4>
Step 1 - Go to the settings.json file you created you created and model your settings to match mine for every account you are adding to this bot. This is where you would input the oauth code you generated from https://twitchapps.com/tmi/ Be sure to copy the entire code from that site (including the oauth:) and place it inside the quotation marks. Once added and saved you are ready to move on to the index.js file <br>
Step 2 - Navigate to the index.js file. Here is where you will customize the bot(s) to respond to commands. You may use the one I have here as a template, but you want to be sure to customize it to your username(s) and command preferences <br>

<h2 align="center"> How to run the bot locally: </h2>
<h3> DO NOT UNDER ANY CIRCUMSTANCES RUN NPM INSTALL FOREVER -G! IT HAS CAUSED PROBLEMS AND YOU WILL ENTER THE MATRIX </h3>
Step 1 - Open your command line interface and type "npm install pm2 -g" (no quotes) <br>
Step 2 - Once the install finishes type "npm audit fix --force" (no quotes) <br>
Step 3 - Once the audit fix has finished running type  pm2 start "C:\whatever the file path is that you created" (with quotations!) <br>
The bot should now be connected and the command line interface can be closed. This will continue to run until you restart your computer or you open the command line and use pm2 stop all
