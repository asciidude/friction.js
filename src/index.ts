/* Import modules & export them here */

/** Client */
import Client from "./client/Client";
import ClientUser from "./client/ClientUser";

/** Constants */
import { cdnBase } from "./constants/BaseURLs";
import Gateway from "./constants/Gateway";
import OPCodes from "./constants/OPCodes";
import { Hello, Heartbeat, Identify, Reconnect } from "./constants/Payloads";

/** Models */
import Snowflake from "./models/Snowflake";
import Channel from "./models/Channel";
import Message from "./models/Message";

/** Util */
import Intents from '../src/util/IntentsBitField';

/** Types */
import Events from "./types/Events";
import ChannelTypes from "./types/ChannelTypes";
import EmbedTypes from "./types/EmbedTypes";
import MessageActivityTypes from "./types/MessageActivityTypes";
import IntegrationTypes from './types/IntegrationTypes';
import ReferenceTypes from "./types/ReferenceTypes";
import OverwriteTypes from "./types/OverwriteTypes";
import ForumLayoutTypes from "./types/ForumLayoutTypes";
import ForumSortOrderTypes from "./types/ForumSortOrderTypes";
import ComponentTypes from "./types/ComponentTypes";
import StickerFormatTypes from './types/StickerFormatTypes';
import StickerTypes from "./types/StickerTypes";

export {
    /** Client */
    Client, ClientUser,

    /** Constants */
    Gateway, OPCodes,

    /** Models */
    Snowflake, Channel, Message,

    /** Util */
    Intents,
    
    /** Types */
    Events, ChannelTypes, EmbedTypes,
    MessageActivityTypes, IntegrationTypes, ReferenceTypes,
    OverwriteTypes, ForumLayoutTypes, ForumSortOrderTypes,
    ComponentTypes, StickerFormatTypes, StickerTypes
}

/** Payload constants */
export const Payloads = {
    Hello, Heartbeat, Identify, Reconnect
}

/** BaseURLs */
export const BaseURLs = {
    cdnBase
}