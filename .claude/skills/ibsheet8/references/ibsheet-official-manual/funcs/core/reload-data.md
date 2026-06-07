---
KEY: reloadData
KIND: method
PATH: funcs/core/reload-data
ALIAS: sheet.reloadData, reloadData(), 시트의, 데이터를, 처음, 생성, 시점으로
ALIAS_EN: reload, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/reload-data
---
# reloadData ***(method)***
> 시트의 데이터를 처음 생성 시점으로 되돌립니다.

> 다시 말해 [IBSheet.create()](/docs/static/create)함수를 통해 로드된 데이터로 되돌립니다.

> 생성 후 열에 부여한 속성(색상이나 편집가능 여부 등)은 유지되나, 행이나 셀에 부여한 속성은 초기화 됩니다.

> 이 함수는 `Head, Foot, Solid` 영역에는 영향을 주지 않습니다.

### Syntax
```javascript
void reloadData( func );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|func |`function`|선택|리로드 완료 후 콜백 정의|

### Return Value
***none***

### Example
```javascript
if(confirm("작업한 내용을 취소하고 처음 조회된 데이터로 되돌리시겠습니까?")){
    sheet.reloadData(
        function(){ alert("데이터가 초기화 되었습니다."); }
    );
}
```

### Read More

- [reload method](./reload)
- [create static](/docs/static/create)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
