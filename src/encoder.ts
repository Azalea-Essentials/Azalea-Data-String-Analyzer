import { textToHex } from "./utils";

type NormalUI_Button = {
    icon?: string,
    command: string,
    subtext?: string,
    text: string
}

type NormalUI = {
    buttons: NormalUI_Button[],
    title: string,
    tag: string,
    body?: string,
    item?: string,
    id: string
}

type StringObject = {
    [key: string]: string
}

type ChestUI_Icon = {
    row: number,
    column: number,
    itemAmount: 1,
    itemLore: string[],
    sound: number,
    icon: string,
    command: string,
    itemName: string
}

type ChestUI = {
    icons: ChestUI_Icon[],
    title: string,
    tag: string,
    rows: number,
    color: number
}

type Sidebar = {
    enabled: true,
    lines: string[][]
}

type Vec3 = {
    x: number,
    y: number,
    z: number
}

type Vec2 = {
    x: number,
    y: number
}

type Warp = {
    name: string,
    position: Vec3,
    rotation?: Vec2
}

type EncoderOptions = {
    NormalUIs: NormalUI[],
    ConfigDB: StringObject,
    ChestGUIs: ChestUI[],
    SidebarProperties: Sidebar,
    Warps: Warp[]
}

export function encodeLegacyDataString(opts: EncoderOptions): string {
    let parts = [];
    // Separator character (per part: ;), per subpart: ,
    for(const ui of opts.NormalUIs) {
        let subparts = [
            `${ui.body ? textToHex(ui.body) : "N/A"}`,
            `${textToHex(ui.title)}`,
            `${textToHex(ui.tag)}`,
            `${ui.item ? textToHex(ui.item) : "N/A"}`,
            `${textToHex(JSON.stringify(ui.buttons))}`
        ]
        parts.push(subparts.join(','))
    }
    for(const ui of opts.ChestGUIs) {
        let subparts = [
            `${textToHex(ui.title)}`,
            `${textToHex(ui.tag)}`,
            `${textToHex(ui.rows.toString())}`,
            `${textToHex((ui.color ? ui.color : 0).toString())}`,
            `${textToHex(JSON.stringify(ui.icons))}`
        ]
        parts.push(subparts.join(','))
    }
    let sidebarSubparts = [
        `${opts.SidebarProperties.enabled ? "ENABLED" : "DISABLED"}`,
        ...opts.SidebarProperties.lines.map(line=>{
            return line.map(frame=>{
                return textToHex(frame);
            }).join('|')
        })
    ]
    parts.push(sidebarSubparts.join(','))
    for(const warp of opts.Warps) {
        let subparts = [
            `${textToHex(warp.name)}`,
            `${warp.position.x},${warp.position.y},${warp.position.z}`,
            `${warp.rotation ? `${warp.rotation.x},${warp.rotation.y}` : `N/A`}`
        ];
        parts.push(sidebarSubparts.join(','))
    }
    let configSubparts = [];
    for(const key of Object.keys(opts.ConfigDB)) {
        configSubparts.push(`${textToHex(key)}|${textToHex(opts.ConfigDB[key])}`);
    }
    if(!configSubparts.length) configSubparts.push(`N/A`)
    parts.push(configSubparts.join(','))
    return `AZALEADATA;${parts.join(';')}`;
}