/**
 * Interface for Role
 */

import RoleTags from "./RoleTags";

export default interface Role {
    id: string;
    name: string;
    color: string;
    hoist: boolean;
    icon: string | null;
    iconHash: string | null;
    unicodeEmoji: string | null;
    position: number;
    permissions: string; /** Permission bitset */
    managed: boolean;
    tags: RoleTags;
    flags: number; /** RoleTags combined as bitfield */
}