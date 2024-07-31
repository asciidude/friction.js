import Heartbeat from "../interfaces/payloads/Heartbeat";
import Hello from "../interfaces/payloads/Hello";
import Identify from "../interfaces/payloads/Identify";
import OPCodes from "./OPCodes";

export const Hello: Hello = {
    op: OPCodes.HELLO,
    d: null
}

export const Heartbeat: Heartbeat = {
    op: OPCodes.HEARTBEAT,
    d: null
}

export const Identify: Identify = {
    op: OPCodes.IDENTIFY,
    d: {
        token: '', /* Identify.d.token */
        intents: 513, /* Identify.d.intents */
        properties: {
            $os: 'linux',
            $browser: 'friction',
            $device: 'friction'
        }
    }
}

export const Reconnect: Identify = {
    op: OPCodes.RECONNECT,
    d: {
        token: '', /* Identify.d.token */
        intents: 513, /* Identify.d.intents */
        properties: {
            $os: 'linux',
            $browser: 'friction',
            $device: 'friction'
        }
    }
}