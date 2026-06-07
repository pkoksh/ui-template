---
KEY: noFormatEscape
KIND: config-property
PATH: props/cfg/no-format-escape
ALIAS: 태그로, 사용되는, 문자를, 그대로, 출력할지
ALIAS_EN: no, format, escape
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/no-format-escape
---
# NoFormatEscape ***(cfg)***

> 열 ([Col](/docs/props/col/format), [Cell](/docs/props/cell/format)) [Format](/docs/appx/format) 에 Html 태그로 사용되는 &, < 문자를 그대로 출력할지 여부를 설정합니다. 

> 해당 속성을 설정하지 않는 경우 text 열은 `0(false)`를, lines / number / date 타입은 `1(true)`를 기본값으로 가지게 됩니다.  

> `0(false)`를 설정시 &, < 문자는 그대로 출력되고, `1(true)`를 설정시 열 `(Col, Cell) Format` 에 HTML 태그를 넣어 사용할 수 있습니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|**&, <** 문자가 그대로 출력 (`default: text 열`)|
|`1(true)`|`HTML 태그`를 사용 (`default: lines, number, date 열`)|


### Example
```javascript
options.Cfg = {
    NoFormatEscape: true,        // (cell, col)Format 에 html 태그를 넣어 사용
    ...
};
```

### Read More
- [Format appendix](/docs/appx/format)
- [Format col](/docs/props/col/format)
- [Format cell](/docs/props/cell/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
