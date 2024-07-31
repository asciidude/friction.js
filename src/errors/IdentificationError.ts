import BaseError from './BaseError';

export default class IdentificationError extends BaseError {
    constructor(message: string = 'Failed to identify client', originalError?: Error) {
        super(message);
        this.name = 'IdentificationError';
        
        if (originalError) {
            this.stack = `${this.stack}\nCaused by: ${originalError.stack}`;
        }
    }
}