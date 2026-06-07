---
KEY: uncheck
KIND: cell-property
PATH: props/cell/uncheck
ALIAS: 셀이, 여러, 있을때, 내에서, 하나의
ALIAS_EN: uncheck
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/uncheck
---
# Uncheck ***(cell)***
> [Type](./type)이 `Bool` 인 셀이 여러 개 있을때, 한 행 내에서 하나의 셀만 체크 가능하게([Radio속성](./radio))하거나, 한 열 내에서 하나의 셀만 체크하게([BoolGroup속성](./bool-group))하는 기능이 있는데, 이러한 기능을 사용시 체크된 상태에서 다시 클릭시 체크 해제를 허용할지 여부를 설정합니다.


###
![Radio](/assets/imgs/radio.png "같은 행에서 하나만 선택 가능")
<!-- IMAGE: 스크린샷/예시 이미지 - Radio -->

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|체크 해제를 허용 안함|
|`1(true)`|체크 해제를 허용 (`default`)|




### Example
```javascript
//한번 체크하고 나면 그룹내에서 체크 해제가 불가능하게 설정
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Uncheck", 0);
```

### Read More
- [Radio cell](./radio)
- [BoolGroup cell](./bool-group)
- [Type cell](./type)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
