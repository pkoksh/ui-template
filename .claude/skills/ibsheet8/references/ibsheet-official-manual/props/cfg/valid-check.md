---
KEY: validCheck
KIND: config-property
PATH: props/cfg/valid-check
ALIAS: 저장, 함수, 호출시, 유효성, 검사를
ALIAS_EN: valid, check, save, persist, store, function, method, validation
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/valid-check
---
# ValidCheck ***(cfg)***

> 저장 함수(doSave, getSaveString, getSaveJson) 호출시 유효성 검사를 수행하고, 유효성 검사 실패한 셀을 마킹합니다.

> 유효성 검사에 실패한 첫 셀에 focus가 위치 하며, 편집 상태를 만듭니다.

> 유효성 검사 항목은 다음과 같습니다. 


> - `EditMask` 유효성 검사 

> - `ResultMask` 유효성 검사 

> - `Required` 유효성 검사 

> - `Size` 유효성 검사 


### Type
`mixed`( `boolean` \| `object` )

### Options
|Value|Description|
|-----|-----|
|`0(false)`|저장 함수(doSave, getSaveString, getSaveJson) 호출시 Required 유효성 검사만 수행합니다. (`default`)|
|`1(true)` |저장 함수(doSave, getSaveString, getSaveJson) 호출시 유효성 검사를 수행합니다.
|
|`object`  |유효성 검사에 실패한 첫셀에 `Focus`(`default :1`), `Edit`(`default :1`) 유무 설정
|

### Example
```javascript
// 저장 함수(doSave, getSaveString, getSaveJson) 호출시 유효성 검사를 수행합니다.
// 유효성 검사 실패한 제일 첫번째 셀에 Focus 이동, 셀을 편집 상태로 설정 합니다.
options.Cfg = {
    ValidCheck: true  
};

// 저장 함수(doSave, getSaveString, getSaveJson) 호출시 유효성 검사를 수행합니다.
// 유효성 검사 실패한 제일 첫번째 셀에 Focus 이동합니다.
options.Cfg = {
    ValidCheck: {
        Focus : 1,
        Edit : 0
    },  
};
```

### Read More
- [ValidateMessage cfg](/docs/props/cfg/validate-message)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.3|기능 추가|
|core|8.2.0.15|`object` 기능 추가|
