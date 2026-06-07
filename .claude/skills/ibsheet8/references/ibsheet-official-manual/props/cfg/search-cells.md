---
KEY: searchCells
KIND: config-property
PATH: props/cfg/search-cells
ALIAS: 찾기, 사용, 단위로, 검색할지, 여부를
ALIAS_EN: search, cells
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/search-cells
---
# SearchCells ***(cfg)***

> 찾기 행 사용 시 행 단위로 검색할지 셀 단위로 검색할지 여부를 선택할 수 있습니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|행 단위로 검색 (`default`)
 ex) 찾기 행에 "가방 영국" 입력 시 행 내 셀들 중 "가방"과 "영국"을 포함하는 셀이 하나 이상 있는 경우(한 셀이 "가방", 다른 한 셀이 "영국"을 가지는 경우도 포함) 해당 행이 검색됨|
|`1`|셀 단위로 검색
 ex) 찾기 행에 "가방 영국" 입력 시 "가방"과 "영국" 두 개의 단어를 모두 포함하는 셀만 검색됨|


### Example
```javascript
options.Cfg = {
  SearchCells: 0,
};
```

### Read More
- [Solid appendix](/docs/appx/solid)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
