import BaseError from './BaseError';

export default class MalformedGatewayEventError extends BaseError {
    constructor(message: string = 'Gateway event is malformed', originalError?: Error) {
        super(message);
        this.name = 'MalformedGatewayEventError';
        
        if (originalError) {
            this.stack = `${this.stack}\nCaused by: ${originalError.stack}`;
        }
    }
}