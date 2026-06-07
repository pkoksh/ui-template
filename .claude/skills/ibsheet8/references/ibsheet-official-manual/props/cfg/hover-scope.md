---
KEY: hoverScope
KIND: config-property
PATH: props/cfg/hover-scope
ALIAS: 시트내의, 또는, 셀에, 마우스, 커서가
ALIAS_EN: hover, scope
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/hover-scope
---
# HoverScope ***(cfg)***

> 시트내의 행 또는 셀에 마우스 커서가 위치 했을때 `Hover` 동작이 수행되는 영역을 제한합니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|헤더/데이터 영역에 `Hover` 동작 (`default`)|
|`1`|헤더 영역에 `Hover` 동작하지 않음|


### Example
```javascript
options.Cfg = {
    HoverScope: 1,       // 헤더 영역에 Hover 동작하지 않음  
};
```

### Read More
- [Hover cfg](./hover)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.9|기능 추가|
