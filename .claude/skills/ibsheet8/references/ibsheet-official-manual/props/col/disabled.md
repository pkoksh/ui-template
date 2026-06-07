---
KEY: disabled
KIND: column-property
PATH: props/col/disabled
ALIAS: 컬럼에, 대해, 버튼, 사용, 가능
ALIAS_EN: disabled
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/disabled
---
# Disabled ***(col)***
> [Type](/docs/appx/type)이 `Button`, `File`인 컬럼에 대해 버튼 사용 가능 여부를 설정합니다.

> `Type:"Button", Disabled:1` : 버튼 컬럼이 비활성화 색으로 변경되며, click 이벤트 발생하지 않는다 

> `Type:"File", Disabled:1` : 파일 추가, 제거 버튼이 표시되지 않는다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|버튼 기능 사용 가능 (`default`)|
|`1(true)`|버튼 기능 사용 불가|

### Example
```javascript
//특정 열의 버튼을 사용불가로 설정
options.Cols = [
    ...
    {Type: "Button", Button: "Button", Disabled: 1, Name: "btn1" ...},
    ...
];
```

### Read More
- [Type appendix](/docs/appx/type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
