---
KEY: clearFilterOff
KIND: config-property
PATH: props/cfg/clear-filter-off
ALIAS: 필터행의, 연산자, 사용안함, 선택시, 필터
ALIAS_EN: clear, filter, off
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/clear-filter-off
---
# ClearFilterOff ***(cfg)***

> 필터행의 연산자 중 사용안함(X) 선택시 필터 셀 값을 삭제할지 여부를 설정합니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|필터 사용안함(x) 선택시 필터셀의 값을 유지 (`default`)|
|`1`|필터 사용안함(x) 선택시 필터셀의 값을 삭제|


### Example
```javascript
options = {
  "Cfg":{
    "ClearFilterOff":1,  // 필터 사용안함(x) 선택시 필터셀 값 삭제
  }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
