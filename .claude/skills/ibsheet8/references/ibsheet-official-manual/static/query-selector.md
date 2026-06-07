---
KEY: querySelector
KIND: static-member
PATH: static/query-selector
ALIAS: 선택자에, 따라, 태그를, 반환하는, 함수를
ALIAS_EN: query, selector
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/static/query-selector
---
# QuerySelector ***(static)***

> CSS 선택자에 따라 HTML 태그를 반환하는 함수를 설정합니다. 

> 
> 시트가 `ShadowDOM` 내부에 들어가 있으면 시트가 `document.getElementById`를 통해 시트 내부의 태그에 접근할 수가 없습니다. 

>
> 이때 `IBSheet.QuerySelector`를 설정하여 시트가 시트 자체 내부의 태그에 접근 가능하도록 해당 옵션을 설정할 필요가 있습니다. 

>
> 해당 옵션은 시트를 처음 생성할 때 설정해야 하며, 이후에는 동적으로 변경할 수 없습니다. 


### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`object`|CSS 선택자에 따라 HTML 태그를 반환하는 함수|

### Example
```javascript
IBSheet.QuerySelector = shadow.querySelector.bind(shadow); // 시트가 시트 내부의 태그에 접근할 수 있도록 querySelector를 별도로 지정
```

### Read More
- [ControlsTag cfg](/docs/props/cfg/controls-tag)
- [DialogsArea cfg](/docs/props/cfg/dialogs-area)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.0|기능 추가|