import BaseError from './BaseError';

export default class HeartbeatError extends BaseError {
    constructor(message: string = 'Failed to send heartbeat', originalError?: Error) {
        super(message);
        this.name = 'HeartbeatError';
        
        if (originalError) {
            this.stack = `${this.stack}\nCaused by: ${originalError.stack}`;
        }
    }
}