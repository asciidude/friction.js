import Client from '../client/Client';
import ClientUser from '../client/ClientUser';
import GatewayEvent from '../interfaces/payloads/GatewayEvent';
import Events from '../constants/Events';

export default function(client: Client, payload: GatewayEvent) {
    client.user = new ClientUser(
        payload.d.user.id,
        payload.d.user.username,
        payload.d.user.discriminator,
        payload.d.user.verified,
        payload.d.user.flags,
        payload.d.user.bot,
        payload.d.user.avatar || null,
        payload.d.user.globalName || null,
        payload.d.user.system || false,
        payload.d.user.mfaEnabled || false,
        payload.d.user.banner || null,
        payload.d.user.accentColor || null,
        payload.d.user.locale || 'en-US',
        payload.d.user.email || null,
        payload.d.user.premium || 0,
        payload.d.user.publicFlags || 0
    );
    
    client.emit(Events.Ready);
}