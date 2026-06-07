---
KEY: noColor
KIND: column-property
PATH: props/col/no-color
ALIAS: 열의, 기본, 적용된, 배경색이, 무시됩니다
ALIAS_EN: no, color
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/no-color
---
# NoColor ***(col)***

> 열의 기본 적용된 배경색이 무시됩니다.

> 홀수, 짝수행에 대한 배경색상([AlternateColor](/docs/props/row/alternate-color))나 상태(입력, 수정, 삭제)및 선택에 대한 색상이 무시되고, [Color](./color) 속성으로 통한 배경색도 적용되지 않게 할수 있습니다. 

> `NoColor`가 적용되는 우선 순위는 셀 \> 열 \> 행입니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|기능 사용 안함 (`default`)|
|`1`|모든 배경색 무시(단 Class속성을 통해 설정한 배경색을 적용)|
|`2`|상태 및 선택에 대한 색상만 무시
|`3`|`Color` 설정 시 상태, `AlternateColor`에 대한 색상을 무시하고 `Color` 색상 적용

### Example
```javascript
//특정 열은 모든 배경색을 무시하게 설정
options.Cols = [
    ...
    {Type: "Text", Name: "Dept", NoColor: 1, Width: 100 ...},
    ...
];
```
### Read More
- [Alternate cfg](/docs/props/cfg/alternate)
- [Color col](./color)
- [AlternateColor row](/docs/props/row/alternate-color)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.2.0.14|`NoColor: 3` 동작 추가|