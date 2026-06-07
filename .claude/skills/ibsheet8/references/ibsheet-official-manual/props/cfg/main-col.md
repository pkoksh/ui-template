---
KEY: mainCol
KIND: config-property
PATH: props/cfg/main-col
ALIAS: 트리기능, 사용시, 트리를, 보여줄, 열을
ALIAS_EN: main, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/main-col
---
# MainCol ***(cfg)***

> 트리기능 사용시 트리를 보여줄 열을 설정합니다. 

> 지정한 열에서 트리의 접힘/펼침 아이콘이 보여지게 됩니다.

> 반드시 하나의 열만 트리가 될 수 있습니다.

> 트리를 사용시에는 조회 데이터도 트리에 맞춰서 구성되어야 합니다. (7장 [데이터구조](/docs/appx/data-structure)를 참고)

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`colName`|트리가 표시될 열이름|


### Example
```javascript
options.Cfg = {
    MainCol: "Emp_name"        // 시트 트리를 열이름이 "Emp_name"인 열에 표시
};
```

### Try it
- [Demo of MainCol](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/MainCol/)

### Read More
- [데이터 규격 appendix](/docs/appx/data-structure)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
