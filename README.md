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