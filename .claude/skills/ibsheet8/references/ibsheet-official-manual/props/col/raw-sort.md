---
KEY: rawSort
KIND: column-property
PATH: props/col/raw-sort
ALIAS: 소팅시, 적용, 여부를, 설정합니다
ALIAS_EN: raw, sort
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/raw-sort
---
# RawSort ***(col)***

> 열 소팅시 Format 적용 여부를 설정합니다.

> [CustomFormat](./custom-format) 에는 적용되지 않습니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|열의 [Type](/docs/appx/type) 과 `Format`을 적용한 소팅(`default`)|
|`1`|`Format`을 적용하지 않은 순수데이터를 기준으로 한 소팅
[Enum](./enum)형식인 경우 `Key`를 기준으로 소팅|
|`2`|[Enum](./enum)타입에서 [Enum](./enum)과 [EnumKeys](./enum-keys)의 입력순서(배열순서)로 정렬|


### Example
```javascript
//특정 Enum 열에서 Key를 기준으로 소팅
options.Cols = [
    ...
    {Type: "Enum", Name: "Position", RawSort: 1, Enum: "|사장|부장|과장|대리|사원", EnumKeys: "|AA|BB|CC|DD|EE" ...},
    ...
];
```

### Read More
- [CanSort col](./can-sort)
- [CustomFormat col](./custom-format)
- [Enum col](./enum)
- [EnumKeys col](./enum-keys)
- [NumberSort col](./number-sort)
- [Type appendix](/docs/appx/type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
