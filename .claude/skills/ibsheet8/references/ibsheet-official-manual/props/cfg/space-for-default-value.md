---
KEY: spaceForDefaultValue
KIND: config-property
PATH: props/cfg/space-for-default-value
ALIAS: 빈문자, 데이터도, 표시되도록, 설정합니다
ALIAS_EN: space, for, default, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/space-for-default-value
---
# SpaceForDefaultValue ***(cfg)***

> 빈문자("")인 데이터도 [DefaultValue](/docs/props/col/default-value)로 표시되도록 설정합니다. 

> 해당 속성이 `false`인 경우 [DefaultValue](/docs/props/col/default-value)는 셀에 값이 없는 경우(null, undefined,데이터 없음) 에만 적용됩니다.
### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|`null`, `undefined`, `데이터 없음`인 데이터만 [DefaultValue](/docs/props/col/default-value)로 설정한 값으로 출력 (`default`)|
|`1(true)`|빈문자("")인 데이터도 [DefaultValue](/docs/props/col/default-value)로 설정한 값으로 출력|

### Example
```javascript
options.Cfg = {
    SpaceForDefaultValue: true,         // 공백("")인 데이터도 "확인"으로 표시
};
options.Cols = [
    {Header: "상세정보", Type: "Button", Name: "DetailBnt", Button: "Button", DefalutValue: "확인"},
    ...
];
```

### Read More
- [DefaultValue col](/docs/props/col/default-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.8|기능 추가|
