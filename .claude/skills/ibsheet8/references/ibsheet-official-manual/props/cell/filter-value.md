---
KEY: filterValue
KIND: cell-property
PATH: props/cell/filter-value
ALIAS: 셀의, 원래, 대신, 필터링시, 사용할
ALIAS_EN: filter, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/filter-value
---
# FilterValue ***(cell)***

> 셀의 원래 값 대신 필터링시 사용할 값을 설정합니다.

> 특히 타입이 `Html`이나 `버튼` 같이 편집이 불가능한 셀에 유용하게 사용하실 수 있습니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|필터링이 이루어질때 사용될 기준 문자|


### Example
```javascript
//조회 데이터 내에서 속성 적용  (열이름 :CLS )
//원래 셀의 값 대신 "00가0000"로 필터링 되게 끔 설정
{
    data:[
        {... , "CARNOFilterValue":"00가0000" , ...}
    ]
}
```
![FilterValue](/assets/imgs/filterValue.png "실제 값 대신 00가0000로 필터링")
<!-- IMAGE: 스크린샷/예시 이미지 - FilterValue -->
### Read More
- [SortValue cell](./sort-value)
- [CopyValue cell](./copy-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
