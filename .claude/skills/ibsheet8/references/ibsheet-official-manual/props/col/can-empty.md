---
KEY: canEmpty
KIND: column-property
PATH: props/col/can-empty
ALIAS: 타입에서, 데이터의, 값이, 없을, 경우
ALIAS_EN: can, empty
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/can-empty
---
# CanEmpty ***(col)***
> `Int`, `Float`, `Bool`, `Date` 타입에서 데이터의 값이 없을 경우, 빈값으로 표시될 수 있도록 하는 설정입니다.
 `CanEmpty: 0`으로 설정된 열에 대해서는 값을 지우거나 빈 값으로 설정할 수 없습니다.

> 해당 속성에 영향을 받는 데이터는 아래와 같습니다.
```javascript
{Type: "Int", Name: "sInt", CanEmpty: 1}

data: [
    {"sInt": null},      //null 데이터
    {"sInt": undefined}, //undefined 데이터
    {}                   //데이터 없음
]
```
<!-- `Bool` 타입의 경우 1번부터 4번까지 값 사이클은 다음과 같습니다.

 1 인 경우 `["" => 1 => 0 ...]` , 2 인 경우 `["" => 0 => 1 ...]`,

3 인 경우 `"" => [1 => 0 => 1 => 0 ...]`, 4 인 경우 `"" => [0 => 1 => 0 => 1 ...]` 형태로 `Bool` 타입의 값이 싸이클을 돕니다. 
-->

### 빈데이터 기본값 표시
| | Bool| Int| Float| Date|
|-- | -- | -- |-- |-- |
|CanEmpty : 0|   0(unCheck)  |   0 |0 |19700101|
|CanEmpty : 1|   ""  |   "" |"" |""|


**CanEmpty : 0** 

![CanEmpty0](/assets/imgs/CanEmpty0.gif "CanEmpty0")
<!-- IMAGE: 스크린샷/예시 이미지 - CanEmpty0 -->

**CanEmpty : 1** 

![CanEmpty1](/assets/imgs/CanEmpty1.gif "CanEmpty1")
<!-- IMAGE: 스크린샷/예시 이미지 - CanEmpty1 -->

<!-- **CanEmpty : 2** 

![CanEmpty2](/assets/imgs/CanEmpty2.gif "CanEmpty2")
<!-- IMAGE: 스크린샷/예시 이미지 - CanEmpty2 -->

**CanEmpty : 3** 

![CanEmpty3](/assets/imgs/CanEmpty3.gif "CanEmpty3")
<!-- IMAGE: 스크린샷/예시 이미지 - CanEmpty3 -->

**CanEmpty : 4** 

![CanEmpty4](/assets/imgs/CanEmpty4.gif "CanEmpty4")
<!-- IMAGE: 스크린샷/예시 이미지 - CanEmpty4 -->

-->
### 
### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|빈 값 설정 불가 (default: `Int`, `Float`, `Bool`)|
|`1`|빈 값 설정 가능 (default: `Date`)|
<!--! 
|`2`|빈 값 설정 가능 (사용: `Bool`)|
|`3`|빈 값 설정 가능 (사용: `Bool`)|
|`4`|빈 값 설정 가능 (사용: `Bool`)|
!-->


### Example
```javascript
// 특정 열에 대해 빈 값이 설정되도록 수정
options.Cols = [
    {Type: "Int", Name: "sPoint", CanEmpty: 1 ...},
    {Type: "Bool", Name: "sBool1", CanEmpty: 1 ...},
    ...
];
```

### Read More
- [CanEdit col](./can-edit)
- [CanMove col](./can-move)
- [CanResize col](./can-resize)
- [CanSort col](./can-sort)
- [EmptyValue col](./empty-value)
- [Type col](/docs/props/col/type)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
