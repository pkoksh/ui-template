---
KEY: recordHColTitle
KIND: column-property
PATH: props/col/record-h-col-title
ALIAS: 멀티레코드, 기능을, 사용하는, 시트에서, 설정
ALIAS_EN: record, col, title, config, setting, option
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/record-h-col-title
---
# RecordHColTitle ***(col)***
> 멀티레코드([MultiRecord](/docs/props/cfg/multi-record)) 기능을 사용하는 시트에서 [RecordHColSpan](/docs/props/col/record-h-col-span)이 설정 되어 있는 헤더의 열의 제목을 설정합니다.

> **데이터와 상관없이 동작하며 서버로 전송되지 않습니다.**



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|[RecordHColSpan](/docs/props/col/record-h-col-span)이 설정 되어 있는 헤더의 열의 제목|



### Example
```javascript
options.Cfg = {
   MultiRecord: true  // 멀티레코드 전용 시트로 설정
   ...
};

// 멀티레코드 기능 사용시 열설정(1차원 배열 -> 2차원 배열)
Cols: [
   //첫번째 단위데이터행(DataRow)
   [
      { "Header": "본사", Name: "HeadOffice", "Width": 60, RecordRowSpan: 3, RecordHColSpan: 5, RecordHColTitle: "기관" },
      { "Header": "연구소", Name: "Laboratory", "Width": 60, RecordRowSpan: 3 },
      { "Header": "지사1", Name: "BranchOffice1", "Width": 60, RecordRowSpan: 3 },
      { "Header": "지사2", Name: "BranchOffice2", "Width": 60, RecordRowSpan: 3 },
      { "Header": "기타", Name: "sEtc", "Width": 60, RecordRowSpan: 3 }
   ],

   //두번째 단위데이터행(DataRow)
   [
      { "Header": "본사", RecordHColSpan: 2, RecordHColTitle: "계열1" },
      { "Header": "연구소" },
      { "Header": "지사1", RecordHColSpan: 2, RecordHColTitle: "계열2" },
      { "Header": "지사2" },
      { "Header": "기타" }
   ],

   //세번째 단위데이터행(DataRow)
   [
      { "Header": "본사" },
      { "Header": "연구소" },
      { "Header": "지사1" },
      { "Header": "지사2" },
      { "Header": "기타" }
   ]
];
```

### Read More
- [RowSpan cell](./row-span)
- [Spanned row](/docs/props/row/spanned)
- [RecordRowSpan col](/docs/props/col/record-row-span)
- [RecordColSpan col](/docs/props/col/record-col-span)
- [RecordHColSpan col](/docs/props/col/record-h-col-span)
- [MultiRecord cfg](/docs/props/cfg/multi-record)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
