---
KEY: section
KIND: column-property
PATH: props/col/section
ALIAS: 열의, 섹션을, 확인합니다
ALIAS_EN: section
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/section
---
# Section ***(col)***

> 열의 섹션을 확인합니다.

> 시트의 열 생성시, `LeftCols` 배열에 추가한 열은 틀고정을 기준으로 좌측 섹션으로 들어가고, `Cols` 배열에 넣은 열은 가운데, `RightCols` 섹션에 넣은 열은 우측 섹션으로 추가됩니다.

> 이 속성은 특정 열이 어느 섹션에 위치하고 있는지를 확인하는 용도로 사용됩니다.(`Readonly`)


###
![섹션](/assets/imgs/section.png "섹션")
<!-- IMAGE: 스크린샷/예시 이미지 - 섹션 -->


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|좌측 섹션|
|`1`|가운데 섹션|
|`2`|우측 섹션|


### Example
```javascript
//열의 섹션을 확인
var section = sheet.getAttribute({col: "RENTFEE", attr: "Section"})
```

### Read More
- [Pos col](./pos)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
