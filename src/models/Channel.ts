import axios from "axios";
import Gateway from "../constants/Gateway";
import User from "../interfaces/models/core/User";
import ChannelFetchError from "../errors/ChannelFetchError";
import DefaultReaction from "../interfaces/models/channel/DefaultReaction";
import Overwrite from "../interfaces/models/channel/Overwrite";
import Tag from "../interfaces/models/channel/Tag";
import ThreadMember from "../interfaces/models/channel/ThreadMember";
import ThreadMetadata from "../interfaces/models/channel/ThreadMetadata";
import Client from "../client/Client";

export default class Channel {
    public client: Client;
    public id: string;
    public type?: number | null;
    public guildId: string | null;
    public position: number | null;
    public permissionOverwrites: Array<Overwrite> | null;
    public name: string | null;
    public topic: string | null;
    public nsfw: boolean | null;
    public lastMessageId: string | null;
    public voiceBitrate: number | null;
    public voiceUserLimit: number | null;
    public rateLimitPerUser: number | null;
    public dmRecipients: Array<User> | null;
    public groupIconHash: string | null;
    public icon: string | null;
    public groupOwnerId: string | null;
    public groupApplicationId: string | null;
    public groupManaged: boolean | null;
    public parentId: string | null;
    public lastPinTimestamp: Date | null;
    public voiceRtcRegion: string | null;
    public videoQualityMode: number | null;
    public threadMessageCount: number | null;
    public threadMemberCount: number | null;
    public threadMetadata: ThreadMetadata | null;
    public threadMember: ThreadMember | null;
    public threadDefaultAutoArchiveDuration: number | null;
    public permissions: string | null;
    public flags: number | null;
    public threadTotalMessagesSent: number | null;
    public forumAvailableTags: Array<Tag> | null;
    public forumAppliedTags: Array<string> | null;
    public forumDefaultReactionEmoji: DefaultReaction | null;
    public forumDefaultSortOrder: number | null;
    public forumDefaultForumLayout: number | null;

    constructor(
        client: Client,
        id: string,
        type?: number | null,
        guildId: string | null = null,
        position: number | null = null,
        permissionOverwrites: Array<Overwrite> | null = null,
        name: string | null = null,
        topic: string | null = null,
        nsfw: boolean | null = null,
        lastMessageId: string | null = null,
        voiceBitrate: number | null = null,
        voiceUserLimit: number | null = null,
        rateLimitPerUser: number | null = null,
        dmRecipients: Array<User> | null = null,
        groupIconHash: string | null = null,
        icon: string | null = null,
        groupOwnerId: string | null = null,
        groupApplicationId: string | null = null,
        groupManaged: boolean | null = null,
        parentId: string | null = null,
        lastPinTimestamp: Date | null = null,
        voiceRtcRegion: string | null = null,
        videoQualityMode: number | null = null,
        threadMessageCount: number | null = null,
        threadMemberCount: number | null = null,
        threadMetadata: ThreadMetadata | null = null,
        threadMember: ThreadMember | null = null,
        threadDefaultAutoArchiveDuration: number | null = null,
        permissions: string | null = null,
        flags: number | null = null,
        threadTotalMessagesSent: number | null = null,
        forumAvailableTags: Array<Tag> | null = null,
        forumAppliedTags: Array<string> | null = null,
        forumDefaultReactionEmoji: DefaultReaction | null = null,
        forumDefaultSortOrder: number | null = null,
        forumDefaultForumLayout: number | null = null
    ) {
        this.client = client;
        this.id = id;
        this.type = type;
        this.guildId = guildId;
        this.position = position;
        this.permissionOverwrites = permissionOverwrites;
        this.name = name;
        this.topic = topic;
        this.nsfw = nsfw;
        this.lastMessageId = lastMessageId;
        this.voiceBitrate = voiceBitrate;
        this.voiceUserLimit = voiceUserLimit;
        this.rateLimitPerUser = rateLimitPerUser;
        this.dmRecipients = dmRecipients;
        this.groupIconHash = groupIconHash;
        this.icon = icon;
        this.groupOwnerId = groupOwnerId;
        this.groupApplicationId = groupApplicationId;
        this.groupManaged = groupManaged;
        this.parentId = parentId;
        this.lastPinTimestamp = lastPinTimestamp;
        this.voiceRtcRegion = voiceRtcRegion;
        this.videoQualityMode = videoQualityMode;
        this.threadMessageCount = threadMessageCount;
        this.threadMemberCount = threadMemberCount;
        this.threadMetadata = threadMetadata;
        this.threadMember = threadMember;
        this.threadDefaultAutoArchiveDuration = threadDefaultAutoArchiveDuration;
        this.permissions = permissions;
        this.flags = flags;
        this.threadTotalMessagesSent = threadTotalMessagesSent;
        this.forumAvailableTags = forumAvailableTags;
        this.forumAppliedTags = forumAppliedTags;
        this.forumDefaultReactionEmoji = forumDefaultReactionEmoji;
        this.forumDefaultSortOrder = forumDefaultSortOrder;
        this.forumDefaultForumLayout = forumDefaultForumLayout;
    }

    /**
     * Get a channel's information & return channel class
     * @returns Channel Returns a Channel class
     */
    async get() {
        try {
            const response = await axios.get(
                `${Gateway.API_URL}/channels/${this.id}`,
                {
                    headers: {
                        'Authorization': `Bot ${this.client.token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            const data = response.data;

            return new Channel(
                this.client,
                data.id,
                data.type ?? null,
                data.guildId ?? null,
                data.position ?? null,
                data.permissionOverwrites ?? null,
                data.name ?? null,
                data.topic ?? null,
                data.nsfw ?? null,
                data.lastMessageId ?? null,
                data.voiceBitrate ?? null,
                data.voiceUserLimit ?? null,
                data.rateLimitPerUser ?? null,
                data.dmRecipients ?? null,
                data.groupIconHash ?? null,
                data.icon ?? null,
                data.groupOwnerId ?? null,
                data.groupApplicationId ?? null,
                data.groupManaged ?? null,
                data.parentId ?? null,
                data.lastPinTimestamp ? new Date(data.lastPinTimestamp) : null,
                data.voiceRtcRegion ?? null,
                data.videoQualityMode ?? null,
                data.threadMessageCount ?? null,
                data.threadMemberCount ?? null,
                data.threadMetadata ?? null,
                data.threadMember ?? null,
                data.threadDefaultAutoArchiveDuration ?? null,
                data.permissions ?? null,
                data.flags ?? null,
                data.threadTotalMessagesSent ?? null,
                data.forumAvailableTags ?? null,
                data.forumAppliedTags ?? null,
                data.forumDefaultReactionEmoji ?? null,
                data.forumDefaultSortOrder ?? null,
                data.forumDefaultForumLayout ?? null
            );
        } catch(err: any) {
            if(err.response && err.response.status === 429) {
                setTimeout(() => {
                    this.get();
                }, Number(err.response.headers['retry-after']) * 1000);
            } else {
                throw new ChannelFetchError('Failed to fetch channel', err as Error);
            }
        }
    }

    /**
     * Send a message to a channel
     * @param content The content of the message
     * @param tts Whether the message is sent with TTS
     */
    async send(content: string, tts: boolean = false) {
        try {
            await axios.post(
                `${Gateway.API_URL}/channels/${this.id}/messages`,
                {
                    'content': content,
                    'tts': tts
                },
                {
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': `Bot ${this.client!.token}`
                    }
                }
            )
        } catch(err: any) {
            if(err.response && err.response.status === 429) {
                setTimeout(() => {
                    this.send(content, tts);
                }, Number(err.response.headers['retry-after']) * 1000);
            } else {
                throw err;
            }
        }
    }
}
