---
KEY: wrap
KIND: column-property
PATH: props/col/wrap
ALIAS: 셀에, 내용이, 많아, 뒷부분이, 안보여질
ALIAS_EN: wrap
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/wrap
---
# Wrap ***(col)***

> 셀에 내용이 많아 뒷부분이 안보여질 때, 줄넘김 기능 사용 여부를 설정합니다.

> 줄넘김이 이루어지는 경우 행의 높이가 증가하게 됩니다.

> 일반적으로 `Text` 타입에서 사용하며, `Radio` 타입에서도 사용하실 수 있습니다.

> [Lines 타입](/docs/appx/type) 컬럼에서는 `default: 1(true)`로 설정됩니다.

<!--!> 대용량 모드에서는 [(SearchMode:0)](/docs/props/cfg/search-mode)은 데이터행의 높이에 동적인 경우에 대해 지원하지 않으므로 해당 기능을 사용할 수 없습니다. 
!-->

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|줄넘김 사용 안함 (`default`)|
|`1(true)`|줄넘김 사용 (`컬럼의 Type이 Lines인 경우 default: 1(true)`)|


### Example
```javascript
//특정 열의 줄넘김 허용
options.Cols = [
    ...
    {Header: "의견", Type: "Text", Wrap: 1, Name: "DESC", ...},
    ...
];
```

### Read More



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
