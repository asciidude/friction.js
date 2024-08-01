/**
 * Interface for Tag
 */

export default interface Tag {
    id: string;
    name: string;
    moderated: boolean;
    emojiId: string | null;
    emojiName: string | null;
}