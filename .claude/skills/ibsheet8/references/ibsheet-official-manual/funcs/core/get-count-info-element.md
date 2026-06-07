---
KEY: getCountInfoElement
KIND: method
PATH: funcs/core/get-count-info-element
ALIAS: sheet.getCountInfoElement, getCountInfoElement(), 기능, 사용하여, 데이터, 행수, 정보를
ALIAS_EN: get, count, info, element, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-count-info-element
---
# getCountInfoElement ***(method)***

> [setCountInfoElement](./set-count-info-element) 기능 사용하여 데이터 행수 정보를 시트 외부의 Dom Element 에 표시하고 있을 경우 정보 출력되는 Dom Element 를 반환합니다.


### Syntax
```javascript
HTML Element getCountInfoElement ();
```

### Return Value
***object*** : 데이터 행수 정보가 출력 되는 Dom Element

### Example
```javascript
// 데이터 행수 정보가 출력 되는 Dom Element 확인
sheet.getCountInfoElement ();
```

### Read More
- [InfoRowConfig cfg](/docs/props/cfg/info-row-config)
- [setCountInfoElement method](./set-count-info-element)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|