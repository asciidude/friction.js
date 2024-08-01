/**
 * Interface for Overwrite
 */

export default interface Overwrite {
    id: string;
    type: number,
    allow: string, /** Permission bit set */
    deny: string /** Permission bit set */
}