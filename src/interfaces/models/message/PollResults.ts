/**
 * Interface for Poll Results
 */

import PollAnswerCount from "./PollAnswerCount";

export default interface PollResults {
    isFinalized: boolean;
    answerCounts: PollAnswerCount;
}