/**
 * Interface for Thread Member
 */

import GuildMember from "../core/GuildMember";

export default interface ThreadMember {
    id: string;
    userId: string;
    joinTimestamp: Date;
    flags: number;
    member: GuildMember;
}