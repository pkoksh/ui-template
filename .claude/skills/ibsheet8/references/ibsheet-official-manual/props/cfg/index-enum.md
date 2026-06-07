---
KEY: indexEnum
KIND: config-property
PATH: props/cfg/index-enum
ALIAS: 일때, 선택시, 셀값으로, 사용할지, 여부를
ALIAS_EN: index, enum
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/index-enum
---
# !IndexEnum ***(cfg)***

> [Type](/docs/appx/type) 이 `Enum, Radio` 일때, 값 선택시 `index`를 셀값으로 사용할지 여부를 설정합니다. 

> `0`으로 설정시 사용자가 입력한 값으로 셀 값이 설정되고, `1`로 설정시 `인덱스(index)` 가 셀 값으로 설정됩니다. 

> `indexEnum: 1` 설정시 (cell, col)[EnumKeys](/docs/props/col/enum-keys) 에 값을 설정하지 않아도 `0 부터 인덱스`가 자동 설정되며,  

> (cell, col)[EnumKeys](/docs/props/col/enum-keys) 설정시 해당 설정은 무시됩니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|`Value` 그대로 셀값을 설정 (`default`)|
|`1(true)`|`인덱스(index)` 로 셀값을 설정|


### Example
```javascript
options.Cfg = {
    IndexEnum: true,       // Enum, Radio 값을 index 값으로 사용
    ...
};
```

### Read More
- [EnumKeys col](/docs/props/col/enum-keys)
- [EnumKeys cell](/docs/props/cell/enum-keys)
- [Type appendix](/docs/appx/type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
