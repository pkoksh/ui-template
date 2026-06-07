---
KEY: recordColSpan
KIND: column-property
PATH: props/col/record-col-span
ALIAS: 멀티레코드, 기능을, 사용하는, 시트에서, 특정
ALIAS_EN: record, col, span
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/record-col-span
---
# RecordColSpan ***(col)***
> 멀티레코드([MultiRecord](/docs/props/cfg/multi-record)) 기능을 사용하는 시트에서 특정 컬럼을 기준으로 오른쪽으로 합쳐질 열의 개수를 설정합니다.

> `row`에 [Spanned](/docs/props/row/spanned): `1` 이 설정되어 있어야 사용할 수 있습니다. 

> Html Table객체에 `ColSpan`과 유사합니다.


> **<mark>주의</mark> : `RecordColSpan` 설정으로 인해 머지되어 보이지 않는 컬럼은 `Name`설정을 하게 될 경우 정상동작 되지 않습니다.**


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|행 내에서 오른쪽으로 합쳐질 열 개수|



### Example
```javascript
options.Cfg = {
    MultiRecord: true  // 멀티레코드 전용 시트로 설정
    ...
};

// 멀티레코드 기능 사용시 열설정(1차원 배열 -> 2차원 배열)
options.Cols = [
    //첫번째 단위데이터행(DataRow)
    [
        {Header: "A", Name: "colA", Type: "Text", Width: 100},
        {Header: "B", Name: "colB", Type: "Image", Width: 100},
        {Header: "C", Name: "colC", Type: "Int", Width: 100},
        {Header: "D", Name: "colD", Type: "Float", Width: 100}
    ],
    //두번째 단위데이터행(DataRow)
    [
        {Header: "E", Name: "colE", Type: "Text", Width: 100},
        {Header: "F", Name: "colF", Type: "Text", Width: 100},
        {Header: "G", Name: "colG", Type: "Enum", Width: 100},
        {Header: "H", Name: "colH", Type: "Date", Width: 100}
    ],
    //세번째 단위데이터행(DataRow)
    [
        {Header: "I", Name: "colI", Type: "Text", Width: 100},
        {Header: "J", Name: "colJ", Type: "Text", Width: 100, RecordColSpan: 3},
        {Header: "J", Width: 50},
        {Header: "J", Width: 120}
    ]
];
```

### Read More
- [RowSpan cell](./row-span)
- [Spanned row](/docs/props/row/spanned)
- [RecordRowSpan col](/docs/props/col/record-row-span)
- [MultiRecord cfg](/docs/props/cfg/multi-record)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
