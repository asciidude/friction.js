/**
 * Interface for Message Interaction
 */

import GuildMember from "../core/GuildMember";
import User from "../core/User";

export default interface MessageInteraction {
    id: string;
    type: number;
    name: string;
    user: User;
    member: GuildMember;
}