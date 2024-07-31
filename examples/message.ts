import 'dotenv/config';
import { Client, Intents, Events } from '../src';

const client = new Client([
    Intents.GUILD_MESSAGES
]);

client.once(Events.Ready, () => {
    console.log(`${client.user?.tag} is ready!`);
});


client.on(Events.MessageCreate, (message/*: Message*/) => {
    // got lots to work on before this ;-;
    // love discord, hate the amount of API functions there are for library devs to be pained thru
})

client.login(process.env.TOKEN!);