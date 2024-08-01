import MessageInterface from '../interfaces/models/message/Message';

import Channel from '../interfaces/models/channel/Channel';
import Application from '../interfaces/models/core/Application';
import User from '../interfaces/models/core/User';
import Embed from '../interfaces/models/embed/Embed';
import Attachment from '../interfaces/models/message/Attachment';
import ChannelMention from '../interfaces/models/message/ChannelMention';
import MessageActivity from '../interfaces/models/message/MessageActivity';
import MessageCall from '../interfaces/models/message/MessageCall';
import MessageComponent from '../interfaces/models/message/MessageComponent';
import MessageInteraction from '../interfaces/models/message/MessageInteraction';
import MessageInteractionMetadata from '../interfaces/models/message/MessageInteractionMetadata';
import MessageReference from '../interfaces/models/message/MessageReference';
import Poll from '../interfaces/models/message/Poll';
import Reaction from '../interfaces/models/message/Reaction';
import ResolvedData from '../interfaces/models/message/ResolvedData';
import Sticker from '../interfaces/models/message/Sticker';
import StickerItem from '../interfaces/models/message/StickerItem';
import Role from '../interfaces/models/role/Role';
import RoleSubscriptionData from '../interfaces/models/role/RoleSubscriptionData';
import Client from '../client/Client';
import axios from 'axios';
import Gateway from '../constants/Gateway';

export default class Message implements MessageInterface {
    public client: Client;
    public id: string;
    public channelId: string;
    public author: User;
    public content: string;
    public createdTimestamp: Date;
    public editedTimestamp: Date | null;
    public tts: boolean;
    public mentionsEveryone: boolean;
    public mentionsUsers: User[];
    public mentionsRoles: Role[];
    public mentionsChannels: ChannelMention[];
    public attachments: Attachment[];
    public embeds: Embed[];
    public reactions: Reaction[];
    public nonce: string | number;
    public pinned: boolean;
    public webhookId: string | null;
    public type: number;
    public activity: MessageActivity | null;
    public application: Application | null;
    public applicationId: string | null;
    public flags: number;
    public reference: MessageReference | null;
    public referenceContent: MessageInterface | null;
    public snapshots: Pick<MessageInterface, 
        'type' 
        | 'content' 
        | 'embeds' 
        | 'attachments' 
        | 'createdTimestamp' 
        | 'editedTimestamp' 
        | 'flags' 
        | 'mentionsUsers' 
        | 'mentionsRoles'
    >[] | null;
    public messageInteractionMetadata: MessageInteractionMetadata | null;
    public interaction: MessageInteraction | null;
    public thread: Channel | null;
    public components: MessageComponent[] | null;
    public stickerItems: StickerItem[] | null;
    public stickers: Sticker[] | null;
    public position: number;
    public roleSubscription: RoleSubscriptionData;
    public resolved: ResolvedData;
    public poll: Poll;
    public call: MessageCall;

    constructor(
        client: Client,
        id: string,
        channelId: string,
        author: User,
        content: string,
        createdTimestamp: Date,
        editedTimestamp: Date | null,
        tts: boolean,
        mentionsEveryone: boolean,
        mentionsUsers: User[],
        mentionsRoles: Role[],
        mentionsChannels: ChannelMention[],
        attachments: Attachment[],
        embeds: Embed[],
        reactions: Reaction[],
        nonce: string | number,
        pinned: boolean,
        webhookId: string | null,
        type: number,
        activity: MessageActivity | null,
        application: Application | null,
        applicationId: string | null,
        flags: number,
        reference: MessageReference | null,
        referenceContent: MessageInterface | null,
        snapshots: Pick<MessageInterface, 
            'type' 
            | 'content' 
            | 'embeds' 
            | 'attachments' 
            | 'createdTimestamp' 
            | 'editedTimestamp' 
            | 'flags' 
            | 'mentionsUsers' 
            | 'mentionsRoles'
        >[] | null,
        messageInteractionMetadata: MessageInteractionMetadata | null,
        interaction: MessageInteraction | null,
        thread: Channel | null,
        components: MessageComponent[] | null,
        stickerItems: StickerItem[] | null,
        stickers: Sticker[] | null,
        position: number,
        roleSubscription: RoleSubscriptionData,
        resolved: ResolvedData,
        poll: Poll,
        call: MessageCall
    ) {
        this.client = client;
        this.id = id;
        this.channelId = channelId;
        this.author = author;
        this.content = content;
        this.createdTimestamp = createdTimestamp;
        this.editedTimestamp = editedTimestamp;
        this.tts = tts;
        this.mentionsEveryone = mentionsEveryone;
        this.mentionsUsers = mentionsUsers;
        this.mentionsRoles = mentionsRoles;
        this.mentionsChannels = mentionsChannels;
        this.attachments = attachments;
        this.embeds = embeds;
        this.reactions = reactions;
        this.nonce = nonce;
        this.pinned = pinned;
        this.webhookId = webhookId;
        this.type = type;
        this.activity = activity;
        this.application = application;
        this.applicationId = applicationId;
        this.flags = flags;
        this.reference = reference;
        this.referenceContent = referenceContent;
        this.snapshots = snapshots;
        this.messageInteractionMetadata = messageInteractionMetadata;
        this.interaction = interaction;
        this.thread = thread;
        this.components = components;
        this.stickerItems = stickerItems;
        this.stickers = stickers;
        this.position = position;
        this.roleSubscription = roleSubscription;
        this.resolved = resolved;
        this.poll = poll;
        this.call = call;
    }

    async send(content: string) {
        try {
            await axios.post(
                `${Gateway.API_URL}/channels/${this.id}/messages`,
                {
                    'content': content,
                    'tts': false
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
                    this.send(content);
                }, Number(err.response.headers['retry-after']) * 1000);
            } else {
                throw err;
            }
        }
    }
}