/**
 * Interface for Message
 */

import User from "./User";

export default interface Message {
    id: string;
    channelId: string;
    author: User;
    content: string;
    createdTimestamp: Date,
    editedTimestamp: Date | null,
    tts: boolean,
    mentionsEveryone: boolean,
    mentionsUsers: Array<User>,
    //mentionsRoles: Array<Role>,
    //mentionsChannels: Array<ChannelMention>,
    //attachments: Array<Attachment>,
    //embeds: Array<Embeds>,
    //reactions: Array<Reactions>,
    nonce: number | string,
    pinned: boolean,
    webhookId: string | null,
    type: number,
    //activity: MessageActivity | null,
    //application: Application | null,
    //applicationId: Application#id | null,
    //flags: number, /** Array<MessageFlag> converted to bitfield */
    //reference: MessageReference | null,
    //referenceContent: Message | null, /** Best to add whenever reference is added */
    //snapshots: Array<MessageSnapshot> | null,
    //interactionMetadata: InteractionMetadata | null,
    //Interaction: MessageInteraction | null,
    //thread: Channel | null,
    //components: Array<Component> | null,
    //stickerItems: Array<MessageStickerItem> | null,
    //stickers: Array<Sticker> | null,
    position: number,
    //roleSubscription: RoleSubscriptionData,
    //resolved: ResolvedData,
    //poll: Poll,
    //call: MessageCall
}