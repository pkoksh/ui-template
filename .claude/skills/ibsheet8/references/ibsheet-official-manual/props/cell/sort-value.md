---
KEY: sortValue
KIND: cell-property
PATH: props/cell/sort-value
ALIAS: 셀의, 원래, 대신, 소팅시, 사용할
ALIAS_EN: sort, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/sort-value
---
# SortValue ***(cell)***

> 셀의 원래 값 대신 소팅시 사용할 값을 설정합니다.

> 특히 타입이 Html이나 버튼 같이 편집이 불가능한 셀에 유용하게 사용하실 수 있습니다.

> 이 속성은 그룹 기능 사용 시 그룹핑 기준으로 사용 됩니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|소팅이 이루어질때 사용될 기준 문자|


### Example
```javascript
//조회 데이터 내에서 속성 적용  (열이름: CLS)
//특정 셀은 오름차순 소팅시 최상단에 올라오게 설정
{
    data:[
        {... ,"CLSSortValue": "00000" , ...}
    ]
}
```

### Read More
- [Group cfg](/docs/props/cfg/group)
- [NumberSort cell](./number-sort)
- [RawSort cell](./raw-sort)
- [CaseSensitive cell](./case-sensitive)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
