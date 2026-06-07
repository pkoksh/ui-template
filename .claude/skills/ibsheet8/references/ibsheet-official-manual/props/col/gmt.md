---
KEY: gmt
KIND: column-property
PATH: props/col/gmt
ALIAS: 열의, 기준, 시간대를, 설정합니다
ALIAS_EN: gmt
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/gmt
---
# GMT ***(col)***
> 열의 [Type](/docs/appx/type)이 `Date`일 때 기준 시간대를 설정합니다.

> 조회된 시간을 기준으로 UTC시간으로 변경하여 보여줍니다.

> 이는 시트에 보여지는 값일뿐 실제 값과는 무관합니다.
가령 조회데이터가 "2017-05-25 14:30" 인 경우, 이 속성의 값을 1로 설정하면 실제 시트상에는 "2017-05-25 05:30"으로 표시됩니다.(한국은 GMT +9 이기 때문)

> 하지만 값을 "2017-05-25 06:30"으로 수정하여 저장하면, 실제로 전송되는 데이터는 "2017-05-25 15:30"이 전송됩니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|사용자 피시의 시간대 (`default`)|
|`1(true)`|GMT/UTC 시간대|


### Example
```javascript
//UTC로 보기
options.Cols = [
    ...
    {Type: "Date", Name: "sa_enterDate", Format: 'MM-dd-yyyy HH:mm',DataFormat: "yyyyMMddHHmmss", GMT: 1 ...},
    ...
];
```

### Try it
- [Set to 1](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/GMT-1/)

### Read More
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
