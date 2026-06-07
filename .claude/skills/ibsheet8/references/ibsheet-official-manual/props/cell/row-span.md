---
KEY: rowSpan
KIND: cell-property
PATH: props/cell/row-span
ALIAS: 특정, 셀을, 기준으로, 아래쪽으로, 합쳐질
ALIAS_EN: row, span
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/row-span
---
# RowSpan ***(cell)***
> 특정 셀을 기준으로 아래쪽으로 합쳐질 셀의 개수를 설정합니다.

> `col`에 [Spanned](/docs/props/col/spanned):`1` 이 설정되어 있어야 사용할 수 있습니다. 

> Html Table객체에 RowSpan과 유사합니다.

> [DataMerge cfg](/docs/props/cfg/data-merge)과 [HeaderMerge cfg](/docs/props/cfg/header-merge)이 우선 적용 됩니다.

> [setMergeRange method](/docs/funcs/core/set-merge-range) 사용시 동적으로 병합할 수 있습니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|열 내에서 아래로 병합할 셀의 개수|



### Example
```javascript
//Spanned가 설정되어 있어야 함.
options.Def.Col = {Spanned: 1};


//조회 데이터 내에서 속성 적용  (열이름: CLS)
{
    data:[
        //아래로 3개 셀을 병합함
        {... ,CLSRowSpan: 3 ...}
    ]
}
```

### Read More
- [Span cell](./span)
- [Spanned col](/docs/props/col/spanned)
- [DataMerge cfg](/docs/props/cfg/data-merge)
- [HeaderMerge cfg](/docs/props/cfg/header-merge)
- [setMergeRange method](/docs/funcs/core/set-merge-range)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
