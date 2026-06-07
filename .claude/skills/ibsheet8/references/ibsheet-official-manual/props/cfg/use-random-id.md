---
KEY: useRandomId
KIND: config-property
PATH: props/cfg/use-random-id
ALIAS: 시트, 생성시, 임의의, 생성하고, 글로벌
ALIAS_EN: use, random, id, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/use-random-id
---
# UseRandomId ***(cfg)***

> 시트 생성시 임의의 id로 생성하고, 글로벌 객체를 생성하지 않습니다.

> IBSheet.create()를 통해 생성시 부여한 id의 유/무 무관하게 임의의 값으로 id가 생성됩니다. 

> 생성된 시트의 id는 create()함수 호출 후 리턴되는 객체를 받아서 확인 하실 수 있습니다.

### Type
`boolean` or `string`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|IBSheet.create()에서 정의한 id값 사용 (`default`)|
|`1(true)`|"sheet" + 6자리 숫자 형식으로 생성 (ex: sheet847314)|
|`string`|"입력값" + 6자리 숫자 형식으로 생성 (ex: grid125263 (값을 "grid"로 입력시))|


### Example
```javascript
options = {
    Cfg:{
      UseRandomId: "myGrid"
    },
    Cols: [...]
 };

grid = IBSheet.create({
   // 시트 생성시 id를 넣지 않음
  "el": "grid_DIV",
  "options": options
 });

console.log(grid.id);  //myGrid123456 식으로 id가 생성됨.

//함수에 접근 할때
grid.getValue(grid.getFocusedRow(),grid.getFocusedCol());

```

### Read More



### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.47|기능 추가|
