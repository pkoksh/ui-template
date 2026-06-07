---
KEY: leftWidth
KIND: config-property
PATH: props/cfg/left-width
ALIAS: 왼쪽, 고정, 섹션의, 최대, 너비를
ALIAS_EN: left, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/left-width
---
# LeftWidth ***(cfg)***

> 왼쪽 고정 열 섹션의 최대 너비를 설정합니다. 

> 왼쪽 고정 열 섹션의 열들이 설정된 너비보다 큰 경우 스크롤바가 생성됩니다.




### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|왼쪽 섹션의 총 너비|


### Example
```javascript
options = {
  LeftCols:[
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
    }
  ],
  Cfg :{
    LeftWidth:150      // 왼쪽 고정 열 섹션의 최대 너비 설정
  }
};
```

### Read More
- [LeftWidth cfg](./left-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
