---
KEY: menuButtons
KIND: config-property
PATH: props/cfg/menu-buttons
ALIAS: 기존의, 아무설정, 없이, 타입의, 포함
ALIAS_EN: menu, buttons
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/menu-buttons
---
# MenuButtons ***(cfg)***

> 기존의 아무설정 없이 [Enum](/docs/props/col/enum) 타입의 셀([Defaults](/docs/props/col/defaults) 포함)에서 `Menu.Buttons`의 순서는 `Clear, Ok` 순서로만 만들어지고 있다. 

> [Enum](/docs/props/col/enum) 타입의 셀([Defaults](/docs/props/col/defaults) 포함)에서 [Menu](/docs/appx/menu) 하단의 `Buttons`의 순서를 변경할 수 있다. 

> `Type`은 배열형태로 지원한다.

### Type
`array`

### Example
```javascript
options.Cfg = {
    MenuButtons: ["Ok", "Clear"],              // 버튼의 순서를 Ok, Clear 순으로 변경한다.
    ...
};
options.Col = [
    {
        Header: '콤보(Enum)',
        Type: 'Enum',
        Name: 'ComboData',
        Width: 100,
        Align: 'Right',
        Enum: '|대기|진행중|완료',
        EnumKeys: '|01|02|03',
        Range: true,
     }
]
```

### Read More
- [Defaults col](/docs/props/col/defaults)
- [Enum col](/docs/props/col/enum)
- [Range col](/docs/props/col/range)
- [Menu appendix](/docs/appx/menu)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
