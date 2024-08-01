/**
 * Interface for Sticker
 */

import User from "../core/User";

export default interface Sticker {
    id: string;
    packId: string | null;
    name: string;
    description: string | null;
    tags: string;
    type: number;
    formatType: number;
    available: boolean;
    guildId: string;
    user: User;
    shortValue: number | null;
}