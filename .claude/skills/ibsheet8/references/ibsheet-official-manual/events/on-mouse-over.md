---
KEY: onMouseOver
KIND: event
PATH: events/on-mouse-over
ALIAS: 마우스가, 시트, 다른, 셀에, 들어갈
ALIAS_EN: on, mouse, over, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-mouse-over
---
# onMouseOver ***(event)***
> 마우스가 시트 내 다른 셀에 들어갈 때마다 호출되는 이벤트이며, 힌트를 화면에 노출하거나 편집모드로 들어갈 때도 호출됩니다.

> 인자 `row, col, x, y`는 셀이 아닌 곳을 누를 경우 `undefined` 또는 `null`이 될 수 있습니다(ex 셀 테두리).

### Syntax

```
    onMouseOver : function(paramObject) {

    }
or
    sheet.bind("onMouseOver" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|마우스로 누른 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|마우스로 누른 셀의 열이름|
|orow|`object`|이전에 마우스가 위치했던 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|ocol|`string`|이전에 마우스가 위치했던 셀의 열이름|
|event|`object`|javascript 마우스 이벤트 객체|
<!--!
|`[비공개]` canState|`string`|마우스 이벤트가 발생한 곳의 편집, 포커스 가능 상태 정보
(`"Editable"(편집가능)`, `"ReadOnly"(편집불가능)`, `"NoFocus"(포커스불가능)`)|
|`[비공개]` cellType|`string`|마우스 이벤트가 발생한 곳의 타입 정보
(`"Text"`, `"Int"`, `"Float"` 등)|
|`[비공개]` part|`string`|마우스 이벤트가 발생한 곳의 셀영역 정보
(`"Tree"(트리아이콘 영역)`, `"Content"(셀데이터 영역)`, `"Caption"(헤더데이터(제목) 영역)`, `"Side"(셀아이콘 왼쪽 영역)`, `"Button"(셀버튼 영역)`)|
|`[비공개]` partType|`string`|마우스 이벤트가 발생한 곳의 셀영역 타입 정보
(`"Expand"(트리아이콘 확장버튼)`, `"SideClear"(삭제아이콘)`, `"SideFile"(파일선택아이콘)`, `"SideCheck"(체크박스아이콘)`, `"SideButton"(버튼아이콘)`, `"SideDate"(달력아이콘)`, `"SideSort"(정렬아이콘)`, `"SideDefaults"(Defaults아이콘)`, `"SideIcon"(아이콘)`, `"SideFilter"(필터아이콘)`, `"EditEnum"(Enum데이터)`, `"EditText"(Text테이터)`, `"EditDate"(Date데이터)`, `"EditInt"(Int데이터)` 등)|
|`[비공개]` section|`string`|마우스 이벤트가 발생한 곳의 컬럼영역 정보
(`"Left"(LeftCols 영역)`, `"Mid"(Cols 영역)`, `"Right"(RightCols 영역)`)|
|`[비공개]` kind|`string`|마우스 이벤트가 발생한 곳의 행의 종류 정보
(`"Header"`, `"Data"`, `"Foot"`, `"Solid"`, `"Group"`, `"Filter"`)|
|`[비공개]` ocanState|`string`|마우스 이벤트가 발생하기 직전에 편집, 포커스 가능 상태 정보
(`"Editable"(편집가능)`, `"ReadOnly"(편집불가능)`, `"NoFocus"(포커스불가능)`)|
|`[비공개]` ocellType|`string`|마우스 이벤트가 발생하기 직전에 타입 정보
(`"Text"`, `"Int"`, `"Float"` 등)|
|`[비공개]` opart|`string`|마우스 이벤트가 발생하기 직전에 셀영역 정보
(`"Tree"(트리아이콘 영역)`, `"Content"(셀데이터 영역)`, `"Caption"(헤더데이터(제목) 영역)`, `"Side"(셀아이콘 왼쪽 영역)`, `"Button"(셀버튼 영역)`)|
|`[비공개]` opartType|`string`|마우스 이벤트가 발생하기 직전에 셀영역 타입 정보
(`"Expand"(트리아이콘 확장버튼)`, `"SideClear"(삭제아이콘)`, `"SideFile"(파일선택아이콘)`, `"SideCheck"(체크박스아이콘)`, `"SideButton"(버튼아이콘)`, `"SideDate"(달력아이콘)`, `"SideSort"(정렬아이콘)`, `"SideDefaults"(Defaults아이콘)`, `"SideIcon"(아이콘)`, `"SideFilter"(필터아이콘)`, `"EditEnum"(Enum데이터)`, `"EditText"(Text테이터)`, `"EditDate"(Date데이터)`, `"EditInt"(Int데이터)` 등)|
|`[비공개]` osection|`string`|마우스 이벤트가 발생하기 직전에 컬럼영역 정보
(`"Left"(LeftCols 영역)`, `"Mid"(Cols 영역)`, `"Right"(RightCols 영역)`)|
|`[비공개]` okind|`string`|마우스 이벤트가 발생하기 직전에 행의 종류 정보
(`"Header"`, `"Data"`, `"Foot"`, `"Solid"`, `"Group"`, `"Filter"`)|
!-->

### Return
***none***


### Example
```javascript
options.Events = {
    onMouseOver:function(evtParam){
        if (evtParam.row && evtParam.col && evtParam.orow && evtParam.ocol) {
            console.log("이전 셀 값은 "+ sheet.getValue({row:evtParam.orow, col:evtParam.ocol}));
            console.log("현재 셀 값은 "+ sheet.getValue({row:evtParam.row, col:evtParam.col}));
        }
    }
}
```

### Read More
- [onMouseMove event](./on-mouse-move)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
<!--!
|`[비공개]` core|8.0.0.6|`canState`, `cellType`, `part`, `partType`, `section`, `kind`, `ocanState`, `ocellType`, `opart`, `opartType`, `osection`, `okind` 인자 추가|
!-->
