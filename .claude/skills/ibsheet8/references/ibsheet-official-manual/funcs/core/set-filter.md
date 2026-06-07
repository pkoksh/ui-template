---
KEY: setFilter
KIND: method
PATH: funcs/core/set-filter
ALIAS: sheet.setFilter, setFilter(), 필터행과, 무관하게, 현재, 시트가, 갖고
ALIAS_EN: set, filter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-filter
---
# setFilter ***(method)***
> 필터행과 무관하게 현재 시트가 갖고 있는 값을 기준으로 필터링을 합니다.

> 설정한 내용은 필터행에 보여지지 않습니다.


### Syntax
```javascript
void setFilter( name, filter, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|name|`string`|필수|다른 필터들과 구별하기 위해 설정할 필터의 이름
|filter|`string`\|`function`|필수|필터링 조건 (ex: `"cardAmt>50000?1:0"`)
|render|`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함
`1(true)`:즉시 반영 (`default`)|


### Return Value
***none***

### Example
```javascript
//deptName열에 총무부서 이면서 cardAmt 값이 100000 이상인 행만 보여준다.
sheet.setFilter({ name: "총무부서", filter: "deptName=='총무부서'?1:0", render: 0 });
sheet.setFilter({ name: "카드", filter: "cardAmt>100000?1:0", render: 1 });


//"DELIVERYDEPTNAME"컬럼에 "천안"이라는 글자가 포함된 행만 보여준다.
sheet.setFilter("myFilter", function(obj) {
    if (obj.Row.DELIVERYDEPTNAME) {
        return obj.Row.DELIVERYDEPTNAME.indexOf('천안') > -1;
    }
}, 1);
```

### Read More
- [clearFilter method](./clear-filter)
- [doFilter method](./do-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
