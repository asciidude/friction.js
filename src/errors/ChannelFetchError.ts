import BaseError from './BaseError';

export default class ChannelFetchError extends BaseError {
    constructor(message: string = 'Failed to fetch channel', originalError?: Error) {
        super(message);
        this.name = 'ChannelFetchError';
        
        if (originalError) {
            this.stack = `${this.stack}\nCaused by: ${originalError.stack}`;
        }
    }
}