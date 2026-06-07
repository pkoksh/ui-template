---
KEY: col
KIND: guide
PATH: start/col
ALIAS: 열, 구조에, 대한, 이해, 시트를
ALIAS_EN: col, column
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/start/col
---
# 열(Col) 구조에 대한 이해

> 시트를 세로로 나누면 `Left`, `Center`, `Right` 영역(Section)으로 나누어 집니다.

> 각각의 영역은 고유하게 스크롤을 갖을 수 있고 각 영역 간에 이동도 가능합니다.

## 열 생성

시트 생성시 `LeftCols, Cols, RightCols` 에 각 열에 대한 기능을 정의하면 원하는 개수만큼 열을 생성할 수 있습니다. 

단, **SEQ 열은 항상 자동으로 생성되며 별도로 Name: "SEQ" 인 열을 설정하지 않으면 LeftCols에 Hidden 상태로 생성됩니다.**
 [sheet.showCol('SEQ');](/docs/funcs/core/show-col) 로 숨겨진 `SEQ 열`을 확인 할 수 있습니다.

빈번하게 사용될 것 같은 열의 기능은 [Extend](/docs/props/col/extend)를 통해 여러개 열에 동일하게 적용하실 수 있습니다.


```javascript
var options =
{
    "Cfg": {        //전역 기능 설정(cfg property)
        "LeftCanResize": 1, "LeftWidth": 100, "RightCanResize": 1, "RightWidth": 100
    },

    LeftCols: [     //왼쪽영역(LeftSection) 고정 열 설정 (col property)
        {"Header": "NO", "Type": "Int", "Name": "SEQ", "Width": 50},
        {"Header": "선택", "Type": "Bool", "CanEdit": 1,"Name": "chk", "Width": 50},
        {"Header": "년도", "Name": "Year", "Type": "Text", "Align": "Center", "Width": 70}
    ],

    Cols: [         //가운데 영역
        {"Header": "매출", "Name": "revenue", "Type": "Int", "Width": 120, "Format": "#,### 백만원"},
        {"Header": "매출원가", "Name": "revenueOrg", "Type": "Int", "Width": 120, "Format": "#,### 백만원"},
        {"Header": "판매관리비", "Name": "salesMgr", "Type": "Int", "Width": 120, "Format": "#,### 백만원"},
        {"Header": "영업이익", "Name": "oprIncome", "Type": "Int", "Width": 120, "Format": "#,### 백만원", Formula: "revenue-revenueOrg-salesMgr", Color: "#DEDEDE"}
    ],

    RightCols: [    //오른쪽영역(RightSection) 고정 열 설정 (col property)
        {"Header": "금융손실", "Name": "finloss", "Type": "Int", "Width": 120, "Format": "#,### 백만원"},
        {"Header": "법인세", "Name": "corpTax", "Type": "Int", "Width": 120, "Format": "#,### 백만원"},
        {"Header": "순이익", "Name": "INCOME", "Type": "Int", "Width": 120, "Format": "#,### 백만원", Formula: "oprIncome-finloss-corpTax", Color: "#DEDEDE"}
    ]
};
```
![섹션](/assets/imgs/section2.png "section")
<!-- IMAGE: 스크린샷/예시 이미지 - 섹션 -->

[`좌측,가운데,우측 영역`]

각 영역에 대한 너비는 `Cfg`에서 [LeftWidth](/docs/props/cfg/left-width), [RightWidth](/docs/props/cfg/right-width)를 통해 설정하게 됩니다.

다만, 시트의 너비가 충분히 커서 가로스크롤바가 필요 없는 경우에는 위 설정은 무시됩니다.

영역과 영역사이는 원래 붙어 있으며, 사용자가 직접 영역의 크기를 조절할 수 있게 하려면 `Cfg`에서 [LeftCanResize](/docs/props/cfg/left-can-resize), [RightCanResize](/docs/props/cfg/right-can-resize)을 설정하시면 됩니다.

## 열 기능 변경

이미 생성된 열에 대해서 설정을 확인하거나 기능을 수정하거나 추가할 수 있습니다.
```javascript
var col = sheet.Cols["finloss"];    //Name이 finloss인 열 객체 얻기

// 열에 설정된 색상 확인
console.log(col["Color"]);

// 열에 속성 변경
col["TextColor"] = "#FF0000";       //열에 색상 정의
col["CanSelect"] = 0;               //열에 대한 선택 불가(드래그시 선택이 안됨)
sheet.rerender();                   //변경내용 반영
```
다만 위와 같이 직접 열에 속성에 직접 접근하여 속성값을 변경하는 경우 시트내에서 이를 감지하지 못하여 예상치 못한 문제가 발생할 수 있으므로 가급적 [getAttribute](/docs/funcs/core/get-attribute)나 [setAttribute](/docs/funcs/core/set-attribute) 함수를 사용하실 것을 권해드립니다.


## 빈번하게 사용되는 열 유형에 대해서 **Extend** 기능 활용

프로젝트에서 자주 사용될 것 같은 기능을 갖은 열, 가령 "yyyy-MM-dd" 형식의 Date열이나 "$ 12.33"와 같은 통화 형식의 Float열을 공통으로 정의해 두고 각 화면에서는 미리 정의해둔 설정을 불러다 사용하실 수 있습니다.



[`ibsheet-common.js` 파일에 공통기능을 정의한 IB_Preset 이 있습니다.]
```javascript
var IB_Preset = {
  "YMD": {Type: "Date", Width: 110, Align: "Center", Format: "yyyy-MM-dd",  DataFormat: "yyyyMMdd", EditFormat: "yyyyMMdd"},
  "YM": {Type: "Date", Width: 90, Align: "Center", Format: "yyyy-MM", DataFormat: "yyyyMM", EditFormat: "yyyyMM"},
  "USD":{Type: "Float", Width: 100, Format: "$ #,###.##"},
   ....
};
```
[각 페이지에서 시트 초기화 구문]
```javascript
var options = {
    Cols:[
        ///Extend를 통해 미리 정의한 Type,Format 등의 설정을 적용
        {Header: "국외수입", Name: "Income", Extend: IB_Preset.USD},
        {Header: "취득일", Name: "ICDate", Extend: IB_Preset.YMD}
    ]
}

```

### Read More
- [LeftWidth cfg](/docs/props/cfg/left-width)
- [RightWidth cfg](/docs/props/cfg/right-width)
- [LeftCanResize cfg](/docs/props/cfg/left-can-resize)
- [RightCanResize cfg](/docs/props/cfg/right-can-resize)
- [Extend col](/docs/props/col/extend)
- [showCol method](/docs/funcs/core/show-col)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
