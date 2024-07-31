/* Import modules & export them here */

/** Client */
import Client from "./client/Client";
import ClientUser from "./client/ClientUser";

/** Constants */
import { cdnBase } from "./constants/BaseURLs";
import Gateway from "./constants/Gateway";
import OPCodes from "./constants/OPCodes";
import Events from "./constants/Events";
import { Hello, Heartbeat, Identify, Reconnect } from "./constants/Payloads";

/** Models */
import Snowflake from "./models/Snowflake";

/** Util */
import Intents from '../src/util/IntentsBitField';

export {
    /** Client */
    Client, ClientUser,

    /** Constants */
    Gateway, OPCodes, Events,

    /** Models */
    Snowflake,

    /** Util */
    Intents
}

/** Payload constants */
export const Payloads = {
    Hello, Heartbeat, Identify, Reconnect
}

/** BaseURLs */
export const BaseURLs = {
    cdnBase
}