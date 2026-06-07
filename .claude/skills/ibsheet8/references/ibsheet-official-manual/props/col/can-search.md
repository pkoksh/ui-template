---
KEY: canSearch
KIND: column-property
PATH: props/col/can-search
ALIAS: 찾기, 다이얼로그, 등을, 검색할, 해당
ALIAS_EN: can, search, dialog, modal, popup
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/can-search
---
# CanSearch ***(col)***
> findRows, 찾기 다이얼로그 등을 통해 검색할 때 해당 컬럼을 검색 대상에 포함시킬지 여부를 결정합니다. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|검색 대상 미포함|
|`1(true)`|검색 대상 포함 (`default`)|

### Example
```javascript
//해당 컬럼을 검색 대상에서 제외합니다.
options.Cols = [
    ...
    {Type: "Text", Name: "sName", CanSearch: 0 ...},
    ...
];
```

### Read More
- [SearchCount cfg](/docs/props/cfg/search-count)
- [SearchCaseSensitive cfg](/docs/props/cfg/search-case-sensitive)
- [findRows method](/docs/funcs/core/find-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
