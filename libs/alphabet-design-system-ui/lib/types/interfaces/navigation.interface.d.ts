export interface IADSNavigationItem {
    acceptApps?: Array<string>;
    acceptRoles?: Array<string>;
    acceptInternal?: boolean;
    acceptExternal?: boolean;
    children?: IADSNavigation;
    divider?: boolean;
    icon?: string;
    iconOnly?: boolean;
    initials?: string;
    label: string;
    notifications?: number;
    root?: boolean;
    url: string;
    isDisabled?: boolean;
}
export type IADSNavigation = Array<IADSNavigationItem>;
