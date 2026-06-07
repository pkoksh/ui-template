---
KEY: onBeforeCreate
KIND: static-member
PATH: static/on-before-create
ALIAS: 함수가, 호출되고, 시트가, 생성되기, 전에
ALIAS_EN: on, before, create
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/static/on-before-create
---
# onBeforeCreate ***(static)***

> [(Static) IBSheet.create()](./create)함수가 호출되고 시트가 생성되기 전에 전달되는 `parameter(el, id, options 등)`를 수정할 수 있는 일종의 이벤트 입니다.

> [(Static) IBSheet.CommonOptions](./common-options)와 시트 생성에 사용되는 옵션이 머지된 `options`를 `parameter`로 받습니다.

> 해당 함수를 직접 구현하여 `options`에 설정되어야 할 프로젝트의 공통적인 내용을 정의하거나 수정할 수 있습니다.

> <mark>해당 함수를 사용 시에는 반드시 수정된 parameter객체를 리턴해 주어야 정상적으로 시트가 생성됩니다.</mark>

### Syntax
```javascript
IBSheet.onBeforeCreate = function(obj){
    ...
};
```

### Parameters
| Name | Type | Description |
|----------|----|----|
|id|`string`|시트 객체 `id`|
|el|`string`|시트가 생성될 div객체의 `id`|
|options|`object`|시트 초기화 정보를 담고있는 `json object`|
|data|`array[object]`|시트 생성과 동시에 로드될 `데이터 배열`|

### Return Value
***object*** : `options` 인자로 받은 받은 내용을 일부 수정하거나 그대로 리턴

### Example
```javascript
//ibsheet 초기화 공통 설정
IBSheet.onBeforeCreate = function (obj) {
    //모든 화면의 시트에 기본 컨택스트 메뉴를 설정한다.
    obj.options["Def"]["Row"]["Menu"] = {
        Items:[
            {Name: "행 추가"},
            {Name: "행 삭제"},
            {
                Menu: 1,
                Name: "파일 저장",
                Items: [
                    {Name: "엑셀 다운로드", Icon: "./images/xls.gif"},
                    {Name: "Text 다운로드", Icon: "./images/txt.gif"},
                    {Name: "PDF 다운로드", Icon: "./images/pdf.gif"},
                ]
            }
        ]
    };
    obj.options["Events"]["onSelectMenu"] = function (evt) {
        switch (evt.result) {
            case "행 추가":
                evt.sheet.addRow({next: evt.row, visible: 1})
            break;
            case "행 삭제":
                evt.sheet.deleteRow({row: evt.row, del: 1});
            break;
        }
    }
    return obj;
}
```
### Read More
 - [IBSheet.create static](./create)
 - [IBSheet.CommonOptions static](./common-options)
 - [공통 이벤트(event) 처리 방법](/docs/appx/shared-event)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.5|`beforeCreate` -> `onBeforeCreate`로 이름 변경 (기존 `beforeCreate`도 사용 가능하지만 추천하지 않습니다.)|