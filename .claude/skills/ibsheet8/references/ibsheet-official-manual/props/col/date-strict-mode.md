---
KEY: dateStrictMode
KIND: column-property
PATH: props/col/date-strict-mode
ALIAS: 조회시, 날짜, 타입의, 열에서, 설정된
ALIAS_EN: date, strict, mode, datetime
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/date-strict-mode
---
# DateStrictMode ***(col)***

> 조회시 날짜 타입의 열에서 `DataFormat`이 설정된 경우 설정된 포맷과 길이가 일치하지 않거나 잘못된 날짜가 조회되는 경우 공백으로 처리합니다.

> `DataFormat`을 "yyyyMMdd" 로 설정한 후 "88" 이라는 값이 조회되는 경우 해당 셀 값은 공백으로 처리됩니다.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|정밀검사하지 않음 (`default`)|
|`1(true)`|`DataFormat`에 설정된 포맷에 대한 정밀 검사|


### Example
```javascript
//특정 열에서 잘못된 날짜 데이터 조회시 공백처리 합니다.
options.Cols = [
    ...
    {Type: "Date", DateStrictMode: 1 Format: "yyyy.MM.dd", DataFormat: "yyyyMMdd", Name: "enterDate", Width: 120 ...},
    ...
];
```

### Read More
- [DataFormat col](/docs/props/col/data-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.12|기능 추가|
