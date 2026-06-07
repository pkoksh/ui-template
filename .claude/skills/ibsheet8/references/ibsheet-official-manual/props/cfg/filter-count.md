---
KEY: filterCount
KIND: config-property
PATH: props/cfg/filter-count
ALIAS: 필터, 기능, 사용시, 제공되는, 읽기
ALIAS_EN: filter, count
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/filter-count
---
# FilterCount ***(cfg)***

> 필터 기능 사용시 제공되는 읽기 전용 옵션으로, 시트에서 필터링되어 화면에 보이는 데이터행의 개수를 반환합니다.

> `Search`행에서 `Filter` 옵션 사용시에도 적용됩니다.


### Type
`number`

### Example
```javascript
// alert문에 사용 시
alert(sheet.FilterCount + "개 사용 가능합니다");

// Search행 설정할 때 사용 시
options.Solid = [{
    Kind: "Search", // Kind : 커스텀 행의 Kind를 지정합니다.{가능한 행 종류 : Header, Filter, Search, Group, Space, Data}
    Space: 1, // Space : 커스텀 Row가 위치할 곳을 설정합니다 {-1: 테이블 상단 영역, 0: Head 영역, 1: Body와 Head 사이, 2: Body와 Foot 사이 빈공간, 3: Foot 바로 위, 4: Foot 아래 툴바위치, 5:하단 테이블 밖}
    Cells: "Expression,Sep1,Counts,Filter,Select,Mark,FindPrev,Find,Clear,Sep2", // 커스텀 행 내에 Cell들을 생성하고 id를 부여함. Defs, Case, Type, Cols, List, Search, Actions, Expression, Filter, Select, Mark, Find, FindPrev, Clear, Help는 내장 설정 예약어
    Expression: { // 검색하기 위한 expression 설정
      Action: "Last", // expression 셀 내용이 변경되었을때 취할 동작에 대한 설정, Last로 설정시 사용자가 직전에 했던 동작을 실행합니다(필터를 이전에 사용했다면 필터를 사용).
      NoColor: 0, // 셀이 css style의 컬러(Color, Background)를 가질지 여부
      CanFocus: 1,
      Left: "5", // 셀 좌측에 지정한 px 만큼의 빈 공간 생성
      MinWidth: "90", // 최소 너비 px 단위
      EmptyValue: "<s>검색어를 입력해 주세요</s>"  // input의 placeholder 속성과 동일한 기능으로 Value가 없을 경우 지정된 값을 노출합니다
    },
    Sep1: { Width: "10",Type: "Html" },
    Counts: { Width: "50", CanFocus:0,Type: "html", Formula: "(Sheet.SearchCount ? Sheet.SearchCount : (Sheet.FilterCount ? Sheet.FilterCount : count(7))) +'개'" }, // filter, select 등의 버튼 클릭시 화면에 보이는 행의 개수를 세어 셀 값으로 사용.
    Filter: { ButtonText: "필터" },
    Select: { ButtonText: "선택" },
    Mark: { ButtonText: "마킹" },
    FindPrev:{ ButtonText: "(위로)찾기", Width: "70" },
    Find: { ButtonText: "(아래로)찾기", Width: "70" },
    Clear: { ButtonText: "클리어", Width: "50" },
    Sep2: { Width: "5", Type: "Html" }
}]
```

### Read More
- [SearchCount cfg](./search-count)
- [Solid appendix](/docs/appx/solid)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
