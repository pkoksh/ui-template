---
KEY: haveChild
KIND: row-property
PATH: props/row/have-child
ALIAS: 동적, 로드를, 행에, 설정시, 있는
ALIAS_EN: have, child
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/have-child
---
# HaveChild ***(row)***

> 동적 로드를 할 행에 설정시 `MainCol` 이 있는 컬럼에 트리 아이콘을 추가합니다.

> 해당 기능의 경우, 자식이 없어야 동작하고 `true` 로 설정시 접혀있는 아이콘이 생기게 됩니다. 

> `loadSearchData, doSearch` 에 `parent` 인자(데이터를 조회할 부모행 지정)를 이용해서 동적트리조회를 하면 됩니다.
> `setAttribute` 를 사용해서 동적으로 제어할 수 있습니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|트리아이콘 생성하지 않음.|
|`1(true)`|접힌 트리아이콘 생성|

### Example
```javascript
    Items: [
    {
        Cls: '콩류',
        HaveChild: true // 자식 없음으로 접힌 트리 아이콘 생성.
    },
    ...
    ]
// ---------------------

    sheet.setAttribute(row, null, 'HaveChild', true);
```

### Read More

- [doSearch method](/docs/funcs/core/do-search)
- [loadSearchData method](/docs/funcs/core/load-search-data)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.25|기능 추가|
