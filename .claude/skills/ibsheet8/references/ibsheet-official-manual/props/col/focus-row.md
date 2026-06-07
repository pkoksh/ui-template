---
KEY: focusRow
KIND: column-property
PATH: props/col/focus-row
ALIAS: 셀을, 클릭시, 보여지는, 커서, 포커스
ALIAS_EN: focus, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/focus-row
---
# FocusRow ***(col)***
> 셀을 클릭시 보여지는 "커서 포커스 행"은 Table 객체 위에 DIV 객체가 떠있는 형태로 구성됩니다.

> 특정 셀에 포커스가 있을때 보여질 "커서 포커스 행"의 디자인을 설정합니다.

> 예약된 문자를 구분자 ","연결하여 설정합니다.

> 기본적으로는 "Border, Background"로 구성됩니다.

###
![FocusRow](/assets/imgs/focusRow1.png "FocusRow default")
<!-- IMAGE: 스크린샷/예시 이미지 - FocusRow -->

[일반 `FocusRow`]

![FocusRow](/assets/imgs/focusRow2.png "FocusRow default")
<!-- IMAGE: 스크린샷/예시 이미지 - FocusRow -->

[`border`없이 `Background`로 설정시]

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Border`|커서 포커스 DIV의 테두리 사용 (.IBFocusRowBorder)|
|`Background`|커서 포커스 DIV의 배경색 사용 (.IBFocusRowBackground) |
|`Color`|커서 포커스 DIV를 사용하지 않고 Table 객체에 background-color를 부여 (성능이 저하될수 있음,포커스 셀은 제외) (.IBColorFocused) |
|`Class`|css/default(테마)/main.css 파일에 .IBClassFocused 클레스에 정의한 디자인을 따릅니다. (포커스 셀은 제외)|

### Example
```javascript
//열에 포커스가 들어갔을때 포커스행에 대해 테두리만 보여주고 배경색을 사용 안함.
options.Cols = [
    ...
    {Type: "Text", Name: "EM_DC", FocusRow: "Border" ...},
    ...
];
```
### Read More
- [FocusRow row](/docs/props/row/focus-row)
- [FocusRow cell](/docs/props/cell/focus-row)
<!--!
- `[비공개]` [FocusCell row](/docs/props/row/focus-cell)
!-->
- [FocusCell col](./focus-cell)
- [FocusCell cell](/docs/props/cell/focus-cell)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
