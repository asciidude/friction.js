/**
 * Interface for Emoji
 */

import User from "../core/User";

export default interface Emoji {
    id: string;
    name: string | null;
    roles: Array<string> | null; /** Array of role IDs allowed to use this emoji */
    user: User;
    requireColors: boolean;
    managed: boolean;
    animated: boolean;
    available: boolean;
}