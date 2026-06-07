---
KEY: recordHColSpan
KIND: column-property
PATH: props/col/record-h-col-span
ALIAS: 멀티레코드, 기능을, 사용하는, 시트에서, 이상
ALIAS_EN: record, col, span
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/record-h-col-span
---
# RecordHColSpan ***(col)***
> 멀티레코드([MultiRecord](/docs/props/cfg/multi-record)) 기능을 사용하는 시트에서 [RecordRowSpan](/docs/props/col/record-row-span)이 2이상 설정되어있고 [RecordColSpan](/docs/props/col/record-col-span)이 설정되어있지 않을때 헤더의 특정 열을 기준으로 오른쪽으로 합쳐질 열의 개수를 설정합니다.

> 이 때, 하나의 헤더를 나누어 사용하기 때문에 데이터는 하나의 셀로 표시됩니다. (즉, 헤더만 나눠서 보이도록 하는 기능)

> `row`에 [Spanned](/docs/props/row/spanned):`1` 이 설정되어 있어야 사용할 수 있습니다. 

> Html Table객체에 `ColSpan`과 유사합니다.


> **<mark>주의</mark> : 시트 전체 초기 설정에서 `Header.RecordRowSpan`,  `Header.RecordColSpan` 등을 이용한 멀티레코드 헤더 머지 기능과 해당 기능은 절대 같이 사용할 수 없습니다.**

> **<mark>주의</mark> : 해당 속성을 사용할 경우, 해당 컬럼 정보에 `Name`이 선언되어 있거나, 동일한 위치의 상단 단위데이터 정보의 컬럼 정보에 `Name`이 반드시 선언되어 있어야 합니다.**



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|헤더 행 내에서 오른쪽으로 합쳐질 열 개수|



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
- [RowSpan cell](/docs/props/cell/row-span)
- [Spanned row](/docs/props/row/spanned)
- [RecordRowSpan col](/docs/props/col/record-row-span)
- [RecordColSpan col](/docs/props/col/record-col-span)
- [RecordHColTitle col](/docs/props/col/record-h-col-title)
- [MultiRecord cfg](/docs/props/cfg/multi-record)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
