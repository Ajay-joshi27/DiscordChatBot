require('dotenv').config();
const {Client, GatewayIntentBits} = require('discord.js');
const axios = require('axios')
const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});
client.once('ready', ()=>{
    console.log(`Login Successful as ${client.user.tag}!`)
})
client.on('messageCreate', async (message)=>{
        if(message.author.bot) return;

    const content  = message.content.toLowerCase();

   if(content === 'hello'|| content==='hi')
    message.reply({
        content: `Hello ${message.author.username}!!`
    })
   else if(content === 'india')
        message.reply({
            content: `Hello dear Indian Citizen!!`
        })

    else if(content === '!joke'){
        try{
       const response = await axios.get('http://www.official-joke-api.appspot.com/random_joke');
       const joke = response.data;
       
        message.reply({
            content: `${joke.setup} - ${joke.punchline}`
        });
    }catch(error){
        console.log(error);
    }
}
else if(content === '!fact'){
    try{
   const response = await axios.get('https://catfact.ninja/fact');
   const fact = response.data;
   
    message.reply({
        content: `${fact.fact}`
    });
}catch(error){
    console.log(error);
}
}
 
else if(content === 'how are you'){
    message.reply({
        content: `I'm a chatbot and i'll be always the same, but what about you`
    });

}
else if(content === '!help'){
    message.reply({
        content: `Use commands to operate me:
                - 1. !help : To provide help
                - 2. how are you : If you care about me.
                - 3. !joke : Provides a random joke everytime.
                - 4. india : Reflects Proud.
                - 5. !fact : Provides random fact.
                   `
    });

}
else {
    message.reply({
        content: `Ii dont know how to respond with this query`
    });
}
        
})

client.login(process.env.CLIENT);