/**
 * Interface for Role Tags
 */

export default interface RoleTags {
    bot_id: string | undefined;
    intergrationId: string | undefined;
    booster: boolean | null;
    subscriptionListingId: string; // ID of the role's subscription SKU and listing
    availableForPurchase: boolean | null;
    guildConnections: boolean | null;
}