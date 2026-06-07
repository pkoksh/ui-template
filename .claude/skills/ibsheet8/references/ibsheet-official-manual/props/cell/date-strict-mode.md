---
KEY: dateStrictMode
KIND: cell-property
PATH: props/cell/date-strict-mode
ALIAS: 조회시, 셀에서, 설정된, 경우, 포맷과
ALIAS_EN: date, strict, mode
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/date-strict-mode
---
# DateStrictMode ***(cell)***

> 조회시 [Type](/docs/appx/type)이 `Date`인 셀에서 `DataFormat`이 설정된 경우 설정된 포맷과 길이가 일치하지 않거나 잘못된 날짜가 조회되는 경우 공백으로 처리합니다.

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
// 해당 컬럼에 DataFormat이 설정되어있다면
options.Cols = [
    ...
    // DateStrictMode를 사용하기 위해선 DataFormat이 설정되어야 합니다. 
    {Type: "Date", Format: "yyyy.MM.dd", DataFormat: "yyyyMMdd", Name: "CLS", Width: 120 ...},
    ...
];

//특정 셀에서 잘못된 날짜 데이터 조회시 공백처리 합니다.
{
    data:[
        {... ,"CLS":"12312018" "CLSDateStrictMode":"1" , ...}
    ]
}
```

### Read More
- [DataFormat col](/docs/props/col/data-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.12|기능 추가|
