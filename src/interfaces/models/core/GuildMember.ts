/**
 * Interface for Guild Member
 */

import AvatarDecorationData from "./AvatarDecorationData";
import User from "./User";

export default interface GuildMember {
    user: User;
    nick: string | null;
    avatar: string | null;
    avatarHash: string | null;
    roles: Array<string>;
    joinedAt: Date;
    premiumSince: Date | null;
    deaf: boolean;
    mute: boolean;
    flags: number;
    pending: boolean;
    permissions: string;
    communicationDisabledUntil: Date;
    avatarDecorationData: AvatarDecorationData;
}