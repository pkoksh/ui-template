---
KEY: iconAlias
KIND: cell-property
PATH: props/cell/icon-alias
ALIAS: 접근성, 모드에서, 속성의, 값이, 이미지
ALIAS_EN: icon, alias
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/icon-alias
---
# !IconAlias ***(cell)***

> 웹 접근성 모드에서 [Icon](/docs/props/cell/icon)속성의 값이 이미지 파일에 대한 url 인 경우 아이콘 기능 및 동작에 대한 대체 텍스트를 설정할 수 있습니다. 

> 해당 옵션 설정시 스크린 리더에서 설정된 값으로 안내 합니다. 

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|IconAlias|아이콘의 대체 텍스트로 표시될 문자열|


### Example
```javascript
//조회 데이터 내에서 속성 적용  (열이름: CLS )
{
    data:[
        {... , ClsIcon: "/pcd/img/popIcon.png", ClsIconAlias: "팝업 아이콘", ...}
    ]
}
```

### Read More
- [Accessibility cfg](/docs/props/cfg/accessibility)
- [Icon col](/docs/props/col/icon)
- [IconAlias col](/docs/props/col/icon-alias)
- [Icon cell](/docs/props/cell/icon)

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
