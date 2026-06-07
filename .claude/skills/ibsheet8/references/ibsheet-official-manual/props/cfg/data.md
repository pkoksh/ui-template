---
KEY: data
KIND: config-property
PATH: props/cfg/data
ALIAS: 서버나, 특정경로에서, 데이터를, 가져오거나, 수정된
ALIAS_EN: data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/data
---
# !Data ***(cfg)***

> 서버나 특정경로에서 데이터를 가져오거나 수정된 데이터를 보내려면, 시트 생성 시 `Cfg`에 데이터 통신과 관련된 속성을 설정해줘야 합니다.

> 서버페이징 방식으로 조회하거나, 시트를 생성하면서 Data 속성을 지정하여 데이터를 조회하려는 경우에 

> 서버와 바로 통신하여 조회 데이터를 가져올 수 있습니다. 

> `Param(object 형)` 이나 `Params(string)` 속성은 둘중 하나만 설정 합니다.




### Type
`object`

### Info
|Name|Type|Description|
|---------|----|-----------|
|Url|`string`|데이터를 조회하는 경로(연결할 서버 혹은 파일의 주소)|
|Relative|`boolean`|주소의 상대경로 유무. 0: 실제주소(절대경로) / 1: ibsheet.js 기준 상태경로|
|Method|`string`|주소로 접근할때 통신방식을 지정. POST/GET (`default: "GET"`)|
|Param|`object`|전송 받거나 보낼 데이터의 파라미터를 설정(객체형)|
|Params|`string`|전송받거나 보낼 데이터의 파라미터를 설정(문자열형)|
|Header|`object`|http 헤더에 사용자가 지정한 헤더 정보를 설정|


### Example
```javascript
options.Cfg.Data = {
   Url: 'http://www.ibsheet.com/projects/IB/manual.jsp',
   Relative: 0,   // 주소의 상대경로 유무
   Method: 'POST',
   //Param: { Name: "James", Age: "32" },
   Params: "Name=James&Age=32",
   Header: { Auth: "Basic login:password", Products: "IBSheet8" } // 헤더 정보
};
```

### Read More
- [Export cfg](./export)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
