type NormalUI_Button = {
    icon?: string;
    command: string;
    subtext?: string;
    text: string;
};
type NormalUI = {
    buttons: NormalUI_Button[];
    title: string;
    tag: string;
    body?: string;
    item?: string;
    id: string;
};
type StringObject = {
    [key: string]: string;
};
type ChestUI_Icon = {
    row: number;
    column: number;
    itemAmount: 1;
    itemLore: string[];
    sound: number;
    icon: string;
    command: string;
    itemName: string;
};
type ChestUI = {
    icons: ChestUI_Icon[];
    title: string;
    tag: string;
    rows: number;
    color: number;
};
type Sidebar = {
    enabled: true;
    lines: string[][];
};
type Vec3 = {
    x: number;
    y: number;
    z: number;
};
type Vec2 = {
    x: number;
    y: number;
};
type Warp = {
    name: string;
    position: Vec3;
    rotation?: Vec2;
};
type EncoderOptions = {
    NormalUIs: NormalUI[];
    ConfigDB: StringObject;
    ChestGUIs: ChestUI[];
    SidebarProperties: Sidebar;
    Warps: Warp[];
};
export declare function encodeLegacyDataString(opts: EncoderOptions): string;
export {};
