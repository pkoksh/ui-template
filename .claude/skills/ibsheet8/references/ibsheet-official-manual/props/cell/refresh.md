---
KEY: refresh
KIND: cell-property
PATH: props/cell/refresh
ALIAS: 간에, 관계형, 콤보를, 사용할, 상위
ALIAS_EN: refresh
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/refresh
---
# !Refresh ***(cell)***
> 열 간에 관계형 콤보를 사용할 때, 상위 콤보에 값이 바뀌었을 때 업데이트 되어야 하는 하위 열을 정의 합니다.

> 관계형 콤보 구성과 관련해서는 col [Related](/docs/props/col/related) 속성을 참고해 주세요.
> 상위 콤보에 값이 변경되었을 때, 하위 콤보의 값을 클리어 하려면 [Clear](./clear)속성을 참고해 주세요.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|자신의 하위 관계 열이름 (여러 개인 경우 ","구분자로 지정)|

### Example
```javascript
//메소드를 통해 특정 셀에 속성 적용 (열이름: CLS1)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS1", "Refresh", "CLS2");
```

### Read More
- [Related col](/docs/props/col/related)
- [Related cell](./related)
- [Enum cell](./enum)
- [EnumKeys cell](./enum-keys)
- [Clear cell](./clear)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
