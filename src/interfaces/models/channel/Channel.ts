/**
 * Interface for Channel
 */

import User from "../core/User";
import DefaultReaction from "./DefaultReaction";
import Overwrite from "./Overwrite";
import Tag from "./Tag";
import ThreadMember from "./ThreadMember";
import ThreadMetadata from "./ThreadMetadata";

export default interface Channel {
    id: string;
    type: number | null;
    guildId: string | null;
    position: number | null;
    permissionOverwrites: Array<Overwrite> | null;
    name: string | null;
    topic: string | null;
    nsfw: boolean | null;
    lastMessageId: string | null;
    voiceBitrate: number | null;
    voiceUserLimit: number | null;
    rateLimitPerUser: number | null;
    dmRecipients: Array<User> | null;
    groupIconHash: string | null;
    icon: string | null;
    groupOwnerId: string | null;
    groupApplicationId: string | null; /** Application ID of a group DM's owner if bot-created */
    groupManaged: boolean | null;
    parentId: string | null;
    lastPinTimestamp: Date | null,
    voiceRtcRegion: string | null; /** Voice region ID for voice channel, automatic when set to null */
    videoQualityMode: number | null;
    threadMessageCount: number | null;
    threadMemberCount: number | null;
    threadMetadata: ThreadMetadata | null;
    threadMember: ThreadMember | null;
    threadDefaultAutoArchiveDuration: number | null; /** In minutes, can be set to 60, 1440, 4320, 10080 */
    permissions: string | null;
    flags: number | null;
    threadTotalMessagesSent: number | null;
    forumAvailableTags: Array<Tag> | null;
    forumAppliedTags: Array<string> | null;
    forumDefaultReactionEmoji: DefaultReaction | null;
    forumDefaultSortOrder: number | null;
    forumDefaultForumLayout: number | null;
}