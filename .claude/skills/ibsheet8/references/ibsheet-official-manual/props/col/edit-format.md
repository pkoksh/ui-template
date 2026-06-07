---
KEY: editFormat
KIND: column-property
PATH: props/col/edit-format
ALIAS: 사용자가, 셀을, 더블클릭하여, 편집모드로, 들어갔을때
ALIAS_EN: edit, format
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/edit-format
---
# EditFormat ***(col)***
> 사용자가 셀을 더블클릭하여 편집모드로 들어갔을때 보여 줄 포맷을 설정합니다

> 각 열의 [Type](/docs/appx/type)에 따라 설정 방법이나 동작이 달라집니다.
> 가장 쉽게 이해하자면 날짜 유형 포맷을 사용하는 열에서 "EditFormat":"ddMMyyyy"로 설정하면, 셀에 보여질때는 "2019-12-31"형식으로 보여지다가, 사용자가 셀의 데이터를 편집하려 할때는 "31122019"로 나타나게 됩니다.

> 포맷에 대한 자세한 내용은 [Format appendix](/docs/appx/format)을 참고해 주세요.
> `Int`나 `Float` 타입에선 %는 `EditFormat`에서 사용할 수 없습니다.


### Type
mixed( `string` \| `object`)

### Options
|타입|유형|사용방법 |
|---|---|---|
|`Text, Lines`|`object`|셀에서 더블클릭을 통해 편집모드로 들어갈때 원래의 값을 어떤 형식으로 보여줄지 설정합니다.
ex) "EditFormat":{"KOR":"대한민국", "JPN":"일본", "USA":"미국"}
셀의 값이 KOR일때 편집모드로 들어가면 대한민국으로 보여줌
![EditFormat Text](/assets/imgs/editFormatText.png)
<!-- IMAGE: 스크린샷/예시 이미지 - EditFormat Text -->|
|`Date`|`string`|편집시 보여질 년,월,일의 순서
ex) "EditFormat":"ddMMyyyy"
![EditFormat Date](/assets/imgs/editFormatDate.png)
<!-- IMAGE: 스크린샷/예시 이미지 - EditFormat Date -->|




### Example
```javascript
//특정 열에서  편집시 일월년 순으로 보여지게끔 설정
options.Cols = [
    ...
    {Type: "Date", Format: "yyyy-MM-dd", EditFormat: "ddMMyyyy", Name: "enterDate",Width: 120 ...},
    ...
];
```

### Read More
- [Format col](./format)
- [DataFormat col](./data-format)
- [EditFormat cell](/docs/props/cell/edit-format)
- [Format appendix](/docs/appx/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
