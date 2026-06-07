---
KEY: menu
KIND: column-property
PATH: props/col/menu
ALIAS: 마우스, 우측, 버튼, 클릭시, 보여질
ALIAS_EN: menu
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/menu
---
# Menu ***(col)***
> 마우스 우측 버튼 클릭시 보여질 컨텍스트 메뉴를 설정합니다.



### Type
mixed( `object` \| `string` )

### Options
|Value|Description|
|-----|-----|
|`string`|첫글자를 구분자로 한 컨텍스트 메뉴스트링 지정  (ex: @저장@임시저장@취소 or *상신*취소) |
|`object`|[Menu Object 설정 링크 참고](/docs/appx/menu)

### Example
```javascript
//procs 열에서 마우스 우측버튼 클릭시 보여질 메뉴 설정
options.Cols = [
    ...
    {Type: "Text", Menu: "|진행|반려|전결|보류", Name: "procs", Width: 120 ...},
    ...
];
```

### Read More
- [Menu appendix](/docs/appx/menu)
- [MenuHSeparator cfg](/docs/props/cfg/menu-h-separator)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
