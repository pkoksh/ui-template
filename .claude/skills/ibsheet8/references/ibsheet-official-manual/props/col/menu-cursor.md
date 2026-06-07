---
KEY: menuCursor
KIND: column-property
PATH: props/col/menu-cursor
ALIAS: 값과, 값이, 일치하는, 경우, 해당
ALIAS_EN: menu, cursor
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/menu-cursor
---
# !MenuCursor ***(col)***

> [Menu](./menu) Value 값과 셀 값이 일치하는 경우 해당 메뉴에 포커스를 위치 시킬 지에 대한 여부를 설정합니다

### Type
mixed(`object`|`string`)

### Options
|Value|Description|
|-----|-----|
|`0(false)`|메뉴에 포커스가 되지 않음 (`default`)|
|`1(true)`|셀 값과 일치하는 Menu의 Value 또는 Name이 있는 경우 포커스 위치|
|`string`|설정한 값과 일치하는 Menu의 Value 또는 Name이 있는 경우 포커스 위치|


### Example
```javascript
//메뉴 동작시 포커스 커서 위치 시키기 설정
options.Cols = [
    ...
    {Type: "Text", Name: "sa_nm", MenuCursor: 1, TextStyle: 4},
    ...
];
```

### Read More
- [Menu col](./menu)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.16|기능 추가|
