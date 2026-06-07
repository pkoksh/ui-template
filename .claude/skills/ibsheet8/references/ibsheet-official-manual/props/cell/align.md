---
KEY: align
KIND: cell-property
PATH: props/cell/align
ALIAS: 문자열, 좌우, 정렬을, 설정합니다
ALIAS_EN: align
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/align
---
# Align ***(cell)***

> 문자열 좌우 정렬을 설정합니다.

> 트리 또는 그룹에서 사용할 때는 기준으로 지정된 컬럼(**트리의 접힘/펼침 아이콘이 보이는 컬럼**)의 데이터영역은 `Align`이 먹지 않습니다. 

> 상하 정렬과 관련해서는 [VAlign](./v-align)속성을 참고하세요.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Left`|문자열 좌측 정렬|
|`Center`|문자열 가운데 정렬|
|`Right`|문자열 우측 정렬|


### Example
```javascript
//특정 셀의 문자열을 오른쪽 정렬로 설정
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Align", "Right");
```

### Read More
- [VAlign cell](./v-align)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
