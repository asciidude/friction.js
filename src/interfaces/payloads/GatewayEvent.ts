/**
 * Interface for Gateway Event payloads
 */

export default interface GatewayEvent {
    t?: string;
    op: number;
    d?: any;
    s?: number;
}