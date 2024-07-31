/**
 * Interface for Message Reference
 */

export default interface MessageReference {
    type: number;
    messageId: string | null;
    channelId: string | null;
    guildId: string | null;
    failIfNotExists: boolean | null;
}