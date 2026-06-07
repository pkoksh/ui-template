---
KEY: colPageLength
KIND: config-property
PATH: props/cfg/col-page-length
ALIAS: 사용, 랜더링, 개수를, 설정합니다
ALIAS_EN: col, page, length
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/col-page-length
---
# ColPageLength ***(cfg)***

> [ColPage](/docs/funcs/core/col-page) 사용 시 랜더링 할 열(`Col`)의 개수를 설정합니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|한 페이지 단위의 행수 (`default: 10`)|


### Example
```javascript
options = {
  Cfg :{
    SearchMode: 2,
    ColPage: 1,
    ColPageLength: 20,  // 한 페이지당 표시할 행수
  }
};
```

### Read More
- [ColPage](/docs/funcs/core/col-page)
- [열(Col) 구조에 대한 이해](/docs/start/col)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.11|기능 추가|
