---
KEY: use_classStyle
KIND: config-property
PATH: props/cfg/use_class-style
ALIAS: 시트에, 속성이, 설정되어, 있는, 경우
ALIAS_EN: use_class, style
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/use_class-style
---
# UseClassStyle ***(cfg)***

> 시트에 class 속성이 설정되어 있는 경우, 해당 class에 지정된 CSS에서 height와 width 값을 읽어 시트 생성 시 너비와 높이에 적용합니다.

> 너비와 높이가 적용되는 우선순위는 style속성 > class속성 > 기본 값 순으로 적용됩니다.

> 각 항목에 설정된 값이 없을 경우, 다음 순서로 우선순위가 넘어갑니다.

> <mark>*너비는 **100%**, 높이는 **800px**를 기본값으로 갖습니다.</mark>*


> **<mark>주의</mark> : 이 기능은 `단일 Class` 정보만을 대상으로 동작합니다.**



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|기능 사용 안함 (`default`)|
|`1(true)`|시트 div에 선언된 class 정보를 확인하여, 시트의 너비와 높이에 적용|


### Example
```javascript
options.Cfg = {
    UseClassStyle: true, // 시트 div에 style 정보가 없을 경우, class에 선언된 css 클래스들을 확인하여 width와 height를 시트 너비와 높이에 적용
};
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.37|기능 추가|
