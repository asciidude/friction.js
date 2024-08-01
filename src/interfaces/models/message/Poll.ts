/**
 * Interface for Poll
 */

import PollAnswer from "./PollAnswer";
import PollMedia from "./PollMedia";
import PollResults from "./PollResults";

export default interface Poll {
    question: PollMedia;
    answers: Array<PollAnswer>;
    expiry: Date;
    allowMultiSelect: boolean;
    layoutType: number;
    results: PollResults | null;
}