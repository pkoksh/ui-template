---
KEY: getCols
KIND: method
PATH: funcs/core/get-cols
ALIAS: sheet.getCols, getCols(), 시트가, 갖고있는, 열을, 같은, 배열형태로
ALIAS_EN: get, cols
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-cols
---
# getCols ***(method)***
> 시트가 갖고있는 열을 ['colName1','colName2']와 같은 배열형태로 추출합니다. 

> 두개의 인자를 통해 특정 속성을 모두 갖고있는 열들을 찾을 수도 있습니다.

> 전체 열의 개수를 알고자 할때도 이 함수를 사용하실 수 있습니다.


> **<mark>주의</mark> : getCols()를 통해서 찾을수 있는 속성은 반드시 시트 생성시 Cols를 통해 부여한 값만을 찾을 수 있습니다.**

> 가령 열의 편집가능여부 기본값이 `1(true)`라고 하더라도, Cols를 통해 열 생성시 `CanEdit:1`을 별도로 부여하지 않았으면 찾을 수 없습니다.


> **`SEQ`컬럼을 설정하지도 않았더라도 포함하여 리턴 합니다.**




### Syntax
```javascript
array getCols( attr1, attr2, seq );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|attr1|`string`|선택|찾고자 하는 속성명 (`attr1` 속성을 선언하지 않으면 모든 열이 추출됨)|
|attr2|`string`|선택|찾고자 하는 속성명 (`attr1` 과 `attr2` 를 모두 갖고 있는 열이 리턴)|
|seq|`boolean`|선택|설정하지 않은 SEQ 컬럼 포함 여부
`0(false)`:설정하지 않은 SEQ 컬럼 포함 (`default`)
`1(true)`:설정하지 않은 SEQ 컬럼 미포함|


### Return Value
***array[string]*** : 열이름 배열

### Example
```javascript
//현재 보여지는 모든 열을 찾습니다.
var vCol = sheet.getCols("Visible");

//현재 보여지면서 편집도 가능한 열을 찾습니다.
var veCol = sheet.getCols("Visible","CanEdit");
//return
//["ColName1","ColName3" ... ]

//설정하지 않은 SEQ는 제외하고 열 추출, 8.1.0.38버전에서 추가된 기능
var veCol = sheet.getCols("","",1);
var veCol = sheet.getCols({seq:1});
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.38|seq 추가|
