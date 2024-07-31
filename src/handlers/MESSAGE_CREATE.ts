import Client from '../client/Client';
import GatewayEvent from '../interfaces/payloads/GatewayEvent';
import Events from '../constants/Events';

export default function(client: Client, payload: GatewayEvent) {
    
    
    client.emit(Events.MessageCreate, );
}