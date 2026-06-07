---
KEY: canSelect
KIND: column-property
PATH: props/col/can-select
ALIAS: 사용자가, 마우스, 드래그를, 데이터, 영역의
ALIAS_EN: can, select, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/can-select
---
# CanSelect ***(col)***

> 사용자가 마우스 드래그를 통해 데이터 영역의 일부데이터를 선택할때, 열에 대한 선택 가능 여부를 설정합니다.

> `CanSelect: 0`으로 설정된 열은 드래그시 건너뛰어 선택됩니다.


###
![canSelect](/assets/imgs/canSelect.png "드래그하여 선택시 선택 가능여부")
<!-- IMAGE: 스크린샷/예시 이미지 - canSelect -->

위와 같이 선택시 `ctrl+c`를 하면 2, 3, 5월 열의 데이터만 클립보드로 복사됩니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|열 선택 불가|
|`1(true)`|열 선택 가능 (`default`)|

### Example
```javascript
//AMT 열에 대해 선택 불가하게 설정
options.Cols = [
    ...
    {Type: "Int", CanEdit: 0, Name: "AMT", CanSelect: 0, Width: 120, ...},
    ...
];
```

### Read More
- [CanFocus col](./can-focus)
- [CanCopyPaste col](./can-copy-paste)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
