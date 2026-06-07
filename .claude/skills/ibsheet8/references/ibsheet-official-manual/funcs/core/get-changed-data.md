---
KEY: getChangedData
KIND: method
PATH: funcs/core/get-changed-data
ALIAS: sheet.getChangedData, getChangedData(), 시트, 내에, 변경된, 내용, 입력
ALIAS_EN: get, changed, data, sheet, grid, input, import
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-changed-data
---
# getChangedData ***(method)***

> 시트 내에 변경된 내용(입력,수정,삭제)을 json형식의 **문자열**로 추출합니다.

> 인자없이 호출시에는 전체 수정한 데이터를 모두 추출하고, row인자에 [데이터 로우 객체](/docs/appx/row-object)를 설정시 해당 행의 수정된 내용이 추출됩니다.

> 두번째 인자를 통해 PK가 되는 열들을 지정하면 해당 열은 수정 여부와 관계 없이 같이 추출됩니다.

> *이 함수는 행 전체 데이터가 추출되지 않고 수정이 이루어진 셀만 추출됨을 주의해 주세요.*

### Syntax
```javascript
string getChangedData(row, attrs, dataonly);
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|선택|[데이터 로우 객체](/docs/appx/row-object)|
|attrs|`array[string]`|선택|열이름을 갖는 배열 (ex:`["ColName1","ColName3"]`)|
|dataonly|`boolean`|선택|수정 여부 확인을 Sheet전체 영역과 Data영역만 대상으로 지정할 지 여부
`0(false)`:Sheet전체 영역 대상 지정(`default`)
`1(true)`:Data영역만 대상 지정|


### Return Value
***json 형식의 string***
```js
'{"Changes":[{"id":"AR4","Changed":1,"ColName1":"1234","ColName5":"ABCDE"},{"id":"AR12","Changed":1,"ColName2":"23456"},{"id":"AR15","Deleted":1},{"id":"0","Added":1,"ColName1":"2345","ColName2":"4567"...}]}'
```

### Example
```javascript
var chgData = JSON.stringify(sheet.getChangedData({attrs:["CONTRACTNO","RETURNDATE"]}), null, '\t');
//리턴된 JSON string (2건 수정되고 1건 삭제, 1건 신규)
/*
"{
  "IO": {},
  "Changes": [{
      "id": "AR5",
      "Changed": 1,
      "CONTRACTNO": "SS1944111234933",
      "RETURNDATE": "1325602800000",
      "CARNO": "52허571123"
    },
    {
      "id": "AR9",
      "Changed": 1,
      "CONTRACTNO": "SS1937111124325",
      "RETURNDATE": "1325430000000",
      "CARNO": "33"
    },
    {
      "id": "AR12",
      "Deleted": 1,
      "CONTRACTNO": "SS1140111240995",
      "RETURNDATE": "1326034800000"
    },
    {
      "id": "AR101",
      "Added": 1,
      "Def": "R",
      "Parent": "0",
      "Next": "AR14",
      "Prev": "AR13",
      "CONTRACTNO": "",
      "RETURNDATE": "",
      "SEQ": "14",
      "CHK": "0",
      "DELIVERYDEPTNAME": "",
      "CARNO": "32가1234",
      "CARNAMEMSTNAME": "투싼 현대",
      "RENTFEE": "",
      "RENTDATE": "",
      "PROMOCODE": "",
      "NO": "",
      "DISCOUNTRATE": "0",
      "NETSALEAMT": "0",
      "SALEVATAMT": "0",
      "SALEAMT": "0",
      "OBJCARNO": "",
      "DEPTNAME": "",
      "CARNAMEMSTNAME2": "",
      "UNIT24": "0",
      "ACCNO": "",
      "ACCPERSONNAME": "",
      "ACCDATE": "",
      "REPAIRNO": "",
      "REPAIRPERSONNAME": "",
      "STARTDATE": "",
      "ENDDATE": "",
      "cls1": "",
      "cls2": ""
    }]
}"
*/
//수정된 값이 없는 경우에는 아래와 같은 JSON string이 리턴됨
/*
{
  "IO": {},
  "Changes": []
}
*/
```

### Read More
- [acceptChangedData method](./accept-changed-data)
- [hasChangedData method](./has-changed-data)
- [getSaveJson method](./get-save-json)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.3.0.20|dataonly 인자 추|
