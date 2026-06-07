---
KEY: suggestMin
KIND: cell-property
PATH: props/cell/suggest-min
ALIAS: 설정한, 메뉴를, 보여주기, 위한, 최소
ALIAS_EN: suggest, min
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/suggest-min
---
# SuggestMin ***(cell)***

> [Suggest](/docs/props/cell/suggest)을 통해 설정한 메뉴를 보여주기 위한 최소 글자수를 입력합니다. 

> 설정을 하지 않으면 한글자라도 입력시 바로 `Suggest`목록이 보여지게 됩니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|최소 입력 글자수 (`default: 1`)|



### Example
```javascript
//Suggest기능 사용
options.Cols = [
    ...
    {
        Type: "Text",
        Suggest: "|싼타페 현대|포터2 현대|그랜저 현대|카니발 기아...",
        SuggestMin: 3,//세글자 이상 입력시 Suggest 기능 활성화
        Name: "CarName",
        Width: 120 ...
    },
    ...
];
```

### Read More
- [Suggest cell](./suggest)
- [SuggestType cell](./suggest-type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
