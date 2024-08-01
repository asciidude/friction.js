import 'dotenv/config';
import { Client, Intents, Events, Message, Channel } from '../src';

const client = new Client([
    Intents.GUILD_MESSAGES,
    Intents.MESSAGE_CONTENT
]);

client.once(Events.Ready, () => {
    console.log(`${client.user?.tag} is ready!`);
});


client.on(Events.MessageCreate, async (message: Message) => {
    if(message.author.bot) return;
    const channel = await (new Channel(client, message.channelId)).get();

    // Send a message to the channel if content is equal to "hello" or "i've" :troll:
    if(message.content.toLowerCase() === 'hello') {
        channel?.send('darkness my old friend');
    }

    if(message.content.toLowerCase() === 'i\'ve') {
        channel?.send('come to talk with you again');
    }
});

client.login(process.env.TOKEN!);