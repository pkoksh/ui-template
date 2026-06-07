---
KEY: rightCanResize
KIND: config-property
PATH: props/cfg/right-can-resize
ALIAS: 해당, 기능은, 버전, 이후로, 지원하지
ALIAS_EN: right, can, resize
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/right-can-resize
---
# !RightCanResize ***(cfg)*** `[Deprecated]`

> 해당 기능은 8.0.0.1 버전 이후로 지원하지 않습니다.


<details>

> 중간 열 섹션과 오른쪽 고정 열 섹션 사이의 너비조정 가능여부를 설정합니다. 

> `RightCols` 로 왼쪽 고정 열 섹션이 설정된 경우에 동작합니다.

> 너비 조정은 오른쪽과 중앙 섹션의 스크롤바 사이를 클릭 후 드래그를 하여 변경할 수 있으며, 너비조정이 되면 Cfg에서 설정한 [RightWidth](/docs/props/cfg/right-width)와 [MidWidth](/docs/props/cfg/mid-width)의 값이 자동 변경됩니다. 




### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|너비 조정 안됨|
|`1`|Cfg의 [RightWidth](/docs/props/cfg/right-width) 또는 [MidWidth](/docs/props/cfg/mid-width)가 설정되고, 왼쪽 또는 중앙 섹션에 스크롤 바가 있을때 가능 (`default`)|
|`2`|오른쪽 또는 중앙 섹션에 스크롤바가 있을 때 항상 가능|
|`3`|왼쪽, 중앙, 오른쪽 중 섹션에 스크롤바가 있는 경우 항상 가능. 왼쪽 섹션 너비의 경우, 중간 섹션이 충분히 `Resize`되지 않는다면 크기가 변경|
|`4`|스크롤바가 없어도 섹션에 `RelWidth = 1` 또는 `ConstWidth = 1` 그리고 `RelWidthType = 1` 이 있는 경우 가능|


### Example
```javascript
options = {
    RightCols:[
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
      RightCanResize: 0      // 너비 조정 안함
    }
};
```

### Read More
- [RightWidth cfg](/docs/props/cfg/right-width)
- [MidWidth cfg](/docs/props/cfg/mid-width)
- [LeftCanResize cfg](/docs/props/cfg/left-can-resize)

</details>

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.1|`Deprecated`|