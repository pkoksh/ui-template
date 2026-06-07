---
KEY: setScale
KIND: method
PATH: funcs/core/set-scale
ALIAS: sheet.setScale, setScale(), 배율, 설정하여, 시트를, 축소, 확대
ALIAS_EN: set, scale
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-scale
---
# setScale ***(method)***
> 배율(zoom factor)을 설정하여 시트를 축소/확대 합니다.

> 1.0보다 작은 값은 시트를 축소합니다.

> 1.0보다 큰 값은 시트를 확대합니다.


> **<mark>주의</mark> : 해당 속성은 `Menu`, `Dialog`, `Message`에는 영향을 주지 않습니다.**



### Syntax
```javascript
void setScale( val, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|val|`number`|선택|배율(zoom factor) 지정 (`default: 1.0`)|
|render|`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함
`1(true)`:즉시 반영 (`default`)|


### Return Value
***none***

### Example
```javascript
//1.5배로 시트를 확대한다
sheet.setScale({ val: 1.5, render: 1 });
```

### Read More
- [getScale method] (./get-scale)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.11|기능 추가|
