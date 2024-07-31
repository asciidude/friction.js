import BaseError from './BaseError';

export default class WebSocketConnectError extends BaseError {
    constructor(message: string = 'Failed to connect WebSocket', originalError?: Error) {
        super(message);
        this.name = 'WebSocketConnectError';
        
        if (originalError) {
            this.stack = `${this.stack}\nCaused by: ${originalError.stack}`;
        }
    }
}