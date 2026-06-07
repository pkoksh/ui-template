---
KEY: leftCanResize
KIND: config-property
PATH: props/cfg/left-can-resize
ALIAS: 해당, 기능은, 버전, 이후로, 지원하지
ALIAS_EN: left, can, resize
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/left-can-resize
---
# !LeftCanResize ***(cfg)*** `[Deprecated]`

> 해당 기능은 8.0.0.1 버전 이후로 지원하지 않습니다.


<details>

> 왼쪽 섹션과 중간 열 섹션 사이의 가장자리를 어떤 조건에서 어떻게 조정할 것 인지 설정합니다. 

> LeftCols 로 왼쪽 고정 열 섹션이 설정된 경우에만 동작합니다.

> `Resizing`은 왼쪽과 중앙 스크롤바 사이를 클릭 후 드래그를 하여 조정할 수 있으며, 이 경우 `Cfg`에서 설정한 `LeftWidth`와 `MidWidth`는 자동 변경됩니다. 




### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|너비 조정 안됨|
|`1`|`Cfg`의 `LeftWidth`가 설정되어 있고, 왼쪽 또는 중앙 섹션에 스크롤 바가 있을 때 가능 (`default`)|
|`2`|왼쪽 또는 중앙 섹션에 스크롤바가 있을 때만 `Resize` 가능|
|`3`|왼쪽, 중앙, 오른쪽 중 섹션에 스크롤바가 있는 경우 항상 가능. 오른쪽 섹션 너비의 경우 중간 섹션이 충분히 `Resize` 되지 않는다면 크기가 변경됨|
|`4`|스크롤바가 없어도 섹션에 `RelWidth = 1` 또는 `ConstWidth = 1` 그리고 `RelWidthType = 1`이 있는 경우 가능|


### Example
```javascript
options = {
  LeftCols:[
    {
      //열 헤더 설정
      Header: {
        Value: "No" // 헤더행의 SEQ 열에 해당하는 셀에 표시될 title 값
      },
      Name: "SEQ" // 행의 순서를 보여주는 열으로, 자동으로 순번이 시트에서 생성됩니다.
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
  Cfg :{
    LeftCanResize: 0      // 왼쪽, 중앙 섹션 너비 재조정 안됨
  }
};
```

### Read More
- [LeftWidth cfg](/docs/props/cfg/left-width)
- [RightCanResize cfg](/docs/props/cfg/right-can-resize)

</details>

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.1|`Deprecated`|
