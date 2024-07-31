/**
 * OP Codes
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 */

enum OPCodes {
    DISPATCH = 0, /** An event was dispatched */
    HEARTBEAT = 1, /** Fired periodically by the client to keep the connection alive */
    IDENTIFY = 2, /** Starts a new session during the inital handshake */
    PRESENCE_UPDATE = 3, /** Update the client's presence */
    VOICE_STATE_UPDATE = 4, /** Used to join/leave or move between voice channels */
    RESUME = 6, /** Resume a previous session that was disconnected */
    RECONNECT = 7, /** Attempt to reconnect and resume immediately */
    REQUEST_GUILD_MEMBERS = 8, /** Request information about offline guild members in a large guild */
    INVALID_SESSION = 9, /** The sesssion has been invalidated, reconnect and identify/resume accordingly */
    HELLO = 10, /** Send immediately after connecting, contains `heartbeat_interval` */
    HEARTBEAT_ACK = 11 /** Sent in response to receiving a heartbeat to acknowledge that it has been recieved */
}

export default OPCodes;