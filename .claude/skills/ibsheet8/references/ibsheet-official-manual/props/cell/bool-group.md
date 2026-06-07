---
KEY: boolGroup
KIND: cell-property
PATH: props/cell/bool-group
ALIAS: 내에서, 동일, 그룹으로, 묶을지, 여부를
ALIAS_EN: bool, group
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/bool-group
---
# BoolGroup ***(cell)***
> [Type](/docs/appx/type)이 `Bool`인 셀 내에서 동일 그룹으로 묶을지 여부를 설정합니다.

> 입력하는 숫자가 그룹에 인덱스가 되어 같은 값을 갖고있는 셀간에는 하나만 체크가 됩니다.

> (마치 라디오처럼 체크될때 따른 셀은 자동으로 언체크 됩니다.)


###
![BoolGroup](/assets/imgs/boolGroup.png "그룹으로 묶인 행에서 하나만 선택 가능")
<!-- IMAGE: 스크린샷/예시 이미지 - BoolGroup -->

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|라디오처럼 하나로 묶을 그룹 인덱스|




### Example
```javascript
//열 내에서 1,2,3번행 그룹과 4,5,6번 행 그룹 내에서 단일 셀만 체크 가능하게 합니다.
sheet.setAttribute( sheet.getRowById("AR1"), "CLS", "BoolGroup", "1" );
sheet.setAttribute( sheet.getRowById("AR2"), "CLS", "BoolGroup", "1" );
sheet.setAttribute( sheet.getRowById("AR3"), "CLS", "BoolGroup", "1" );
sheet.setAttribute( sheet.getRowById("AR4"), "CLS", "BoolGroup", "2" );
sheet.setAttribute( sheet.getRowById("AR5"), "CLS", "BoolGroup", "2" );
sheet.setAttribute( sheet.getRowById("AR6"), "CLS", "BoolGroup", "2" );
```


### Read More
- [Radio cell](/docs/props/cell/radio)
- [BoolIcon cell](/docs/props/cell/bool-icon)
- [Type appendix](/docs/appx/type)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
