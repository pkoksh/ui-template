---
KEY: dataAutoTrim
KIND: config-property
PATH: props/cfg/data-auto-trim
ALIAS: 조회, 데이터의, 공백, 트림, 여부를
ALIAS_EN: data, auto, trim, search, query, fetch, load, retrieve
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/data-auto-trim
---
# DataAutoTrim ***(cfg)***
> 조회 시 데이터의 공백 트림 여부를 설정합니다.

> 이 속성을 `1(true)`로 설정한다면 조회, 데이터 입력, `setValue` 시 데이터에 있는 공백을 자동으로 트림합니다.


> **<mark>주의</mark> : 해당 옵션 사용시 조회 성능에 영향을 줄 수 있습니다. 특히, `SearchMode:0 (FastLoad)` 또는 `SearchMode:3 (ScrollApend)` 모드를 제외한 조회 모드에는 데이터 양에 따라 조회 성능에 더 많은 영향을 줄 수 있습니다.** 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|조회 시 데이터 트림 안함 (`default`)|
|`1(true)`|조회 시 데이터 트림|


### Example
```javascript
// 조회 시  모든 데이터를 Trim 한다
options.Cfg = {
    DataAutoTrim: true
};
```

### Read More
- [SearchMode cfg](/docs/props/cfg/search-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
|core|8.0.0.19|데이터 입력, `setValue` 시에도 공백처리 되도록 추가|
