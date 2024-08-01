/**
 * Interface for ResolvedData
 */

import User from "../core/User";
import GuildMember from "../core/GuildMember";
import Role from "../role/Role";
import Channel from "../channel/Channel";
import Message from "./Message";
import Attachment from "./Attachment";

export default interface ResolvedData {
    users: Map<string, User> | null;
    members: Map<string, Omit<GuildMember, 'user' | 'deaf' | 'mute'>> | null;
    roles: Map<string, Role> | null;
    channels: Map<string, Pick<Channel, 'id' | 'name' | 'type' | 'permissions' | 'threadMetadata' | 'parentId'>> | null;
    messages: Map<string, Partial<Message>> | null;
    attachments: Map<string, Attachment> | null;
}
