---
KEY: getByDataFormat
KIND: config-property
PATH: props/cfg/get-by-data-format
ALIAS: 메소드, 실행, 셀의, 타입이, 경우
ALIAS_EN: get, by, data, format
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/get-by-data-format
---
# GetByDataFormat ***(cfg)***
> [getValue](/docs/funcs/core/get-value) 메소드 실행 시 셀의 타입이 `Date`인 경우 셀에 설정된 `DataFormat` 형식에 맞게 값을 반환합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|해당 셀의 값을 반환합니다.(`Date` 타입의 경우 타임스탬프 형식)|
|`1(true)`|`DataFormat`의 형식에 맞게 값을 반환합니다. (`default`)|

### Example
```javascript
// 모든 Date 타입 열에 대해서 getValue시 DateFormat에 맞는 값을 반환합니다.
options.Cfg = {
    GetByDataFormat: true
};
```

### Read More
- [getValue method](/docs/funcs/core/get-value)
- [setValue method](/docs/funcs/core/set-value)
- [DataFormat col](/docs/props/col/data-format)
- [DataFormat cell](/docs/props/cell/data-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.1|기능 추가|
