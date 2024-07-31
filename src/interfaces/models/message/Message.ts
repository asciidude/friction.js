/**
 * Interface for Message
 */

import Attachment from "./Attachment";
import ChannelMention from "./ChannelMention";
import Embed from "../embed/Embed";
import Role from "../role/Role";
import User from "../core/User";
import Reaction from "./Reaction";
import MessageActivity from "./MessageActivity";
import Application from "../core/Application";
import MessageReference from "./MessageReference";
import MessageInteractionMetadata from "./MessageInteractionMetadata";
import MessageInteraction from "./MessageInteraction";

export default interface Message {
    id: string;
    channelId: string;
    //channel: Channel;
    author: User;
    content: string;
    createdTimestamp: Date,
    editedTimestamp: Date | null,
    tts: boolean,
    mentionsEveryone: boolean,
    mentionsUsers: Array<User>,
    mentionsRoles: Array<Role>,
    mentionsChannels: Array<ChannelMention>,
    attachments: Array<Attachment>,
    embeds: Array<Embed>,
    reactions: Array<Reaction>,
    nonce: number | string,
    pinned: boolean,
    webhookId: string | null,
    type: number,
    activity: MessageActivity | null,
    application: Application | null,
    applicationId: string | null, /** Returned in payload */
    flags: number,
    reference: MessageReference | null,
    referenceContent: Message | null,
    snapshots: Array<Message> | null, /** Currently contains: type, content, embeds, attachments, timestamp, editedTimestamp, flags, mentions, mentionRoles */
    messageInteractionMetadata: MessageInteractionMetadata | null,
    interaction: MessageInteraction | null,
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