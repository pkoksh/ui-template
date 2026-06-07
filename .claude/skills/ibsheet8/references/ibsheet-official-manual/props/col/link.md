---
KEY: link
KIND: column-property
PATH: props/col/link
ALIAS: 셀에, 데이터를, 태그로, 감싸고, 속성에
ALIAS_EN: link
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/link
---
# Link ***(col)***

> 셀에 데이터를 \<a> 태그로 감싸고 href 속성에 들어갈 URL을 설정합니다.

> `LinkBase`와 `LinkTarget` 속성을 같이 사용하여 상대경로나 클릭시에 target window를 설정할 수 있습니다.

> **이 옵션은 반드시 CanEdit가 0으로 설정되어야 동작합니다.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|클릭시 이동할 url|


### Example
```javascript
//열을 클릭시 특정 URL로 이동한다.
options.Cols = [
    ...
    {Type: "Text", Link: "/tMIS/dcp/ConfProc.do", LinkTarget: "_self", CanEdit: 0, Name: "sa_cfprc", Width: 100 ...},
    ...
];
```

### Read More
- [LinkBase col](/docs/props/col/link-base)
- [LinkTarget col](/docs/props/col/link-target)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
