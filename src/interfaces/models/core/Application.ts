/**
 * Interface for Application (Discord "app")
 */

import IntergrationTypes from '../../../types/IntegrationTypes';
import InstallParameters from './InstallParameters';
import User from './User';

export default interface Application {
    id: string;
    name: string;
    icon: string | null;
    iconHash: string | null;
    description: string,
    rpcOrigins: Array<string> | null;
    public: boolean;
    requireOAuthGrant: boolean;
    bot: User; /** Partial User object associated with bot, similar to ClientUser */
    termsOfService: string | null;
    privacyPolicy: string | null;
    owner: User; /** Partial User object associated with owner */
    verifyKey: string | null;
    //team: Team | null;
    guildId: string | null; /** Guild associated with bot (eg. support server) */
    //guild: Guild | null;
    primarySKUId: string | null;
    slug: string | null;
    coverImage: string | null;
    coverImageHash: string | null;
    flags: number; /** Application flags */
    approximateGuildCount: number | null;
    redirectURIs: Array<String> | null;
    interactionEndpointURL: string | null;
    roleConnectionsVerificationURL: string | null;
    tags: Array<string> | null;
    installParameters: InstallParameters;
    intergrationTypesConfig: Partial<Record<IntergrationTypes, InstallParameters>>;
    customInstallURL: string | null;
}