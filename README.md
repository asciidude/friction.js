# I gave up. 😔
This project acted mainly as a refresher to webhook management, type safety, etc. It's been a while since I've even touched an API and while it achieved it's goal of helping me "deoxidize the rust", I was interested more in providing a 100% API coverage, type safe, and limitless Discord API NPM module.

It has become very obvious to me this was not a good idea. The stress it was inducing was... something else. After taking some time off of this project, I've come to realize covering the *entire* Discord API is too much for a one-man team to cover. I tried advertising it to get some help to no avail, just thinking about this project made me dread even opening VS Code, and probably most importantly, I was staying up until 3 A.M. every night just trying to get this project over with... only to cover 1% of the expansive Discord API.

I apologize to anyone interested in this project, but honestly, [Discord.js](https://npmjs.com/discord.js) is and always will be a much better option to go for.

If this project picks up in popularity I might continue it and optimize the code, but for now, consider it publically archived.

![Banner](images/Friction_banner.png)

# Friction
Friction is an object-oriented Discord API wrapper built for ease of use.

## Installation (currently unavailable)
To install friction.ts, simply run `npm install friction.ts`

## Example Usage
```js
import { Client, Intents, Events } from 'friction.ts';

const client = new Client([Intents.GUILDS, Intents.GUILD_MESSAGES]);

client.on(Events.Ready, () => {
    console.log(`Logged in as ${client.user!.tag}`);
});

client.on(Events.MessageCreate, async (message: Message) => {
    if(message.author.bot) return;
    const channel = await (new Channel(client, message.channelId)).get();

    if(message.content.toLowerCase() === 'hello bot') {
        channel?.send('Hello!');
    }
});

client.login('your-bot-token');
```

More examples found [here](https://github.com/asciidude/friction.ts/tree/main/examples).

## Dependencies

| 🎯 Dependency  | 📼 Version | 🔗 Link |
|-----------------|------------|----------|
| WebSocket       | ^8.18.0    | [npm](https://www.npmjs.com/package/ws) |
| @types/ws       | ^8.5.12    | [npm](https://www.npmjs.com/package/@types/ws) |
| axios           | ^1.7.2     | [npm](https://www.npmjs.com/package/axios) |

## Features
- Object oriented design for ease of use
- Comprehensive event handling
- Intuitive and flexible API
- Type safety all around

### Documentation
Friction is documented through GitHub's wiki functionality, [you can find the documentation here](https://github.com/asciidude/friction.ts/wiki).
