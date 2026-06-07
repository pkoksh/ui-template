---
KEY: getUserData
KIND: method
PATH: funcs/core/get-user-data
ALIAS: sheet.getUserData, getUserData(), 함수, 호출시, 설정한, 데이터를, 리턴
ALIAS_EN: get, user, data, function, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-user-data
---
# getUserData ***(method)***

> IBSheet.create 함수 호출시 설정한 데이터를 리턴 합니다.

> data의 값이 없으면 조회한 데이터를 리턴 합니다.

> 수정한 데이터는 반영되어 추출되지 않습니다.


### Syntax
```javascript
object getUserData();
```

### Return Value
***array*** : 시트 생성시 초기화된 데이터 배열

### Example
```javascript
IBSheet.create({
    id: 'sheet', // 생성할 시트의 id
    el: 'sheetDiv', // 시트를 생성할 Dom 객체 및 id
    options: options, // 생성될 시트의 속성
    data: [{
        "ItemNo": 59993940,
        "Title": "공부머리 독서법",
        "Price": 14850,
        "Author": "최승필",
        "Publisher": "책구루",
        "Category1": "A0",
        "Category2": "AA1",
        "Category3": "AAB0"
        }
      ] // 생성될 시트의 정적데이터
});

//시트 초기화시 생성된 데이터를 확인합니다.
var data = sheet.getUserData();
//리턴된 data
[{
    "ItemNo": 59993940,
    "Title": "공부머리 독서법",
    "Price": 14850,
    "Author": "최승필",
    "Publisher": "책구루",
    "Category1": "A0",
    "Category2": "AA1",
    "Category3": "AAB0"
]
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
