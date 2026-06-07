---
KEY: rangeEnumIconLeft
KIND: config-property
PATH: props/cfg/range-enum-icon-left
ALIAS: 타입에, 속성, 사용시, 메뉴의, 체크
ALIAS_EN: range, enum, icon, left, property, attribute, check, checkbox
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/range-enum-icon-left
---
# RangeEnumIconLeft ***(cfg)***

> `Enum` 타입에 [Range](/docs/props/col/range) 속성 사용시 메뉴의 체크 박스 아이콘을 왼쪽에 위치시킬지 여부를 설정합니다

### Type
`boolean`


### Options

|Value|Description|
|-----|-----|
|`0(false)`| `Enum` 타입의 체크 박스를 오른쪽에 위치 (`default`)|
|`1(true)`| `Enum` 타입의 체크 박스를 왼쪽에 위치|


### Example
```javascript
options.Cfg = {
    RangeEnumIconLeft : true
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.8|기능 추가|
