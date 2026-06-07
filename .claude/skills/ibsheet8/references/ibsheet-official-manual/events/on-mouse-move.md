---
KEY: onMouseMove
KIND: event
PATH: events/on-mouse-move
ALIAS: 시트에서, 마우스를, 움직일, 호출되는, 이벤트입니다
ALIAS_EN: on, mouse, move
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-mouse-move
---
# onMouseMove ***(event)***
> 시트에서 마우스를 움직일 때 호출되는 이벤트입니다.

> `1(true)`를 리턴 시 `onMouseMove`의 기본 동작을 막습니다.

> 시트 위에서 마우스를 움직일 시 계속 발생하므로 이 이벤트에 많은 설정을 넣으면 **느려질 수 있습니다**.

> 인자 `row, col, x, y`는 `undefined` 또는 `null`이 될 수 있습니다(ex 셀 테두리).

### Syntax

```
    onMouseMove : function(paramObject) {

    }
or
    sheet.bind("onMouseMove" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|마우스 커서가 위치한 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|마우스 커서가 위치한 열이름|
|x|`number`|셀 내에서 마우스로 누른 위치의 x좌표|
|y|`number`|셀 내에서 마우스로 누른 위치의 y좌표|
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
    onMouseMove:function(evtParam){
        if (evtParam.row && evtParam.col) {
            console.log("현재 셀 값은 "+ sheet.getValue({row:evtParam.row, col:evtParam.col}));
        }
    }
}
```

### Read More

- [onMouseOver event](./on-mouse-over)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
<!--!
|`[비공개]` core|8.0.0.6|`canState`, `cellType`, `part`, `partType`, `section`, `kind` 인자 추가|
!-->
