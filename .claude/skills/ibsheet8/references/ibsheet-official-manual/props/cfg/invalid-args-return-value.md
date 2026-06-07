---
KEY: invalidArgsReturnValue
KIND: config-property
PATH: props/cfg/invalid-args-return-value
ALIAS: 사용시, 잘못된, 인자를, 사용하는, 경우
ALIAS_EN: invalid, args, return, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/invalid-args-return-value
---
# !InvalidArgsReturnValue ***(cfg)***

> IBSheet8 API 사용시 잘못된 인자를 사용하는 경우 리턴되는 값을 지정합니다.

> 설정하는 경우 API 필수 인자 사용여부와 인자 타입 유효성 여부를 검사합니다.



### Type
`number|string`


### Example
```javascript
options.Cfg = {
    InvalidArgsReturnValue: -1, // 잘못된 인자 사용시 -1을 리턴하도록 설정
};
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.13|기능 추가|
