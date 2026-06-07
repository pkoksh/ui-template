---
KEY: interval
KIND: column-property
PATH: props/col/interval
ALIAS: 타입, 컬럼의, 달력, 호출시, 시간의
ALIAS_EN: interval
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/interval
---
# Interval ***(col)***
> `Date` 타입 컬럼의 달력 호출시 시간의 분 / 초 조절 버튼 클릭 시, [`TimePicker`](/docs/props/col/time-picker) 의 시간 조절 분 / 초의 버튼 클릭 시 증감 단위를 설정합니다.

> `Minute`, `Second` 를 통하여 분 / 초 를 각각 설정할 수 있습니다.

> 셀에 값이 있는 상태에서 분 / 초를 조절 시 `Interval` 설정한 값의 가까운 배수의 값으로 조절 됩니다.

> `Init`을 `1(true)`로 설정하는 경우 빈 값의 셀에서 현재 시각을 보여줄 때 `Interval` 설정한 값으로 조절하여 보여줍니다.


### Type
`object`

### Options
|Name|Type|Required|Description|
|----------|-----|---|----|
|`Minute`|`number`|선택|분의 증감 단위 설정. (입력값의 배수의 분으로 조절됨)|
|`Second`|`number`|선택|초의 증감 단위 설정. (입력값의 배수의 초로 조절됨)|
|`Init`|`boolean`|선택|셀이 빈 값인 경우 현재 시각을 `Interval` 설정 값으로 보여주는 기능 (`default: 0(false)`)|

### Example
```javascript
options.Cols = [
    ...
    {Type: "Date", Width: 120, Name: "sDate_Hms", 
     Format: "HH:mm:ss", EditFormat: "HHmmss", DataFormat: "HHmmss", "TimePicker": 1, 
      Interval: {
         Minute: 30, // 분의 증감을 30의 배수 단위로 설정.
         Second: 10, // 초의 증감을 10의 배수 단위로 설정.
         Init: true
      }
    },
    {Type: "Date", Width: 120, Name: "sDate_YmdHms", 
     "Format": "yyyy/MM/dd HH:mm:ss","Width": 150,"EditFormat": "yyyyMMddHHmmss","DataFormat": "yyyyMMddHHmmss", 
      Interval: {
         Minute: 20, // 분의 증감을 20의 배수 단위로 설정.
         Second: 5,  // 초의 증감을 5의 배수 단위로 설정.
         Init: true
      }
    },
    ...
];
```

### Read More

- [TimePicker col](/docs/props/col/time-picker)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.6|기능 추가|
|core|8.1.0.13|`Init` 기능 추가|
