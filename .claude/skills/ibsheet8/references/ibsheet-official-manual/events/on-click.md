---
KEY: onClick
KIND: event
PATH: events/on-click
ALIAS: 마우스로, 내부를, 클릭했을, 호출되는, 이벤트입니다
ALIAS_EN: on, click
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-click
---
# onClick ***(event)***
> 마우스로 셀 내부를 클릭했을 때 호출되는 이벤트입니다.

> 마우스 클릭시 호출되는 [onMouseDown](./on-mouse-down), [onMouseUp](./on-mouse-up) 이벤트 뒤에 발생합니다.

> `1(true)`를 리턴 시 클릭에 의한 기본 동작을 막습니다.

> 열 단위로 클릭 이벤트를 사용하려면 [OnClick](/docs/events/on-click) 이벤트를 사용해야합니다.

> <mark>`Bool, Radio`와 같이 클릭과 동시에 값이 수정되는 열에서 사용시에는 주의가 필요로 합니다.</mark> 

> 해당 이벤트가 호출되는 시점에서는 아직 값이 수정되기 이전의 값이 얻어짐으로, 위와 같은 타입의 열에서는 가급적 [onAfterChange](./on-after-change) 나 [onAfterClick](./on-after-click) 이벤트에서 처리 클릭에 대한 결과를 처리하실 것을 권합니다.

### Syntax

```
    onClick : function(paramObject) {

    }
or
    sheet.bind("onClick" , function(paramObject) {});
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
    onClick:function(evtParam){
        // 다음과 같은 조건 중 하나라도 만족하는 경우 클릭에 의한 시트 동작을 실행하지 않습니다.
        // 1) 열의 열이름이 'sName' 경우
        // 2) 행들 중 sProgress 열이름에 해당하는 셀의 값이 "완료"인 경우
        if (evtParam.col == "sName" || evtParam.row["sProgress"] == "완료") return true;
    }
}
```

### Read More

- [onAfterChange event](./on-after-change)
- [onAfterClick event](./on-after-click)
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
