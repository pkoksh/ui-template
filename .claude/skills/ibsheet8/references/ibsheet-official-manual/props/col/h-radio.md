---
KEY: hRadio
KIND: column-property
PATH: props/col/h-radio
ALIAS: 혹은, 열들, 대해서, 단일, 선택
ALIAS_EN: radio, select, selection
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/h-radio
---
# HRadio ***(col)***
> `Type`이 `Radio` 열(혹은 열들)에 대해서 단일 선택 여부를 설정합니다.

> `0(false)`으로 설정시 해당 컬럼 내에서 단일 셀만 선택 가능하게 합니다.

> `1(true)`으로 설정시 해당 행 내에서 단일 셀만 선택 가능하게 합니다.
### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|한 열안에서 하나만 선택|
|`1(true)`|한 행안에서 하나만 선택|



### Example
```javascript
//st1 컬럼 내에서 단일 셀만 선택가능하게 함.
//st2, st3 열 중에 한개 셀만 선택 가능
options.Cols = [
    ...
    {Type: "Radio", Name: "st1", HRadio: 0 ...},
    {Type: "Radio", Name: "st2", HRadio: 1 ...},
    {Type: "Radio", Name: "st3", HRadio: 1 ...},
    ...
];
```

### Read More
- [Radio col](./radio)
- [Range col](./range)
- [RadioIcon col](./radio-icon)
- [RadioIconWidth col](./radio-icon-width)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
