---
KEY: focusRow
KIND: row-property
PATH: props/row/focus-row
ALIAS: 데이터, 셀을, 클릭시, 보여지는, 커서
ALIAS_EN: focus, row, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/focus-row
---
# FocusRow ***(row)***
> 데이터 셀을 클릭시 보여지는 "커서 포커스 행"은 Table 객체 위에 DIV 객체가 떠있는 형태로 구성됩니다.

> 특정 행에 포커스가 있을 때 보여질 "커서 포커스 행"의 디자인을 설정합니다.

> 예약된 문자를 구분자 "," 연결하여 설정합니다.

> 기본적으로는 "Border, Background"로 구성됩니다.

###
![FocusRow](/assets/imgs/focusRow1.png "FocusRow default")
<!-- IMAGE: 스크린샷/예시 이미지 - FocusRow -->

[**일반 FocusRow**]

![FocusRow](/assets/imgs/focusRow2.png "FocusRow default")
<!-- IMAGE: 스크린샷/예시 이미지 - FocusRow -->

[**border없이 Background로 설정시**]



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Border`|커서 포커스 DIV의 테두리 사용 (.IBFocusRowBorder)|
|`Background`|커서 포커스 DIV의 배경색 사용 (.IBFocusRowBackground) |
|`Color`|커서 포커스 DIV를 사용하지 않고 Table 객체에 background-color를 부여 (성능이 저하될 수 있음, 포커스 셀은 제외) (.IBColorFocused) |
|`Class`|css/default(테마)/main.css 파일에 .IBClassFocused 클래스에 정의한 디자인을 따릅니다. (포커스 셀은 제외)|


### Example
```javascript
//특정 행에 대해서 포커스 행의 디자인을 border없이 배경색만 보이는 형태로 수정
var row = sheet.getRowById("AR55");
row["FocusRow"] = "Background";

//전체 행에 대해서 포커스 행의 디자인을 .IBClassFocused 클래스에 정의한 디자인으로 보이도록 수정
options.Def = {
  Row : {
    FocusRow: "Class" 
  }
};
```

### Read More
- [FocusRow col](/docs/props/col/focus-row)
- [FocusRow cell](/docs/props/cell/focus-row)
<!--!
- `[비공개]` [FocusCell row](./focus-cell)
!-->
- [FocusCell col](/docs/props/col/focus-cell)
- [FocusCell cell](/docs/props/cell/focus-cell)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
