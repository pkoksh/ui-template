---
KEY: clear
KIND: cell-property
PATH: props/cell/clear
ALIAS: 간에, 관계형, 콤보를, 사용할, 상위
ALIAS_EN: clear
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/clear
---
# Clear ***(cell)***
> 열 간에 관계형 콤보를 사용할 때, 상위 콤보에 값이 바뀌었을 때 클리어 되어야 하는 하위 열을 정의 합니다.

> 관계형 콤보 구성과 관련해서는 (col) [Related](/docs/props/col/related) 속성을 참고해 주세요.

> [CanEmpty](./can-empty) 속성에 영향을 받아 `CanEmpty: 0` 일 경우에는 Enum의 첫 번째 값으로 설정이 됩니다.

> `CanEmpty: 1` 일 경우에는 빈 문자열로 설정 됩니다.

> `참고` : 관계형 콤보의 `(cell)Clear, (cell)CanEmpty` 는 사용자의 action(change 이벤트가 발생하는) 에 의해서만 동작합니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|자신의 하위관계 열이름 (여러개인 경우 ","구분자로 지정)|

### Example
```javascript
sheet.setAttribute(sheet.getRowById("AR99"), "CLS1", "Clear", "CLS2,CLS3");
```

### Read More
- [Related cell](/docs/props/cell/related)
- [Enum cell](/docs/props/cell/enum)
- [EnumKeys cell](/docs/props/cell/enum-keys)
- [CanEmpty cell](/docs/props/col/can-empty)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
