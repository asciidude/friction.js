/**
 * Interface for Embed
 */

import EmbedAuthor from "./EmbedAuthor";
import EmbedField from "./EmbedField";
import EmbedFooter from "./EmbedFooter";
import EmbedMedia from "./EmbedMedia";
import EmbedProvider from "./EmbedProvider";

export default interface Embed {
    title: string | null;
    type: string | null;
    description: string | null;
    url: string | null;
    timestamp: Date;
    color: number | null;
    footer: EmbedFooter | null;
    image: EmbedMedia | null;
    thumbnail: EmbedMedia | null;
    video: EmbedMedia | null;
    provider: EmbedProvider | null;
    author: EmbedAuthor | null;
    fields: Array<EmbedField> | null;
}