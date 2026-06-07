---
KEY: radio
KIND: cell-property
PATH: props/cell/radio
ALIAS: 셀들, 간에, 같은, 값을, 부여한
ALIAS_EN: radio
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/radio
---
# Radio ***(cell)***
> [Type](/docs/appx/type)이 `Bool`인 셀들 간에 같은 값을 부여한 값을 갖고 있는 셀들을 하나의 그룹으로 묶여서 한 행에서 같은 그룹 내에 한 셀만 체크 가능하게 합니다.


###
![Radio](/assets/imgs/radio.png "같은 행에서 하나만 선택 가능")
<!-- IMAGE: 스크린샷/예시 이미지 - Radio -->

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|라디오처럼 하나로 묶을 그룹 인덱스|




### Example
```javascript
//조회 데이터 내에서 설정 적용
//CLS1,CLS2,CLS3 열에서 단일 셀만 선택 가능하게 끔 설정
{
    data:[
        {..., "CLS1Radio":"1", "CLS2Radio":"1", "CLS3Radio":"1" ...},
        ...
    ]
}
```

### Read More
- [BoolGroup cell](./bool-group)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
