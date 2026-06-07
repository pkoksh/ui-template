---
KEY: fitColWidth
KIND: method
PATH: funcs/core/fit-col-width
ALIAS: sheet.fitColWidth, fitColWidth(), 컬럼, 너비를, 인자로, 설정한, 비율
ALIAS_EN: fit, col, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/fit-col-width
---
# fitColWidth ***(method)***

> 각 컬럼 너비를 인자로 설정한 비율 단위로 설정하거나 시트의 전체 너비에 맞게 비율 기준으로 재 설정 합니다.

> `ratio` 인자를 설정하지 않은 경우 모든 컬럼의 너비 합이 시트의 너비에 맞게 현재의 컬럼 너비의 비율에 맞추어 재설정 되며, `ratio` 인자를 설정한 경우 해당 비율로 재설정 됩니다.


> **<mark>주의</mark> : [RelWidth](./docs/props/col/rel-width) 사용하는 경우 해당 기능이 정상적으로 지원되지 않습니다.**

> `ratio` 설정 시 컬럼의 갯수와 비율 배분(전체 100 기준으로 배분하여 나머지가 남지 않도록)을 반드시 맞춰주어야 정상 동작 됩니다.



### Syntax
```javascript
boolean fitColWidth(ratio);
```


### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|ratio |`array[number]`|선택|컬럼의 너비 비율|


### Return Value
***boolean*** : 적용 여부 (너비의 변경이 이루어지면 true, 변화가 없으면 false 리턴)

### Example
```javascript
// 컬럼들의 현재의 너비 비율을 유지하며 시트 너비에 맞게 재설정 처리
sheet.fitColWidth();

// 시트전체 너비를 기준으로 첫번째 컬럼부터 10%, 50%, 30%, 10% 의 너비 비율로 재설정 처리
sheet.fitColWidth([10,50,30,10]);
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.41|기능 추가|
