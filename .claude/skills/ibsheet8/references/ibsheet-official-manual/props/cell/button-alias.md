---
KEY: buttonAlias
KIND: cell-property
PATH: props/cell/button-alias
ALIAS: 접근성, 모드에서, 속성의, 값이, 이미지
ALIAS_EN: button, alias
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/button-alias
---
# !ButtonAlias ***(cell)***

> 웹 접근성 모드에서 [Button](/docs/props/cell/button)속성의 값이 이미지 파일에 대한 url 인 경우 버튼 기능 및 동작에 대한 대체 텍스트를 설정할 수 있습니다. 

> 해당 옵션 설정시 스크린 리더에서 설정된 값으로 안내 합니다. 

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|ButtonAlias|버튼의 대체 텍스트로 표시될 문자열|


### Example
```javascript
//조회 데이터 내에서 속성 적용  (열이름: CLS )
{
    data:[
        {... , ClsButton: "/pcd/img/popIcon.png", ClsButtonAlias: "팝업 아이콘", ...}
    ]
}
```

### Read More
- [Accessibility cfg](/docs/props/cfg/accessibility)
- [Button col](/docs/props/col/button)
- [ButtonAlias col](/docs/props/col/button-alias)
- [Button cell](/docs/props/cell/button)

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
