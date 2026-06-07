---
KEY: numberStrictMode
KIND: cell-property
PATH: props/cell/number-strict-mode
ALIAS: 으로, 설정, 조회, 숫자, 타입
ALIAS_EN: number, strict, mode, config, setting, option, search, query
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/number-strict-mode
---
# NumberStrictMode ***(cell)***

> 0(false)으로 설정 시 조회 시 숫자 타입(Int, Float)에 빈 값이나 숫자 형태가 아닌 경우 0으로 처리합니다.

> 천단위 구분자 ","가 포함된 문자열 형태의 숫자를 입력하는 경우 숫자로 표시됩니다.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|숫자가 아닌 데이터에 대해 엄격하게 검사하지 않음. 숫자가 아닌 경우 NaN 대신 0으로 표시|
|`1(true)`|숫자 타입 셀에서 데이터의 타입에 대해 엄격하게 검사. 숫자형태가 아닌 경우 NaN으로 표시 (`default`)|


### Example
```javascript
// 1. 메소드를 통해 특정 셀에 속성 적용 ( 열이름 : IntData )
sheet.setAttribute( sheet.getRowById("AR99") , "IntData" , "NumberStrictMode" , false);


// 2. 객체에 직접 접근해서 속성 적용 ( 열이름 : IntData )
var ROW = sheet.getRowById("AR10");
ROW["IntDataNumberStrictMode"] = false;
//변경내용 확인
sheet.refreshCell({row:ROW, col:"IntData"});


// 3. 조회 데이터 내에서 속성 적용 ( 열이름 : IntData )
{
    data:[
        {... , "IntDataNumberStrictMode":false , ...}
    ]
}
```

### Read More

- [Type appendix](/docs/appx/type)
<!--!
- `[비공개]` [NumberStrictMode col](/docs/props/col/number-strict-mode)
!-->

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.17|기능 추가|
