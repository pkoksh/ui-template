---
KEY: menuItems
KIND: cell-property
PATH: props/cell/menu-items
ALIAS: 셀의, 보여질, 필터, 아이콘, 메뉴를
ALIAS_EN: menu, items, filter, icon
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/menu-items
---
# MenuItems ***(cell>Filter)***

> Filter 셀의 보여질 필터 아이콘 메뉴를 셀 별로 설정 할 수 있습니다.



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`items`|보여질 아이콘 번호를 "," 로 연결한 문자열|

**operators 상세설명**

|value|type|desc|
|---|---|---|
|`0`|공통|필터를 사용하지 않음|
|`1`|공통|같다|
|`2`|공통|같지않다|
|`3`|숫자, 날짜|작다|
|`4`|숫자, 날짜|작거나 같다|
|`5`|숫자, 날짜|크다|
|`6`|숫자, 날짜|크거나 같다|
|`7`|문자|앞글자 일치|
|`8`|문자|앞글자가 일치하지 않음|
|`9`|문자|뒷글자 일치|
|`10`|문자|뒷글자 일지하지 않음|
|`11`|문자|해당 글자 포함|
|`12`|문자|해당 글자 포함하지 않음|
|`13`|숫자|상위 10|
|`14`|공통|값 있음|
|`15`|공통|값 없음|

### Example
```javascript
// "RENTDATE" 컬럼에 보여질 아이콘 설정
options.Filter = [
    RENTDATE: {
        MenuItems: "0,1,2,3,4,5,6,7,8,9,10,11,12"
    },
];
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.27|13 기능 추가|
|core|8.1.0.27|14,15 기능 추가|
