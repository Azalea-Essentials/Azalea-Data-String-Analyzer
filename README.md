# Azalea-Data-String-Analyzer
Analyze and create data strings for Azalea Legacy. Useful for making azalea legacy compatible addons or just analyzing your server configuration if you want

> **This is not how azalea legacy stores configuration. It is designed as an intermediate between azalea configuration and leaf configuration while converting.**

## Todo

- [x] Encoder
- [ ] Decoder
- [ ] Fully polish the encoder/decoder to get most things in azalea
- [ ] Integrate into leaf and azalea

## Projects using this library

- Leaf Essentials
- Azalea Essentials

## Examples

### Encode data

```ts
encodeLegacyDataString({
    ConfigDB: {
        chatrankformat: "hi"
    },
    ChestGUIs: [
        {
            "color": 0,
            "icons": [
                {
                    "column": 1,
                    "row": 1,
                    "command": "/say hi",
                    "icon": "wooden_sword",
                    "itemAmount": 1,
                    "itemLore": ["yes"],
                    "itemName": "meow :3",
                    "sound": 0
                }
            ],
            "rows": 1,
            "tag": "meow",
            "title": "Chest GUI"
        }
    ],
    NormalUIs: [
        {
            body: "Hello world",
            title: "Hello world",
            item: "minecraft:stick",
            tag: "meow",
            id: "1",
            buttons: [
                {
                    command: "/say hi",
                    icon: "wooden_sword",
                    subtext: "meow",
                    text: "hi"
                }
            ]
        }
    ],
    SidebarProperties: {
        enabled: true,
        lines: [
            [
                "MEOW",
                "NYA"
            ],
            [
                "TEST",
                "TESTING",
                "TESTED"
            ]
        ]
    },
    Warps: [
        {
            name: "Meow",
            position: {
                x: 1,
                y: 2,
                z: 3
            },
            rotation: {
                x: 4,
                y: 5
            }
        }
    ]
})
```

this will output:

```
AZALEADATA;48_65_6c_6c_6f_20_77_6f_72_6c_64,48_65_6c_6c_6f_20_77_6f_72_6c_64,6d_65_6f_77,6d_69_6e_65_63_72_61_66_74_3a_73_74_69_63_6b,5b_7b_22_63_6f_6d_6d_61_6e_64_22_3a_22_2f_73_61_79_20_68_69_22_2c_22_69_63_6f_6e_22_3a_22_77_6f_6f_64_65_6e_5f_73_77_6f_72_64_22_2c_22_73_75_62_74_65_78_74_22_3a_22_6d_65_6f_77_22_2c_22_74_65_78_74_22_3a_22_68_69_22_7d_5d;43_68_65_73_74_20_47_55_49,6d_65_6f_77,31,30,5b_7b_22_63_6f_6c_75_6d_6e_22_3a_31_2c_22_72_6f_77_22_3a_31_2c_22_63_6f_6d_6d_61_6e_64_22_3a_22_2f_73_61_79_20_68_69_22_2c_22_69_63_6f_6e_22_3a_22_77_6f_6f_64_65_6e_5f_73_77_6f_72_64_22_2c_22_69_74_65_6d_41_6d_6f_75_6e_74_22_3a_31_2c_22_69_74_65_6d_4c_6f_72_65_22_3a_5b_22_79_65_73_22_5d_2c_22_69_74_65_6d_4e_61_6d_65_22_3a_22_6d_65_6f_77_20_3a_33_22_2c_22_73_6f_75_6e_64_22_3a_30_7d_5d;ENABLED,4d_45_4f_57|4e_59_41,54_45_53_54|54_45_53_54_49_4e_47|54_45_53_54_45_44;ENABLED,4d_45_4f_57|4e_59_41,54_45_53_54|54_45_53_54_49_4e_47|54_45_53_54_45_44;63_68_61_74_72_61_6e_6b_66_6f_72_6d_61_74|68_69
```