---
KEY: disabled
KIND: cell-property
PATH: props/cell/disabled
ALIAS: 셀에, 대해, 버튼, 사용, 가능
ALIAS_EN: disabled
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/disabled
---
# Disabled ***(cell)***
> [Type](/docs/appx/type)이 `Button`, `File`인 셀에 대해 버튼 사용 가능 여부를 설정합니다.

> `Type:"Button", Disabled:1` : 버튼 셀이 비활성화 색으로 변경되며, click 이벤트 발생하지 않는다 

> `Type:"File", Disabled:1` : 파일 추가, 제거 버튼이 표시되지 않는다.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|버튼 기능 사용 가능 (`default`)|
|`1(true)`|버튼 기능 사용 불가|

### Example
```javascript
//특정 셀의 버튼을 사용불가로 설정
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Disabled", 1);
```

### Read More
- [Button cell](./button)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
