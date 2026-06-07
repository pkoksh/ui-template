---
KEY: matchDataFormat
KIND: config-property
PATH: props/cfg/match-data-format
ALIAS: 에서는, 조회, 데이터, 형식이, 일치하지
ALIAS_EN: match, data, format, search, query, fetch, load, retrieve
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/match-data-format
---
# !MatchDataFormat ***(cfg)***

> IBSheet8에서는 [Format](/docs/props/col/data-format)과 조회 데이터 형식이 일치하지 않는 경우 반드시 [DataFormat](/docs/props/col/data-format) 설정해야 합니다. 

> [DataFormat](/docs/props/col/data-format)을 설정하지 않은 경우에도 데이터의 유연한 파싱을 원하는 경우 해당 속성을 `false`로 설정해야 합니다. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`| DataFormat이 설정되지 않은 경우에도 유연한 파싱을 함 |
|`1(true)`| Format, DataFormat 형식에 따라 조회 데이터 파싱 (`default`)|


### Example
```javascript
// DataFormat이 설정되지 않은 경우에도 유연한 파싱을 함
options.Cfg = {
    MatchDataFormat: 0
};
options.Cols = [
    ...
    // DateStrictMode를 사용하기 위해선 DataFormat이 설정되어야 합니다. 
    {Type: "Date", Format: "yy-MM-dd", Name: "enterDate", Width: 120 ...},
    ...
];

// 아래와 같이 조회시 22-05-05, 22-06-06로 출력됨.
{"Data":
    [
        {"enterDate": "20220505"},
        {"enterDate": "20220606"},
    ]
}
```

### Read More
- [Format col](/docs/props/col/data-format)
- [DataFormat col](/docs/props/col/data-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.21|기능 추가|