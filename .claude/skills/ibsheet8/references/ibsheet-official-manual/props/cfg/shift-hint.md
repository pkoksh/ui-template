---
KEY: shiftHint
KIND: config-property
PATH: props/cfg/shift-hint
ALIAS: 크기보다, 내용이, 많을, 마우스, 호버시
ALIAS_EN: shift, hint
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/shift-hint
---
# ShiftHint ***(cfg)***

> 셀 크기보다 셀 내용이 많을 때 마우스 호버시 셀 데이터를 `Hint` 로 보여줍니다.

> 최우측 열의 셀들이 `Hint`로 나타날 때, `Hint` 위치를 왼쪽으로 이동하여 셀 데이터를 모두 표시하게 됩니다. 

> 이 때, `Hint` 위치를 왼쪽으로 이동시키지 않도록 설정 할 수 있으며, `false` 으로 설정시 `Hint` 로 보여질 데이터의 일부가 잘려서 노출되지 않을 수 있습니다.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|`Hint` 생성 기준점에서 공간이 부족하더라도 현재위치에서 표시|
|`1(true)`|`Hint` 생성 기준점에서 공간이 부족할 때 왼쪽으로 이동시켜 표시 (`default`)|


### Example
```javascript
options.Cfg = {
   ShiftHint: false,  // Hint 공간이 부족하더라도 셀 위에 표시
   ...
};
```

### Read More
- [ShowHint row](/docs/props/row/show-hint)
- [ShowHint col](/docs/props/col/show-hint)
- [ShowHint cell](/docs/props/cell/show-hint)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
