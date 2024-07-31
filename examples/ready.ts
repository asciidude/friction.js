import 'dotenv/config';
import { Client, Intents } from '../src';

const client = new Client([
    Intents.GUILD_MESSAGES
]);

client.once('ready', () => {
    console.log(`${client.user?.tag} is ready!`);
    console.log(client.user);
});

client.login(process.env.TOKEN!);