import Client from '../client/Client';
import GatewayEvent from '../interfaces/payloads/GatewayEvent';
import Channel from '../models/Channel';
import Message from '../models/Message';
import Events from '../types/Events';

export default async function(client: Client, payload: GatewayEvent) {
    const message = new Message(
        client,
        payload.d.id,
        payload.d.channel_id,
        payload.d.author,
        payload.d.content,
        new Date(payload.d.timestamp),
        null,
        payload.d.tts,
        payload.d.mentions_everyone,
        payload.d.mentions,
        payload.d.mentions_roles,
        payload.d.mentions_channels || [],
        payload.d.attachments,
        payload.d.embeds || [],
        [],
        payload.d.nonce,
        false,
        payload.d.webhook_id || null,
        payload.d.type,
        payload.d.activity || null,
        payload.d.application || null,
        payload.d.application_id,
        payload.d.flags,
        payload.d.message_reference || null,
        payload.d.referenced_message || null,
        payload.d.snapshots || null,
        payload.d.interaction_metadata || null,
        payload.d.interaction || null,
        payload.d.thread || null,
        payload.d.components || null,
        payload.d.sticker_items || null,
        payload.d.stickers || null,
        payload.d.position || null,
        payload.d.role_subscription_data || null,
        payload.d.resolved || null,
        payload.d.poll || null,
        payload.d.call || null
    )
    
    client.emit(Events.MessageCreate, message);
}