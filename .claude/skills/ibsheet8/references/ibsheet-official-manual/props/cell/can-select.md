---
KEY: canSelect
KIND: cell-property
PATH: props/cell/can-select
ALIAS: 사용자가, 마우스, 드래그를, 데이터, 영역의
ALIAS_EN: can, select, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/can-select
---
# !CanSelect ***(cell)***

> 사용자가 마우스 드래그를 통해 데이터 영역의 일부데이터를 선택할때, 특정 셀에 대한 선택 가능 여부를 설정합니다.

> `CanSelect:0(false)`으로 설정된 셀은 드래그시 건너뛰어 선택됩니다.


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
//조회 데이터 내에서 특정 셀에 대한 선택 불가 설정
{
    data:[
        {..., "CLSCanSelect":"0", ...}
    ]
}
```

### Read More
- [CanFocus cell](./can-focus)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
