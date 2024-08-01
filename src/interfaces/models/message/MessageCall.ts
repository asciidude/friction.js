/**
 * Interface for Message Call
 */

export default interface MessageCall {
    participants: Array<String>;
    editedTimestamp: Date | null;
}