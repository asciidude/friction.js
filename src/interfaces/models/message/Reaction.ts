/**
 * Interface for Reaction
 */

import Emoji from "./Emoji";
import ReactionCountDetails from "./ReactionCountDetails";

export default interface Reaction {
    count: number;
    count_details: ReactionCountDetails;
    me: boolean;
    meSuper: boolean; /** me_burst in api */
    emoji: Emoji;
    superColors: Array<any> /** burst_colors in api */
}