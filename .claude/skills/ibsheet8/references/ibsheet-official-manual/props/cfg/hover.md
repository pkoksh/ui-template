---
KEY: hover
KIND: config-property
PATH: props/cfg/hover
ALIAS: 시트내의, 또는, 셀에, 마우스, 커서가
ALIAS_EN: hover
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/hover
---
# Hover ***(cfg)***

> 시트내의 행 또는 셀에 마우스 커서가 위치 했을때 `Hover` 동작 모드를 설정합니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|`Hover` 동작 안함 |
|`1`|셀단위 `Hover`|
|`2`|행단위 `Hover` (`default`)  |
|`3`|행단위, 열단위 `Hover` ([MultiRecord](./multi-record)에서는 열단위 `Hover` 동작 안함) |

### Example
```javascript
options.Cfg = {
    Hover: "1",       // 셀단위 Hover 동작처리  
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.3.0.47|`3` 옵션 추가|