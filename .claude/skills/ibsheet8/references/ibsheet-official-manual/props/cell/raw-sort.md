---
KEY: rawSort
KIND: cell-property
PATH: props/cell/raw-sort
ALIAS: 소팅시, 적용된, 데이터를, 기준으로, 소팅할지
ALIAS_EN: raw, sort
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/raw-sort
---
# RawSort ***(cell)***

> 소팅시 [Format](/docs/props/cell/format) 이 적용된 데이터를 기준으로 소팅할지 여부를 설정합니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|열의 `Type` 과 `Format`을 적용한 소팅 (`default`)|
|`1`|`Format`을 적용하지 않은 순수 데이터를 기준으로 한 소팅
`Enum`형식인 경우 `Key`를 기준으로 소팅|
|`2`|`Enum`타입에서 `Enum`과 `EnumKey`의 입력순서(배열순서)로 정렬|


### Example
```javascript
//조회 데이터 내에서 속성 적용 (열이름: CLS)
//포맷이 적용되지 않은 순수 데이터를 기준으로 소팅
{
    data:[
        {... , "CLSRawSort": 1, ...}
    ]
}
```

### Read More
- [NumberSort cell](./number-sort)
- [SortValue cell](./sort-value)
- [CaseSensitive cell](./case-sensitive)
- [Format cell](/docs/props/cell/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
