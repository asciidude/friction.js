/**
 * Gateway & API URLs
 */
enum Gateway {
    GATEWAY_URL = 'wss://gateway.discord.gg/?v=10&encoding=json',
    API_URL = 'https://discord.com/api/v10'
}

export default Gateway;

/**
 * Gateway Close Events
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes
 */

export enum GatewayCloseEventCodes {
    UNKNOWN_ERROR = 4000, /** Unknown error, try reconnecting? */
    UNKNOWN_OPCODE = 4001, /** Invalid Gateway OP code sent or invalid payload for an OP code */
    DECODE_ERROR = 4002, /** Invalid payload sent to Discord */
    NOT_AUTHENTICATED = 4003, /** Payload sent prior to identification */
    AUTHENTICATION_FAILED = 4004, /** The account token sent with identification payload is invalid */
    ALREADY_AUTHENTICATED = 4005, /** More than one authentication payload has been sent to Discord */
    INVALID_SEQUENCE = 4007, /** The sequence sent when resuming the session was invalid, reconnect & start new session */
    RATE_LIMITED = 4008, /** Sending too many payloads too quickly, disconnected on recieving this */
    SESSION_TIMED_OUT = 4009, /** Session timed out, reconnect & start new one */
    INVALID_SHARD = 4010, /** Invalid shard sent during identification */
    SHARDING_REQUIRED = 4011, /** Session handling too many guilds, sharding is required in order to connect */
    INVALID_API_VERSION = 4012, /** Invalid API version sent for gateway */
    INVALID_INTENTS = 4013, /** Invalid intent sent for Gateway Intent, likely incorrectly calculated bitwise values */
    DISALLOWED_INTENTS = 4014 /** Disallowed intent sent for Gateway Intent, likely caused due to disabled intent or intent not approved for */
}

/**
 * Gateway Close Events w/ errors and descriptions
 */
export const GatewayCloseEvents: { [code: number]: { error: string; description: string } } = {
    [GatewayCloseEventCodes.UNKNOWN_ERROR]: {
        error: 'Unknown error',
        description: 'Unknown error, try reconnecting'
    },
    [GatewayCloseEventCodes.UNKNOWN_OPCODE]: {
        error: 'Unknown OP code',
        description: 'Invalid Gateway OP code sent or invalid payload for an OP code has been sent'
    },
    [GatewayCloseEventCodes.DECODE_ERROR]: {
        error: 'Decode error',
        description: 'Invalid payload sent to Discord'
    },
    [GatewayCloseEventCodes.NOT_AUTHENTICATED]: {
        error: 'Not authenticated',
        description: 'Payload sent prior to identification'
    },
    [GatewayCloseEventCodes.AUTHENTICATION_FAILED]: {
        error: 'Authentication failed',
        description: 'The account token sent with identification payload is invalid'
    },
    [GatewayCloseEventCodes.ALREADY_AUTHENTICATED]: {
        error: 'Already authenticated',
        description: 'More than one authentication payload has been sent to Discord'
    },
    [GatewayCloseEventCodes.INVALID_SEQUENCE]: {
        error: 'Invalid sequence',
        description: 'The sequence sent when resuming the session was invalid, reconnect & start new session'
    },
    [GatewayCloseEventCodes.RATE_LIMITED]: {
        error: 'Rate limited',
        description: 'Sending too many payloads too quickly, disconnected on receiving this'
    },
    [GatewayCloseEventCodes.SESSION_TIMED_OUT]: {
        error: 'Session timed out',
        description: 'Session timed out, reconnect & start new one'
    },
    [GatewayCloseEventCodes.INVALID_SHARD]: {
        error: 'Invalid shard',
        description: 'Invalid shard sent during identification'
    },
    [GatewayCloseEventCodes.SHARDING_REQUIRED]: {
        error: 'Sharding required',
        description: 'Session handling too many guilds, sharding is required in order to connect'
    },
    [GatewayCloseEventCodes.INVALID_API_VERSION]: {
        error: 'Invalid API version',
        description: 'Invalid API version sent for gateway'
    },
    [GatewayCloseEventCodes.INVALID_INTENTS]: {
        error: 'Invalid intents',
        description: 'Invalid intent sent for Gateway Intent, likely incorrectly calculated bitwise values'
    },
    [GatewayCloseEventCodes.DISALLOWED_INTENTS]: {
        error: 'Disallowed intents',
        description: 'Disallowed intent sent for Gateway Intent, likely caused due to disabled intent or intent not approved for'
    }
};