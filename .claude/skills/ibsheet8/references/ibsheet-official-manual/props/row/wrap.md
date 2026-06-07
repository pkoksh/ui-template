---
KEY: wrap
KIND: row-property
PATH: props/row/wrap
ALIAS: 셀의, 내용이, 열의, 너비보다, 많은
ALIAS_EN: wrap
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/wrap
---
# Wrap ***(row)***

> 셀의 내용이 열의 너비보다 많은 경우 줄넘김을 통해 표현할지 여부를 설정합니다.(css의 white-space속성)

> 줄넘김이 발생할때 행의 높이가 자동으로 조절됩니다.

> 일반적으로 `Text` 타입에서 사용하며, `Radio` 타입에서도 사용하실 수 있습니다.

> [Lines 타입](/docs/appx/type) 컬럼에서는 `default: 1(true)`로 설정됩니다.

<!--! > 대용량 모드에서는 [SearchMode:0](/docs/props/cfg/search-mode)은 데이터행의 높이에 동적인 경우에 대해 지원하지 않으므로 해당 기능을 사용할 수 없습니다.
!-->

###
![Wrap:0(false)](/assets/imgs/wrap0.png "Wrap:0(false) 설정시")
<!-- IMAGE: 스크린샷/예시 이미지 - Wrap:0(false) -->

[`Wrap:0(false)` 설정시]


![Wrap:1(true)](/assets/imgs/wrap1.png "Wrap:1(true) 설정시")
<!-- IMAGE: 스크린샷/예시 이미지 - Wrap:1(true) -->

[`Wrap:1(true)` 설정시]

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|줄넘김 사용 안함 (`white-space:nowrap`)|
|`1(true)`|줄넘김 사용 (`white-space:normal`)|

### Example
```javascript
//특정행에 Wrap를 허용
var row = sheet.getRowById("AR33");
row["Wrap"] = 1;
sheet.refreshRow(row);

//전체 데이터 행에 대해 줄넘김 허용.
options.Def.Row = {"Wrap": 1};
```

### Read More
- [TextStyle row](./text-style)
- [TextColor row](./text-color)
- [TextFont row](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
