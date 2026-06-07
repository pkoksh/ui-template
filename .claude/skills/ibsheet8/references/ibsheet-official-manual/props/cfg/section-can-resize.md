---
KEY: sectionCanResize
KIND: config-property
PATH: props/cfg/section-can-resize
ALIAS: 사용자가, 섹션, 사이를, 드래그하여, 너비를
ALIAS_EN: section, can, resize
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/section-can-resize
---
# SectionCanResize ***(cfg)***

> 사용자가 섹션 사이를 드래그하여 섹션 너비를 조정할 수 있게 할 것인지 여부를 설정합니다. 

> 해당 옵션을 설정하면 섹션과 섹션 사이에 Splitter 영역이 생성됩니다.

> 왼쪽 고정 열 섹션(`LeftCols`) 과 오른쪽 고정 열 섹션(`RightCols`) 이 설정되어 있고, 각 섹션 별로 가로 스크롤이 생기는 경우에 각 섹션 너비 조절 기능이 동작합니다.

> 섹션 너비 조절이 가능해지면 Splitter 영역에 마우스 호버시 마우스 포인터 모양이 변경되며, 너비 변경 시 Cfg에서 설정한 [LeftWidth](./left-width)와 [MidWidth](./mid-width), [RightWidth](./right-width)는 자동 조절됩니다. 


###
![너비조정](/assets/imgs/section3.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 너비조정 -->


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|너비 조정 안됨 (`default`)|
|`1`|왼쪽, 중앙, 오른쪽 중 섹션에 스크롤바가 있는 경우 항상 조절 가능|

### Example
```javascript
options = {

    Cfg :{
      SectionCanResize: 1      // 왼쪽, 중앙, 오른쪽 섹션 너비 조정 허용
    },
    LeftCols:[
      {
        //열 헤더 설정
        Header: {
          Value: "No" // 헤더행의 SEQ 열에 해당하는 셀에 표시될 title 값
        },
        Name: "SEQ", // 행의 순서를 보여주는 열으로, 자동으로 순번이 시트에서 생성됩니다.
      }
    ],
     Cols:[
      {
        Header: {
          Value: "금년매출"
        },
        Name: "sYear",
        Type: "Int",
        Format: "#,##0"
      },
    ...
    ],
    RightCols:[
      {
        Header: {
          Value: "회사명"
        },
        Name: "sCompany",
        Type: "Text",
      },
    ...
    ]
};
```

### Read More
- [LeftWidth cfg](./left-width)
- [MidWidth cfg](./mid-width)
- [RightWidth cfg](./right-width)
- [setFixedCols method](/docs/funcs/core/set-fixed-cols)
- [setFixedLeft method](/docs/funcs/core/set-fixed-left)
- [setFixedRight method](/docs/funcs/core/set-fixed-right)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
