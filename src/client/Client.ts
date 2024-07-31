import Intents, { IntentsBitField } from "../util/IntentsBitField";
import WebSocketManager from "../ws/WebSocketManager";
import EventEmitter from 'events';
import ClientUser from "./ClientUser";
/* import ClientUser from './ClientUser'; */

export default class Client extends EventEmitter {
    public WebSocket: WebSocketManager;
    public wsc;
    public intents: number;
    public token: string;

    constructor(intents: Intents[] = [Intents.GUILD_MESSAGES]) {
        super();
        this.token = '';
        this.intents = new IntentsBitField(intents).get();
        this.WebSocket = new WebSocketManager(this);
        this.wsc = this.WebSocket.wsc;
    }

    login(token: string) {
        this.token = token;
        this.WebSocket.connect(token);
    }

    protected _user: ClientUser | undefined; /** Client possibly not initialized yet */
    get user(): ClientUser | undefined {
        return this._user;
    }

    set user(user: ClientUser | undefined) {
        this._user = user;
    }
}