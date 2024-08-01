/**
 * Interface for Role Subscription Data
 */

export default interface RoleSubscriptionData {
    roleSubscriptionListingId: string;
    tierName: string;
    totalMonthsSubscribed: number;
    isRenewal: boolean;
}