/**
 * Interface for Thread Metadata
 */

export default interface ThreadMetadata {
    archived: boolean;
    autoArchiveDuration: number;
    archiveTimestamp: Date;
    locked: boolean;
    invitable: boolean;
    createTimestamp: Date;
}