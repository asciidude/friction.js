/** Client */
import Client from '../client/Client';

/** Constants */
import Gateway from '../constants/Gateway';
import WebSocket from 'ws';
import OPCodes from '../constants/OPCodes';
import { Heartbeat, Identify } from '../constants/Payloads';

/** Payload Interfaces */
import GatewayEvent from '../interfaces/payloads/GatewayEvent';

/** Errors */
import WebSocketConnectError from '../errors/WebSocketConnectError';
import EventHandlerError from '../errors/EventHandlerError';
import IdentificationError from '../errors/IdentificationError';
import MalformedGatewayEventError from '../errors/MalformedGatewayEventError';
import HeartbeatError from '../errors/HeartbeatError';

/** WSM */
export default class WebSocketManager {
    public wsc: WebSocket;

    public client: Client;
    public intents: number;

    private lastSequence: number | null = null;
    private heartbeatInterval: NodeJS.Timeout | null = null;

    /**
     * Initialize WebSocketManager
     * @param client The client class
     */
    constructor(client: Client) {
        this.wsc = new WebSocket(Gateway.GATEWAY_URL);

        this.client = client;
        this.intents = client.intents;
    }

    /**
     * Connect to web socket with token
     * @param token The token to connect to the web socket with
     */
    async connect(token: string) {
        try {
            this.wsc.on('message', async (data: WebSocket.Data) => {
                let payload: GatewayEvent;

                try {
                    payload = JSON.parse(data.toString());
                } catch(err) {
                    throw new MalformedGatewayEventError('Gateway event is malformed', err as Error);
                }

                const { t: event, op, d, s } = payload;

                if(s !== undefined) {
                    this.lastSequence = s;
                }
                
                if(op === OPCodes.HELLO) {
                    this.sendHeartbeat(d.heartbeat_interval);
                    await this.identify(token);
                }

                if(event) {
                    try {
                        await import(`../handlers/${event}.ts`).then(m => m.default(this.client, payload));
                    } catch(err) {
                        throw new EventHandlerError('Failed to handle event in WebSocketManager', err as Error);
                    }
                }
            });
        } catch(err) {
            throw new WebSocketConnectError('Failed to connect to WebSocket', err as Error);
        }
    }

    /**
     * Send a heartbeat to the WebSocket server
     * @param interval The interval of how long to wait before sending
     */
    private async sendHeartbeat(interval: number) {
        try {
            const jitter = Math.random(); /** Randomly choose a number between 0-1 */
            const delay = interval * jitter;
    
            Heartbeat.d = this.lastSequence;
    
            if (this.heartbeatInterval) {
                clearInterval(this.heartbeatInterval);
            }
    
            setTimeout(async () => {
                try {
                    await this.wsc.send(JSON.stringify(Heartbeat));
        
                    setInterval(async() => {
                        await this.wsc.send(JSON.stringify(Heartbeat));
                    }, interval);
                } catch(err) {
                    throw new HeartbeatError('Failed to send heartbeat:', err as Error);
                }
            }, delay);
        } catch(err) {
            throw new HeartbeatError('Failed to send initial heartbeat:', err as Error);
        }
    }

    /**
     * Send an identification payload to the WebSocket server
     * @param token The token of the client
     * @returns 
     */
    private async identify(token: string) {
        try {
            Identify.d.token = token;
            Identify.d.intents = this.intents;
            return this.wsc.send(JSON.stringify(Identify));
        } catch(err) {
            throw new IdentificationError('Failed to identify with WebSocket', err as Error);
        }
    }
}