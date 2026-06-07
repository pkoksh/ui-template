---
KEY: jsonDataSep
KIND: config-property
PATH: props/cfg/json-data-sep
ALIAS: 조회, 데이터의, 두번째, 연결하는, 문자열을
ALIAS_EN: json, data, sep, search, query, fetch, load, retrieve
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/json-data-sep
---
# !JsonDataSep ***(cfg)***

> 조회 데이터의 Json 두번째 depth를 연결하는 문자열을 지정합니다.

> <mark>2 depth 이상의 데이터는 성능 저하의 문제로 지원하지 않습니다.</mark>

### Type
`string`


### Example
```javascript
// 조회, 저장 데이터
[
	{
	  "audit": {
	    "createdBy": 1,
	    "modifiedBy": 1,
	    "createdDateTime": "2021-01-12",
	    "modifiedDateTime": "2021-01-12",
	    "INFO":{
	      "since": 2001,
	      "tCode": "E06"
	    }
	  },
	  "salesProgressStatus": "abc",
	  "clientsCompany": "cadCom",
	}
]

// 조회 데이터가 위의 구조를 가질 경우
// 시트 옵션 설정
Cfg: {
  JsonDataSep: '$',
},
Cols: [
  {
    Header: '심사여부',
    Name: 'audit$createdBy',
    Type: 'Bool',
  },
  {
    Header: '수정여부',
    Name: 'audit$modifiedBy',
    Type: 'Bool',
  },
  {
    Header: 'createdDate',
    Name: 'audit$createdDateTime',
    DataFormat: 'yyyy-MM-dd',
    Type: 'Date',
  },
  {
    Header: 'modifiedDate',
    Name: 'audit$modifiedDateTime',
    DataFormat: 'yyyy-MM-dd',
    Type: 'Date',
  },
  {
    Header: 'salesProgress',
    Name: 'salesProgressStatus',
    Type: 'Text',
  },
  {
    Header: 'clientsCompany',
    Name: 'clientsCompany',
    Type: 'Text',
  }
]
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.14|기능 추가|
