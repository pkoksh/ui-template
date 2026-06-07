---
KEY: exactCheck
KIND: config-property
PATH: props/cfg/exact-check
ALIAS: 타입, 컬럼에서, 정확한, 체크박스나, 라디오
ALIAS_EN: exact, check, radio
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/exact-check
---
# ExactCheck ***(cfg)***

> `Bool`, `Radio` 타입 컬럼에서 정확한 체크박스나 라디오 버튼이 아닌 셀의 빈 공간을 클릭할 때 체크/언체크가 되지 않도록 설정합니다. 

> [`HeaderCheck`](/docs/props/cfg/header-check) 사용하여 표시되는 헤더 체크박스에도 적용이 됩니다.


> **<mark>주의</mark> : 해당 속성과 관계없이 `Enum`이 설정된 `Radio` 컬럼에서는 라디오 버튼 옆 텍스트를 클릭해도 체크가 됩니다.**

> 헤더 체크박스 사용 시, `"Header": {"Value": "", "IconAlign": "Center"}`과 같이  헤더 체크박스 아이콘이 셀 가운데로 출력 되도록 설정하셔야 합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|셀 클릭으로 체크박스 클릭 (`default`)|
|`1(true)`|셀 클릭으로 체크박스 클릭 안됨|


### Example
```javascript
options.Cfg = {
    ExactCheck: true        // 체크박스 클릭에만 체크/언체크가 동작
};
```

### Read More
- [Type appendix](/docs/appx/type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.19|기능 추가|
|core|8.1.0.6|헤더 체크 기능 적용|
