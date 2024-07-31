/**
 * Interface for Embed Image
 */

export default interface EmbedImage {
    url: string;
    proxyUrl: string | null;
    height: number | null;
    width: number | null;
}