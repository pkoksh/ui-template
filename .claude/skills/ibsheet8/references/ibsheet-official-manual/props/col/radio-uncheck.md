---
KEY: radioUncheck
KIND: column-property
PATH: props/col/radio-uncheck
ALIAS: 열에서, 클릭하여, 선택한, 아이템을, 다시
ALIAS_EN: radio, uncheck
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/radio-uncheck
---
# RadioUncheck ***(col)***
> [Type](/docs/appx/type)이 `Radio`인 열에서, 한 번 클릭하여 선택한 아이템을 다시 클릭하여 체크해제 하게끔 허용할지 여부를 설정합니다.
### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|체크해제를 허용하지 않음 (`default`)
|`1(true)`|체크해제를 허용|

### Example
```javascript
//체크 해제를 허용
options.Cols = [
    ...
    {Type: "Radio", Name: "relation", RadioUncheck: 1 ...},
    ...
];
```

### Read More
- [Range col](./range)
- [HRadio col](./h-radio)
- [RadioIcon col](./radio-icon)
- [RadioIconWidth col](./radio-icon-width)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
