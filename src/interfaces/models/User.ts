/**
 * Interface for User
 */

import Snowflake from "./Snowflake";

export default interface User {
    snowflakeId: Snowflake;
    id: string;
    username: string;
    discriminator: string;
    globalName: string | null;
    avatar: string | null;
    avatarHash: string | null;
    bot: boolean;
    system: boolean;
    mfaEnabled: boolean;
    banner: string | null;
    bannerHash: string | null;
    accentColor: number | null;
    locale: string;
    verified: boolean;
    email: string | null;
    flags: number;
    premium: number;
    publicFlags: number;
}