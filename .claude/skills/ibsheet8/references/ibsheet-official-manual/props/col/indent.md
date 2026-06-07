---
KEY: indent
KIND: column-property
PATH: props/col/indent
ALIAS: 문자열, 정렬, 따라, 좌측, 또는
ALIAS_EN: indent, align, alignment
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/indent
---
# Indent ***(col)***

> 문자열 정렬([Align](./align))에 따라 셀 좌측 또는 우측에 들여쓰기를 설정합니다.

> 숫자로 입력시 입력값 * 10 px로 padding이 생성됩니다.
### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|패딩 정도 (입력값 * 10px)|


### Example
```javascript
//특정 열의 좌측에 20px 정도 패딩을 생성
options.Cols = [
    ...
    {Type: "Text", Name: "Description", Align: "Left", Indent: 2, Width: 100 ...},
    ...
];
```

### Read More
- [Align col](./align)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
