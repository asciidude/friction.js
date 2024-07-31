import { cdnBase } from "../constants/BaseURLs";
import User from "../interfaces/models/User";
import Snowflake from "../models/Snowflake";

export default class ClientUser implements User {
    public snowflakeId: Snowflake;
    public username: string;
    public discriminator: string;
    public tag: string;
    public globalName: string | null;
    public avatar: string | null;
    public avatarHash: string | null;
    public bot: boolean;
    public system: boolean;
    public mfaEnabled: boolean;
    public banner: string | null;
    public bannerHash: string | null;
    public accentColor: number | null;
    public locale: string;
    public verified: boolean;
    public email: string | null;
    public flags: number;
    public premium: number;
    public publicFlags: number;

    /**
     * Creates an instance of ClientUser.
     * @param id The ID of the client user.
     * @param username The username of the client user.
     * @param discriminator The client user's discriminator.
     * @param verified Whether the client user is verified.
     * @param flags The flags the client user has.
     * @param bot Whether the client user is a bot.
     * @param avatarHash The avatar hash of the client user.
     * @param globalName The global name of the client user (optional).
     * @param system Whether the client user is a system user (optional).
     * @param mfaEnabled Whether the client user has MFA enabled (optional).
     * @param banner The banner of the client user (optional).
     * @param bannerHash The banner hash of the client user (optional).
     * @param accentColor The accent color of the client user (optional).
     * @param locale The locale of the client user (optional).
     * @param email The email of the client user (optional).
     * @param premium The premium type of the client user (optional).
     * @param publicFlags The public flags of the client user (optional).
     */
    constructor(
        id: string,
        username: string,
        discriminator: string,
        verified: boolean,
        flags: number,
        bot: boolean,
        avatarHash: string | null,
        globalName: string | null,
        system: boolean,
        mfaEnabled: boolean,
        bannerHash: string | null,
        accentColor: number | null,
        locale: string = 'en-US',
        email: string | null,
        premium: number,
        publicFlags: number
    ) {
        this.snowflakeId = new Snowflake(id);
        this.username = username;
        this.discriminator = discriminator;
        this.tag = `${username}#${discriminator}`;
        this.verified = verified;
        this.bot = bot;
        this.flags = flags;
        this.avatarHash = avatarHash;
        this.avatar = avatarHash ? `${cdnBase}/avatars/${id}/${avatarHash}.png` : null;
        this.globalName = globalName;
        this.system = system;
        this.mfaEnabled = mfaEnabled;
        this.bannerHash = bannerHash;
        this.banner = bannerHash ? `${cdnBase}/banners/${id}/${bannerHash}.png` : null;
        this.accentColor = accentColor;
        this.locale = locale;
        this.email = email;
        this.premium = premium;
        this.publicFlags = publicFlags;
    }

    get id(): string {
        return this.snowflakeId.id;
    }
}