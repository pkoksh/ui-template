---
KEY: extend
KIND: column-property
PATH: props/col/extend
ALIAS: 시트, 생성시, 들어가는, 설정, 다른
ALIAS_EN: extend, sheet, grid, config, setting, option
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/extend
---
# Extend ***(col)***
> 시트 생성시 Cols에 들어가는 열 설정([Type (col)](/docs/props/col/type), [Format (col)](/docs/props/col/format) 등)을 다른 변수로부터 가져와 적용합니다.
>
> 가령 프로젝트에서 달러를 표시하는 열에 대한 공통 규격을 아래와 같이 정했다고 가정합니다.
>
> 1. 숫자 앞에 "$"기호를 표시.
> 2. 3자리 숫자 마다 ","가 보여지고, 소숫점 이하 1번째 자리까지만 표현.
> 3. 열의 너비는 120px 이고 열의 너비는 사용자가 조절하지 못하게 끔 할 것.
> 4. 배경색을 "#FFFF88"으로 표현.
>
> 이 경우 모든 프로젝트의 개발자가 위 내용을 숙지하여 달러가 표현되야 하는 모든 열에 대해서 [Type (col)](/docs/props/col/type), [Format (col)](/docs/props/col/format), [Width (col)](/docs/props/col/width) 등을 설정하는 것보다, 이러한 설정 정보를 미리 변수에 담아두고 해당 열을 만들때 변수의 내용을 적용하게 끔 한다면 훨신 쉽게 동일한 형태의 열을 만들 수 있습니다.
>
> 이렇게 `Extend` 속성은 공통 변수에 담긴 열 설정 정보를, 해당열에 적용시키는 기능을 합니다.
> `Extend` 속성은 시트 생성시(create)에만 설정 가능하며, 이미 생성된 시트에는 적용되지 않습니다.


> **<mark>주의</mark> : `Extend`을 통해 설정하는 속성과 동일한 속성을 시트 생성시 설정했을 경우에는, 어느 속성을 앞에 설정하느냐에 따라 우선순위가 결정됩니다(헤더 설정은 제외됩니다. 헤더의 경우 Cols 속성이 우선 순위가 더 높습니다).**

```javascript
var defaultWidth = {Width: 100, MinWidth: 70};
var options = {
    Cols:[
        {Width: 300, Extend: defaultWidth},  //너비가 100px로 설정됨
        {Extend: defaultWidth, Width: 300}   //너비가 300px로 설정됨
    ]
}
```


### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`object`|[LeftCols, Cols, RightCols](/docs/appx/init-structure)에 들어가는 설정값 들|


### Example
```javascript
//프로젝트 공통으로 사용할 열 설정 정보를 변수에 정의해 둡니다.(ibsheet-common.js파일 참고)
var IB_Preset = {
    USD:{Type: "Float", Format: "$ #,##0.#", Width: 120, CanResize: 0,Color: "#FFFF88"},  //미화 표시
    YMD:{Type: "Date", Format: "yyyy-MM-dd", EditFormat: "yyyyMMdd", Width: 110}, //년월일 기본 표시
    REGD:{Type: "Date", Format: "yyyy-MM-dd HH:mm", DataFormat: "yyyyMMddHHmm",CanEdit: 0, Width: 150}, //작성일시
    ... 여러가지 열 형식을 미리 정의해 둔다 ...
};



//시트 생성시 Extend를 이용하여 열 생성
//(Name속성만 설정하고 나머지 설정은 Extend로 반영받는다.)
options.Cols = [
    //Type,Format 등이 모두 한꺼번에 적용된다.
    {Name: "exportIncom", Extend: IB_Preset.USD},
    {Name: "birthDate", Extend: IB_Preset.YMD, CanEdit: 1},
    {Name: "ModiDate", Extend: IB_Preset.REGD},
    ...
];
```

### Try it
- [Demo of Extend](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/Extend/)

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
