/**
 * Interface for Message Interaction Metadata
 */

import User from '../core/User';
import IntegrationTypes from '../../../types/IntegrationTypes';

type IntegrationOwners = {
    [key in IntegrationTypes]?: string;
};

export default interface MessageInteractionMetadata {
    id: string;
    type: number;
    user: User;
    authorizingIntergrationOwners: IntegrationOwners;
    originalResponseMessageId: string | null;
    interactedMessageId: string | null;
    triggeringInteractionMetadata: MessageInteractionMetadata | null;
}