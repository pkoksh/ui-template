---
KEY: levelMark
KIND: config-property
PATH: props/cfg/level-mark
ALIAS: 트리구조에서, 사용하여, 엑셀, 다운, 나타내고
ALIAS_EN: level, mark, excel, xlsx
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/level-mark
---
# LevelMark ***(cfg)***

> 트리구조에서 [exportData](/docs/funcs/core/export-data), [down2Excel](/docs/funcs/excel/down-to-excel)를 사용하여 엑셀 다운 시 나타내고 싶은 트리구분자를 지정할 수 있다. 

> 기본적으로 트리구조를 엑셀, 텍스트 다운시 트리 구분자를 지원해주고 있다. 

> 트리구분자를 사용하고 싶지 않으면 `LevelMark: ""` 로 지정하면 트리구조에서 구분자를 사용하지 않을 수 있다.

### Type
`string`

### Example
```javascript
options.Cfg = {
    LevelMark: "#" // 트리구분자 변경.
};
options.Cfg = {
    LevelMark: "" // 트리구분자를 사용하지 않음.
};
```

### Read More
- [exportData method](/docs/funcs/core/export-data)
- [down2Excel method](/docs/funcs/excel/down-to-excel)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|기능 추가|
|excel, servermodule|1.1.11, 1.1.35|down2Excel 적용|
