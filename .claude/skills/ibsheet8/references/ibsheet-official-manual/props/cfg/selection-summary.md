---
KEY: selectionSummary
KIND: config-property
PATH: props/cfg/selection-summary
ALIAS: 드레그, 혹은, 키보드, 선택한, 영역의
ALIAS_EN: selection, summary
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/selection-summary
---
# SelectionSummary ***(cfg)***
> 드레그(혹은 키보드)를 통해 선택한 영역의 셀 개수 및 합계/평균 값을 보여주는 기준을 설정합니다.

> 합계 정보가 표시될 위치는 [InfoRowConfig](/docs/props/cfg/info-row-config) 속성에 `Layout:["SummaryLabel"]`를 설정하셔야 합니다.


> **<mark>주의</mark> : 해당 기능은 MultiRecord 구조 시트에서는 사용할 수 없습니다.**

> `EmptyCell`을 설정하지 않으면 해당 셀에 **값이 없는 경우** 선택 셀의 개수나 평균 계산에서 무시됩니다.

> 단 주의하실 점은 여기서 **값이 없다**는 의미는 조회시 해당 셀에 대한 데이터가 없는 것을 의미, 조회된 데이터를 지우거나 0을 입력시에는 모두 계산에 포함됩니다.

### Type
`object`

### Options
|Value|Type|Description|
|----------|-----|---|
|`Mode`|`string`|빈 셀을 계산에 포함할지 여부(`EmptyCell`), 삭제행을 계산에 포함할지 여부(`DelRow`), 인접하지 않은 모든 선택 영역을 계산할지 여부(`AllRange`)를 구분자 "\|"로 연결하여 설정 
(ex: "Mode":"EmptyCell\|DelRow\|AllRange") 기본값은 `""`(다 포함하지 않음)|
|`Align`|`string`|합계 정보 정렬 (`Left, Center, Right` 중에 하나 설정, 기본값 `Left`)|
|`Width`|`number`|합계 정보 영역의 크기 (pixcel단위 숫자, 기본값 `350`)|
|`SumFormat`|`string`|합계 값 표현 포맷 설정 (`default: "#,##0.00"`)|
|`AvgFormat`|`string`|평균 값 표현 포맷 설정 (`default: "#,##0.00"`)|

![selectionSummary](/assets/imgs/selectionSummary.png "selectionSummary")
<!-- IMAGE: 스크린샷/예시 이미지 - selectionSummary -->

### Example
```javascript
options.Cfg = {
    InfoRowConfig: { //합계나 건수정보 Row 표시
        "Visible": true,
        "Layout": ["Count", "SummaryLabel"], 
    },
    SelectionSummary:{
        "Mode": "DelRow",
        "Width": 500,
        "SumFormat": "#,##0",
        "AvgFormat": "#,##0.##"
    }
};
```

### Read More
- [InfoRowConfig cfg](/docs/props/cfg/info-row-config)
- [setInfoRow method](/docs/funcs/core/set-info-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.13|Mode `AllRange` 기능 추가|
|core|8.0.0.26|`SumFormat`, `AvgFormat` 기능 추가|
