---
KEY: multiRecord
KIND: config-property
PATH: props/cfg/multi-record
ALIAS: 시트에서, 하나의, 데이터를, 여러, 줄로
ALIAS_EN: multi, record
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/multi-record
---
# MultiRecord ***(cfg)***

> 시트에서 하나의 데이터를 여러 줄로 표시하는 기능입니다.

> 일반적인 시트는 헤더가 여러 개이더라도 데이터는 조회된 데이터(레코드)마다 하나의 행으로 표현되는데 이를 여러 행으로 표시되도록 하는 기능입니다.

> 따라서, 기능 제약이 있고 그 기능 제약은 다음과 같습니다. (이외의 기능은 기본 시트의 동작과 동일합니다.)

> * `소계 사용 불가`
> * `그룹 사용 불가`
> * `트리 사용 불가`
> * `자동 병합 기능 사용 불가(생성할 때 RecordRowSpan 및 RecordColSpan으로만 병합기능 사용가능)`
> * `동적으로 영역 병합 기능 사용 불가(생성할 때 RecordRowSpan 및 RecordColSpan으로만 병합기능 사용가능)`
> * `열이동 불가`
> * `생성할 때 Visible 속성 사용시 주의(생성할 때 가장 마지막 열에 생성하도록 권장)`
> * `hideCol/showCol 불가(동적으로 컬럼 보임 여부 컨트롤 불가)`
> * `동적으로 열 추가/삭제 불가(시트 생성할 때 정의된 Cols만 사용가능)`
> * `셀/열 단위 선택 불가(행 단위 선택만 가능)`
> * `셀/열 단위 복사/붙여넣기 불가(행 단위 복사/붙여넣기 가능)`
> * `SelectionSummary 기능 사용 불가`
> * `엑셀 다운로드/업로드 및 행 복사/붙여넣기는 모든 열이 일렬로 처리됨(모양이 유지되진 않음)`
> * `doPrint 프린트 시 모든 열이 일렬로 처리됨(모양이 유지되진 않음)`
> * `down2Pdf 다운로드 모든 열이 일렬로 처리됨(모양이 유지되진 않음)`
> * `여러 헤더행 중에 최상단 행의 너비 기준으로 Width가 적용됨, 최상단 행을 제외한 Width 속성은 동작하지 않음`
> * `RecordColSpan이 설정된 더미컬럼은 RelWidth 기능이 동작하지 않으며 동적으로 Width가 변하지 않음`
> * `Def.Header.SortIcons: 1(모든 정렬 아이콘 표시기능)은 사용 불가`
> * `LeftCols/RightCols 와 Type:"Lines"는 함께 사용 불가`
> * `필터 다이얼로그((Cfg)) UseFilterDialog) 사용 불가`
> * `컬럼페이징((Cfg) ColPage) 사용 불가`

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|멀티레코드 기능 비활성화 (`default`)|
|`1(true)`|멀티레코드 기능 활성화|

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
       {Header: "A", Name: "colA", Type:"Text", Width: 100},
       {Header: "B", Name: "colB", Type:"Image", Width: 100, RecordRowSpan: 3},
       {Header: "C", Name: "colC", Type:"Int", Width: 100},
       {Header: "D", Name: "colD", Type:"Float", Width: 100}
    ],
    //두번째 단위데이터행(DataRow)
    [
       {Header: "E", Name: "colE", Type:"Text", Width: 100},
       {Header: "B"},
       {Header: "F", Name: "colF", Type:"Enum", Width: 100},
       {Header: "G", Name: "colG", Type:"Date", Width: 100}
    ],
    //세번째 단위데이터행(DataRow)
    [
       {Header: "H", Name: "colH", Type:"Text", Width: 100},
       {Header: "B"},
       {Header: "I", Name: "colI", Type:"Text", Width: 100, RecordColSpan: 2},
       {Header: "I", Width: 120} // 더미컬럼
    ]
];

// 멀티레코드 사용시 데이터(기존과 같음)
data = [
   {colA: "data1_A", colB: "data1_B", colC: 0, colD: 0.0, colE: "data1_E", colF: "code1" ,colG: "20191017", colH: "data1_H", colI: "data1_I"},
   {colA: "data2_A", colB: "data2_B", colC: 1, colD: 1.0, colE: "data2_E", colF: "code2" ,colG: "20191101", colH: "data2_H", colI: "data2_I"},
];
```

### Read More
- [RecordRowSpan col](/docs/props/col/record-row-span)
- [RecordColSpan col](/docs/props/col/record-col-span)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.4|엑셀 업로드/다운로드 다이얼로그 대응|
