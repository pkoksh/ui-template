---
KEY: setCurrentInfo
KIND: method
PATH: funcs/core/set-current-info
ALIAS: sheet.setCurrentInfo, setCurrentInfo(), 시트, 컬럼, 정보, 문자열을, 현재
ALIAS_EN: set, current, info, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-current-info
---
# setCurrentInfo ***(method)***
> 시트 컬럼 정보 문자열을 통해 현재 시트를 재구성하는 메소드입니다.

### Syntax
```javascript
string setCurrentInfo( info );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|info |`string`|필수|현재 시트 컬럼에 적용하고 싶은 시트 정보|

### Return Value
***boolean***

### Example
```javascript
var info = '[[["SEQ"],["sCheck","sNation","sTitle","sShare","sCount","sDate"],[]],{"SEQ":{"Visible":1,"Width":60,"RelWidth":0,"UserHidden":false},"sCheck":{"Visible":1,"Width":61,"RelWidth":0,"UserHidden":false},"sNation":{"Visible":1,"Width":85,"RelWidth":0,"UserHidden":false},"sTitle":{"Visible":1,"Width":1371,"RelWidth":1,"UserHidden":false},"sShare":{"Visible":1,"Width":60,"RelWidth":0,"UserHidden":false},"sCount":{"Visible":1,"Width":95,"RelWidth":0,"UserHidden":false},"sDate":{"Visible":1,"Width":120,"RelWidth":0,"UserHidden":false}},""]' // getCurrentInfo에서 얻은 결과와 같은 형식

sheet.setCurrentInfo( info );
```

### Read More
- [getCurrentInfo method](./get-current-info)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
