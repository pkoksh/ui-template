---
KEY: midWidth
KIND: config-property
PATH: props/cfg/mid-width
ALIAS: 중앙, 섹션의, 최대, 너비를, 설정합니다
ALIAS_EN: mid, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/mid-width
---
# MidWidth ***(cfg)***

> 중앙 열 섹션의 최대 너비를 설정합니다. 

> 열 섹션의 열들이 설정된 너비보다 큰 경우 스크롤바가 생성됩니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|중앙 섹션의 총 너비|


### Example
```javascript
options = {
    Cols:[
      {
        //열 헤더 설정
        Header: {
          Value: "No" // 헤더행의 SEQ 열에 해당하는 셀에 표시될 title 값
        },
        Name: "SEQ", // 행의 순서를 보여주는 열으로, 자동으로 순번이 시트에서 생성됩니다.
      },
      { // 열 헤더 설정
        Header: {
          Value: "회사명3" // 헤더행의 sCorp 열에 해당하는 셀에 표시될 title 값
        },
        Name: "sCorp",    // colName 열이름을 설정 (Data와 Matching)
        Type: "Text"      // 열 타입
      },
      ...
    ],
    Cfg :{
      MidWidth: 500,      // 중앙 열 섹션의 최대 너비 설정
    }
};
```

### Read More
- [LeftWidth cfg](./left-width)
- [RightWidth cfg](./right-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
