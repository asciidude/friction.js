/**
 * Interface for Attachment
 */

export default interface Attachment {
    id: string;
    fileName: string;
    title: string | null;
    description: string | null;
    contentType: string; // https://en.wikipedia.org/wiki/Media_type
    size: number;
    url: string;
    proxyUrl: string;
    height: number | null;
    width: number | null;
    ephemeral: boolean;
    waveform: string | null; // Voice messages
    flags: number; // AttachmentFlags combined as bitfield
}