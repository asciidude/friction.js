import ChannelTypes from '../../../types/ChannelTypes';
import ComponentTypes from '../../../types/ComponentTypes';
import Emoji from './Emoji';

interface ActionRow {
    type: ComponentTypes.ActionRow;
    components: MessageComponent[];
}

interface Button {
    type: ComponentTypes.Button;
    label: string;
    style: ButtonStyle;
    emoji: Emoji | null;
    customId: string | null;
    url: string | null;
    disabled: boolean;
}

interface SelectOption {
    label: string;
    value: string;
    description: string | null;
    emoji: Emoji | null;
    default: boolean | null;
}

interface SelectMenu {
    type: ComponentTypes.RoleSelect | ComponentTypes.UserSelect | ComponentTypes.StringSelect
        | ComponentTypes.ChannelSelect | ComponentTypes.MentionableSelect;
    customId: string;
    options: SelectOption[];
    channelTypes: ChannelTypes[] | null;
    placeholder: string | null;
    defaultValues: DefaultValue[] | null;
    minValues: number | null;
    maxValues: number | null;
    disabled: boolean;
}

interface TextInput {
    type: ComponentTypes.TextInput;
    customId: string;
    style: TextInputStyle;
    label: string;
    minLength: number | null;
    maxLength: number | null;
    required: boolean;
    value: string | null;
    placeholder: string | null;
}

interface DefaultValue {
    id: string;
    type: "user" | "role" | "channel";
}

enum ButtonStyle {
    Primary = 1,
    Secondary,
    Success,
    Danger,
    Link
}

enum SelectMenuType {
    StringSelect = 3,
    UserSelect = 5,
    RoleSelect,
    MentionableSelect,
    ChannelSelect
}

enum TextInputStyle {
    Short = 1,
    Paragraph
}

type MessageComponent = ActionRow | Button | SelectMenu | TextInput;

export default MessageComponent;
export { ActionRow, Button, SelectOption, SelectMenu, TextInput, DefaultValue, ButtonStyle, SelectMenuType, TextInputStyle };