---
KEY: setAutoMerge
KIND: method
PATH: funcs/core/set-auto-merge
ALIAS: sheet.setAutoMerge, setAutoMerge(), 값이, 같은, 셀들을, 주어진, 기준에
ALIAS_EN: set, auto, merge
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-auto-merge
---
# setAutoMerge ***(method)***

> 값이 같은 셀들을 주어진 기준에 따라 하나의 셀로 병합합니다.

> `SEQ` 열에 대해서는 병합을 실행하지 않습니다.

> 서로 다른 섹션으로 나누어진 열들은 서로 병합되지 않습니다.

> 병합된 셀 값을 변경하는 경우 병합된 셀 영역의 첫 번째 행, 첫 번째 열에 위치한 셀 값만 변경됩니다.

> 병합된 셀 전체의 값을 변경하시려면 [MergeCellsMatch](/docs/props/cfg/merge-cells-match) 속성을 사용해야합니다.

> `dataMerge, headerMerge, headMerge, footMerge` 인자에 대한 설명은 [DataMerge](/docs/props/cfg/data-merge), `prevColumnMerge` 인자에 대한 설명은 [PrevColumnMerge](/docs/props/cfg/prev-column-merge)를 참고하십시오.


### Syntax
```javascript
void setAutoMerge( dataMerge, headerMerge, prevColumnMerge, fixPrevColumnMerge, headMerge, footMerge, headPrevColumnMerge, footPrevColumnMerge );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|dataMerge|`number`|선택|데이터 영역의 셀들을 병합할 때 적용할 기준
`0`:병합 안함 (`default`)
`1`:열 기준 병합
`2`:행 기준 병합
`3`:열 우선 병합
`4`:행 우선 병합
`5`:열 우선 사방 병합
`6`:행 우선 사방 병합|
|headerMerge|`number`|선택|헤더 영역의 셀들을 병합할 때 적용할 기준
`0`:병합 안함 (`default`)
`1`:열 기준 병합
`2`:행 기준 병합
`3`:열 우선 병합
`4`:행 우선 병합
`5`:열 우선 사방 병합
`6`:행 우선 사방 병합|
|prevColumnMerge|`number`|선택|앞 열 기준으로 셀 병합할 지 여부
`0`:전체영역에 앞컬럼 머지기능을 사용안함 (`default`)
`1`:데이터 영역에만 앞컬럼머지기능을 사용
`2`:헤더영역에서만 앞컬럼머지기능을 사용
`3`:데이터 및 헤더 영역에서 앞컬럼머지 기능 사용
|
|fixPrevColumnMerge|`string`|선택|병합의 기준이 될 열의 `Name` (`default: 0`)|
|headMerge|`number`|선택|`Head` 영역의 셀들을 병합할 때 적용할 기준
`0`:병합 안함 (`default`)
`1`:열 기준 병합
`2`:행 기준 병합
`3`:열 우선 병합
`4`:행 우선 병합
`5`:열 우선 사방 병합
`6`:행 우선 사방 병합|
|footMerge|`number`|선택|`Foot` 영역의 셀들을 병합할 때 적용할 기준
`0`:병합 안함 (`default`)
`1`:열 기준 병합
`2`:행 기준 병합
`3`:열 우선 병합
`4`:행 우선 병합
`5`:열 우선 사방 병합
`6`:행 우선 사방 병합|
|headPrevColumnMerge|`boolean`|선택| `Head`의 고정행 영역에서 앞 열 기준으로 셀 병합할 지 여부
`0(false)`:`Head`의 고정행 영역에서 앞 열 기준으로 셀 병합 사용 안함 (`default`)
`1(true)`:`Head`의 고정행 영역에서 앞 열 기준으로 셀 병합 사용|
|footPrevColumnMerge|`boolean`|선택| `Foot`의 고정행 영역에서 앞 열 기준으로 셀 병합할 지 여부
`0(false)`:`Foot`의 고정행 영역에서 앞 열 기준으로 셀 병합 사용 안함 (`default`)
`1(true)`:`Foot`의 고정행 영역에서 앞 열 기준으로 셀 병합 사용|

### Return Value
***none***

### Example
```javascript
// 데이터 영역에는 열 기준 병합을, 헤더 영역에는 행 기준 병합을 실행합니다.
sheet.setAutoMerge( {dataMerge:1, headerMerge:2, prevColumnMerge:0, fixPrevColumnMerge: 'sPolicy'} );
```

### Try it

- [Demo of setAutoMerge](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Merge/)

### Read More
- [DataMerge cfg](/docs/props/cfg/data-merge)
- [HeaderMerge cfg](/docs/props/cfg/header-merge)
- [PrevColumnMerge cfg](/docs/props/cfg/prev-column-merge)
- [FixPrevColumnMerge cfg](/docs/props/cfg/fix-prev-column-merge)
- [setAutoMergeCancel method](./set-auto-merge-cancel)
- [MergeCellsMatch](/docs/props/cfg/merge-cells-match)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.15|`fixPrevColumnMerge`추가|
|core|8.2.0.14|`headMerge`, `footMerge`, `headPrevColumnMerge`, `footPrevColumnMerge` 추가|