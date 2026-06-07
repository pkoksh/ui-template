---
KEY: recordRowSpan
KIND: column-property
PATH: props/col/record-row-span
ALIAS: 멀티레코드, 기능을, 사용하는, 시트에서, 특정
ALIAS_EN: record, row, span
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/record-row-span
---
# RecordRowSpan ***(col)***
> 멀티레코드([MultiRecord](/docs/props/cfg/multi-record)) 기능을 사용하는 시트에서  특정 행을 기준으로 아래쪽으로 합쳐질 행의 개수를 설정합니다.

> col에 [Spanned](/docs/props/col/spanned):`1` 이 설정되어 있어야 사용할 수 있습니다. 

> Html Table객체에 `RowSpan`과 유사합니다. 


> **<mark>주의</mark> : `RecordRowSpan` 설정으로 인해 머지되어 보이지 않는 컬럼은 `Name`설정을 하게 될 경우 정상동작 되지 않습니다.**



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|열 내에서 아래로 병합할 행의 개수|



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
        {Header: "B", Name: "colB", Type: "Image", Width: 100, RecordRowSpan: 3},
        {Header: "C", Name: "colC", Type: "Int", Width: 100},
        {Header: "D", Name: "colD", Type: "Float", Width: 100}
    ],
    //두번째 단위데이터행(DataRow)
    [
        {Header: "E", Name: "colE", Type: "Text", Width: 100},
        {Header: "B"},
        {Header: "F", Name: "colF", Type: "Enum", Width: 100},
        {Header: "G", Name: "colG", Type: "Date", Width: 100}
    ],
    //세번째 단위데이터행(DataRow)
    [
        {Header: "H", Name: "colH", Type: "Text", Width: 100},
        {Header: "B"},
        {Header: "I", Name: "colI", Type: "Text", Width: 100},
        {Header: "J", Name: "colJ", Type: "Text", Width: 100},
    ]
];
```

### Read More
- [Span cell](/docs/props/cell/span)
- [Spanned col](/docs/props/col/spanned)
- [RecordColSpan col](/docs/props/col/record-col-span)
- [MultiRecord cfg](/docs/props/cfg/multi-record)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
