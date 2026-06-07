---
KEY: onAfterClick
KIND: event
PATH: events/on-after-click
ALIAS: 마우스로, 내부를, 클릭했을, 마지막에, 호출되는
ALIAS_EN: on, after, click
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-click
---
# onAfterClick ***(event)***
> 마우스로 셀 내부를 클릭했을 때 맨 마지막에 호출되는 이벤트입니다.

> 특정 셀을 클릭 시 포커스에 대한 이동 및 값 변경(`Bool 타입`)이나 편집 시작(`Text 타입`) 등에 대한 이벤트가 모두 발생한 뒤에 발생합니다. 

> `ibsheet7` 제품의 [OnClick 이벤트를 마이그레이션](/docs/appx/ibsheet7-migration) 할 때는 해당 이벤트를 사용하실 것을 권합니다.

### Syntax

```
    onAfterClick : function(paramObject) {

    }
or
    sheet.bind("onAfterClick" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|마우스 클릭 이벤트가 발생된 시트 객체|
|row|`object`|클릭된 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|클릭된 셀의 열이름|
|x|`number`|셀 내에서 마우스 클릭이 발생한 `x좌표`|
|y|`number`|셀 내에서 마우스 클릭이 발생한 `y좌표`|
|event|`object`|`javascript` 마우스 이벤트 객체|
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
***none***

### Example
```javascript
options.Events = {
    onAfterClick:function(evtParam){
        if(evtParam.row["CloseQ"] == 1 && evtParam.col == "ConfirmYN" && evtParam.row[col] == 1){
            if(confirm("해당 건에 대해 상신하시겠습니까?")){
                window.open("processBuild.do?swid="+evtParam.row["SWID"],"width=200,height=100");
            }
        }
    }
}
```

### Read More
- [onClick event](./on-click)
- [onRightClick event](./on-right-click)
- [onDblClick event](./on-dbl-click)
- [onLongClick event](./on-long-click)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
<!--!
|`[비공개]` core|8.0.0.6|`canState`, `cellType`, `part`, `partType`, `section`, `kind` 인자 추가|
!-->
