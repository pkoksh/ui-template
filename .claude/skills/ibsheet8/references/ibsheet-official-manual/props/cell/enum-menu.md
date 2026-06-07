---
KEY: enumMenu
KIND: cell-property
PATH: props/cell/enum-menu
ALIAS: 셀에서, 드랍리스트, 대신, 메뉴가, 보여지게
ALIAS_EN: enum, menu
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/enum-menu
---
# EnumMenu ***(cell)***
> [Type](/docs/appx/type)이 `Enum`인 셀에서 드랍리스트 대신 메뉴가 보여지게 끔 설정하고자 할때 사용합니다.

> `Menu`에 대한 자세한 내용은 appendix의 [Menu](/docs/appx/menu)속성을 참고해 주세요.


###
![EnumMenu](/assets/imgs/enumMenu.png "EnumMenu")
<!-- IMAGE: 스크린샷/예시 이미지 - EnumMenu -->

### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`object`|메뉴를 구성하는 json 객체|

### Example
```javascript
//Enum 열에 item을 설정한다.
{
    "data":[    ...
        {...
     	    CLSEnum: "|안산1|안산2|화성1|화성2|화성3|일산1|일산2",
            CLSEnumMenu : {
                Items: [
                    {
                        Menu: 1,
                        Name: "안산현장",
                        Items: [
                            {Name: "[안산1] 경기도 안산시 단원구 광덕3로 201",Value: "안산1"},
                            {Name: "[안산2] 경기도 안산시 단원구 신길동 1509",Value: "안산2"}
                        ]
                    },
                    {
                        Menu: 1,
                        Name: "화성현장",
                        Items: [
                            {Name: "[화성1] 경기도 화성시 반송동", Value: "화성1"},
                            {Name: "[화성2] 경기도 화성시 동탄대로22길 30", Value: "화성2"},
                            {Name: "[화성3] 경기도 화성시 산척동 283", Value: "화성3"},
                        ]
                    },
                    {
                        Menu: 1,
                        Name: "일산현장",
                        Items: [
                            {Name: "[일산1] 경기도 고양시 일산동구 정발산로82번길 10", Value: "일산1"},
                            {Name: "[일산2] 경기도 고양시 일산동구 장항동 1761", Value: "일산2"},
                        ]
                    }
                ]
            }
         },
        ...
    ]
}
```

### Read More
- [Enum col](/docs/props/cell/enum)
- [EnumKeys col](/docs/props/cell/enum-keys)
- [Menu appendix](/docs/appx/menu)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
