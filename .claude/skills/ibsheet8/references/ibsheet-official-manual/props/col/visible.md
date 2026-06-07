---
KEY: visible
KIND: column-property
PATH: props/col/visible
ALIAS: 열의, 보임, 감춤, 여부를, 설정합니다
ALIAS_EN: visible
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/visible
---
# Visible ***(col)***
> 열의 보임 감춤/여부를 설정합니다.

> 시트 생성시 `Visible:0`으로 설정 후, 나중에 컬럼에 보여주고자 할때는 `setAttribute()`를 통해 속성값을 변경하기 보다는, [showCol()](/docs/funcs/core/show-col)함수를 사용하시기 바랍니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|열 감춤|
|`1(true)`|열 보임 (`default`)|

### Example
```javascript
//특정 열를 감춤
options.Cols = [
    ...
    {Type: "Int", Name: "Pvt_TSum", Visible: 0, ...},
    ...
];
```

### Read More
- [showCol method](/docs/funcs/core/show-col)
- [hideCol method](/docs/funcs/core/hide-col)
- [onShowColumn event](/docs/events/on-show-column)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
