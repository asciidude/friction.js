import BaseError from './BaseError';

export default class EventHandlerError extends BaseError {
    constructor(message: string = 'Failed to handle event', originalError?: Error) {
        super(message);
        this.name = 'EventHandlerError';
        
        if (originalError) {
            this.stack = `${this.stack}\nCaused by: ${originalError.stack}`;
        }
    }
}