![Banner](images/Friction_banner.png)

# Friction
Friction is an object-oriented Discord API wrapper built for ease of use.

### Installation (currently unavailable)
To install friction.ts, simply run `npm install friction.ts`

### Dependencies

| 🎯 Dependency  | 📼 Version | 🔗 Link |
|-----------------|------------|----------|
| WebSocket       | ^8.18.0    | [npm](https://www.npmjs.com/package/ws) |
| @types/ws       | ^8.5.12    | [npm](https://www.npmjs.com/package/@types/ws) |
| axios           | ^1.7.2     | [npm](https://www.npmjs.com/package/axios) |

### Features
- Object oriented design for ease of use
- Comprehensive event handling
- Intuitive and flexible API
- Type safety all around

### Example Usage
```js
import { Client, Intents, Events } from 'friction.ts';

const client = new Client([Intents.GUILDS, Intents.GUILD_MESSAGES]);

client.on(Events.Ready, () => {
    console.log(`Logged in as ${client.user!.tag}`);
});

client.login('your-bot-token');
```

### Documentation
Friction is documented through GitHub's wiki functionality, [you can find the documentation here](https://github.com/asciidude/friction.ts/wiki).