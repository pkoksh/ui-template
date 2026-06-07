---
KEY: rowIndex
KIND: config-property
PATH: props/cfg/row-index
ALIAS: 기능을, 대신할, 컬럼명을, 변경할, 해당
ALIAS_EN: row, index
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/row-index
---
# RowIndex ***(cfg)***

> `SEQ`의 기능을 대신할 컬럼명을 변경할 수 있습니다. 
 해당 기능에 컬럼명을 넣어주면, `SEQ`기능을 해당 컬럼에서 대신 사용할 수 있습니다. 



### Type
`string`


### Example
```javascript
options.Cfg = {
    RowIndex: "AAA" // SEQ의 기능을 대신할 컬럼명 
};

```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.10|기능 추가|
