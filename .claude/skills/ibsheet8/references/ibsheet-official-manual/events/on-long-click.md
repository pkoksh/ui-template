---
KEY: onLongClick
KIND: event
PATH: events/on-long-click
ALIAS: 사용자가, 셀을, 마우스로, 설정된, 시간보다
ALIAS_EN: on, long, click
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-long-click
---
# onLongClick ***(event)***
> 사용자가 셀을 마우스로 [LongClick](/docs/props/cfg/long-click)에 설정된 시간보다 더 길게 클릭했을 때 호출되는 이벤트입니다.

> `1(true)`를 리턴 시 클릭에 의한 기본 동작을 막습니다.

### Syntax

```
    onLongClick : function(paramObject) {

    }
or
    sheet.bind("onLongClick" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|마우스 클릭 이벤트가 발생된 시트 객체|
|row|`object`|클릭된 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|클릭된 셀의 열이름|
|x|`number`|셀 내에서 마우스 클릭이 발생한 x좌표|
|y|`number`|셀 내에서 마우스 클릭이 발생한 y좌표|
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
!-->

### Return
***boolean***

### Example
```javascript
options.Events = {
    onLongClick:function(evtParam){
        // 길게 클릭시 현재 시트에서 클릭된 셀의 값을 sheet2에 있는 첫 번째 행의 sFrom열에 복사합니다.
        if (evtParam.col == "sCountry") {
            sheet2.setValue({row:sheet2.getRowByIndex(1), col:"sFrom", val:sheet.getValue({row:params.row, col:params.col}), render:1});
        }
    }
}
```

### Read More
- [onClick event](./on-click)
- [onRightLongClick event](./on-right-long-click)
- [LongClick cfg](/docs/props/cfg/long-click)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
<!--!
|`[비공개]` core|8.0.0.6|`canState`, `cellType`, `part`, `partType`, `section`, `kind` 인자 추가|
!-->
