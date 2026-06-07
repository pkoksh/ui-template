---
KEY: colPage
KIND: config-property
PATH: props/cfg/col-page
ALIAS: 시트의, 넓이, 또는, 가로, 스크롤
ALIAS_EN: col, page
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/col-page
---
# ColPage ***(cfg)***

> 시트의 넓이 또는 가로 스크롤 위치에 따라 가운데 섹션에 설정한 열이 동적으로 랜더링 되도록 설정합니다.

> 랜더링 단위는 [ColPageLength](/docs/funcs/core/col-page-length)로 설정할 수 있습니다.
> 해당 기능에는 아래와 같은 제약사항이 있습니다. 
> - `(Cfg) MultiRecord` 사용 불가
> - `(Cfg) AutoRowHeight` 사용 불가
> - 머지 사용 불가

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|동적 랜더링 사용하지 않음 (`default`)|
|`1`|동적 랜더링 사용|

### Example
```javascript
options.Cfg = {
  ColPage: 1 // 컬럼페이징 기능을 사용합니다. 
};
```

### Read More
- [ColPageLength](/docs/funcs/core/col-page-length)
- [열(Col) 구조에 대한 이해](/docs/start/col)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.11|기능 추가|
|core|8.3.0.51|(Cfg) SearchMode:0 기능 대응|