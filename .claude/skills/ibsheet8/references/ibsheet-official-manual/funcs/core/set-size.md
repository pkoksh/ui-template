---
KEY: setSize
KIND: method
PATH: funcs/core/set-size
ALIAS: sheet.setSize, setSize(), 설정을, 동적으로, 변경합니다
ALIAS_EN: set, size
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-size
---
# setSize ***(method)***
> [(Cfg) Size](/docs/props/cfg/size) 설정을 동적으로 변경합니다 


### Syntax
```javascript
void setSize( size );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|size|`string`|필수|설정할 `Size` 속성|


### Return Value
***none***

### Example
```javascript
// 시트 Cfg.Size 설정 "Tiny"로 변경
sheet.setSize('Tiny');
```

### Try it

- [Demo of setSize](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Size/)

### Read More
- [Size cfg](/docs/props/cfg/size)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.13|기능 추가|
