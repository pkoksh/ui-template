---
KEY: canDrag
KIND: row-property
PATH: props/row/can-drag
ALIAS: 행의, 가능여부를, 설정합니다
ALIAS_EN: can, drag
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/can-drag
---
# CanDrag ***(row)***
> 행의 Drag 가능여부를 설정합니다.

> [CanDrag cfg](/docs/props/cfg/can-drag) 속성이 `1(true)`인 경우 사용 가능합니다


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|드래그 불가|
|`1(true)`|드래그 가능|



### Example
```javascript
//특정 행에 대해서 드래그를 막는다.
var row = sheet.getRowById("AR55");
row["CanDrag"] = 0;
```

### Read More
- [CanDrag cfg](/docs/props/cfg/can-drag)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
