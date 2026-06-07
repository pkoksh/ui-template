---
KEY: setAllCheck
KIND: method
PATH: funcs/core/set-all-check
ALIAS: sheet.setAllCheck, setAllCheck(), 타입의, 전체를, 체크, 언체크
ALIAS_EN: set, all, check, checkbox
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-all-check
---
# setAllCheck ***(method)***
> `Bool` 타입의 열 전체를 체크/언체크 합니다.

> **셀이 편집불가능한 경우, 값 수정이 이루어지지 않습니다.(불가 여부와 상관없이 수정하시려면 setValue를 사용)**

> `ignoreEvent`인자를 사용하여 이벤트([onAfterChange event](/docs/events/on-after-change) 호출 여부를 설정할 수 있습니다.(`default: 0(false)`)

### Syntax
```javascript
void setAllCheck( col, val, ignoreEvent );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|col |`string`|필수|열이름|
|val |`boolean`|필수|체크 여부
`0(false)`:체크해제 (`default`)
 `1(true)`:체크|
|ignoreEvent|`boolean`|선택|이벤트([onAfterChange event](/docs/events/on-after-change)) 발생 여부
`0(false)`:이벤트 발생 시킴(`default`)
`1(true)`:이벤트 발생 시키지 않음|

### Return Value
***none***

### Example
```javascript
//"CHK"열을 전체 체크
sheet.setAllCheck("CHK", 1);

//"CHK"열을 전체 언체크하고 이벤트를 호출하지 않습니다. 
sheet.setAllCheck("CHK", 0, true);
```
### Read More

- [setCheck method](./set-check)
- [onCheckAllFinish event](/docs/events/on-check-all-finish)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.7|ignoreEvent 인자 추가|