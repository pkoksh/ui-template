---
KEY: focusCell
KIND: column-property
PATH: props/col/focus-cell
ALIAS: 특정, 열에, 포커스가, 들어갔을때, 포커스
ALIAS_EN: focus, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/focus-cell
---
# FocusCell ***(col)***
> 특정 열에 포커스가 들어갔을때 "포커스 셀"의 디자인을 정의 합니다.

> 예약된 문자를 구분자 ","연결하여 설정합니다.

> 기본적으로는 `"Border,Class"`로 구성됩니다.

###
```css
 .IBColorFocusedCell{background-color:#FFFFDD;}
 .IBClassFocusedCell{background-color:#DDDDDD;}
```
위와 같이 클레스가 정의 되었을 경우 보여지는 모습은 다음과 같습니다.

|설정값|보여지는 모습|
|---|---|
|Default 설정 (Border,Class)|![FocusCell](/assets/imgs/FocusCell3.png "포커스된 셀의 모양")
<!-- IMAGE: 스크린샷/예시 이미지 - FocusCell -->|
|Class 만 설정|![FocusCell](/assets/imgs/FocusCell2.png "포커스된 셀의 모양")
<!-- IMAGE: 스크린샷/예시 이미지 - FocusCell -->|
|Border,Color 로 설정|![FocusCell](/assets/imgs/FocusCell1.png "포커스된 셀의 모양")
<!-- IMAGE: 스크린샷/예시 이미지 - FocusCell -->|

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Border`|포커스된 셀의 테두리를 적용|
|`Color`|포커스된 셀의 td 태그에 배경색으로 css/default(테마)/main.css 파일에 IBColorFocusedCell 클레스에서 정의한 색상이 적용(성능 저하가 있을 수 있음)|
|`Class`|css/default(테마)/main.css 파일에 IBClassFocusedCell 클레스에 정의한 디자인을 따릅니다.|

### Example
```javascript
//열에 포커스가 들어갔을때 셀의 테두리만 보여줌.
options.Cols = [
    ...
    {Type: "Text", Name: "EM_DC", FocusRow: "", FocusCell: "Border" ...},
    ...
];
```

### Read More
<!--!
- `[비공개]` [FocusCell row](/docs/props/row/focus-cell)
!-->
- [FocusCell cell](/docs/props/cell/focus-cell)
- [FocusRow row](/docs/props/row/focus-row)
- [FocusRow col](./focus-row)
- [FocusRow cell](/docs/props/cell/focus-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
