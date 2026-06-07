---
KEY: selectCheck
KIND: column-property
PATH: props/col/select-check
ALIAS: 타입, 컬럼을, 드래그하여, 선택시, 선택한
ALIAS_EN: select, check
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/select-check
---
# SelectCheck ***(col)***
> Bool 타입 컬럼을 드래그하여 선택시, 선택한 셀들을 체크하거나 언체크 합니다. 

> 

> 제약사항1: 머지가 이뤄진 컬럼에서는 해당 옵션을 사용하실 수 없습니다. 

> 제약사항2: 여러개 컬럼들 드래그 시에는 동작하지 않습니다.. 

> 제약사항3: (Cfg)SearchMode:2에서는 해당 옵션을 사용하실 수 없습니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|SelectCheck 기능을 사용하지 않음|
|`1(true)`|Bool 타입 컬럼을 드래그하여 선택시, 선택한 셀들을 체크/언체크합니다. (`default`)|

### Example
```javascript
var opt = {
    Cols:[
        ...,
        // 단일 Bool 타입 컬럼 드래그시 선택할 셀들을 체크합니다.
        {
            Header: { Value: "체크박스(Bool)", HeaderCheck: 1 },
            Type: "Bool",
            Name: "CheckData",
            Width: 80,
            Align: "Center",
            CanEdit: 1,
            SelectCheck: 1,
        }
    ]
}
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.26|기능 추가|
