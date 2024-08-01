/**
 * Interface for Poll Answer
 */

import PollMedia from "./PollMedia";

export default interface PollAnswer {
    answerId: number;
    pollMedia: PollMedia;
}