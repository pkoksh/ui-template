---
KEY: hidden
KIND: row-property
PATH: props/row/hidden
ALIAS: 행의, 보임, 감춤, 여부를, 나타냅니다
ALIAS_EN: hidden
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/hidden
---
# !Hidden ***(row)***

> 행의 보임/감춤 여부를 나타냅니다. (실제 행에 대한 DOM의 높이만 줄여서 감춥니다.)

> [hideRow](/docs/funcs/core/hide-row)메소드를 통해 행을 감추게 되면 이 속성의 값이 `1(true)`로 수정됩니다.

> `Hidden: 1(true)` 인 행에 대해서는 필터링이 적용되지 않습니다.(`Visible` 값이 수정되지 않습니다.) 


> **<mark>주의</mark> : 해당 속성은 `SearchMode: 0`에서는 동작하지 않습니다.**

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|보임|
|`1(true)`|감춰짐|

### Example
```javascript
//Hidden된 행의 개수 확인
var rows = sheet.getDataRows();
var cnt = 0;
for(var i = 0; i < rows.length; i++){
    if (rows[i]["Hidden"]) cnt++;
}
//감춘 행을 화면에 반영
alert(cnt + "개의 행이 감춰져 있습니다");
```

### Read More
- [Visible row](./visible)
- [hideRow method](/docs/funcs/core/hide-row)
- [hideCol method](/docs/funcs/core/hide-col)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
