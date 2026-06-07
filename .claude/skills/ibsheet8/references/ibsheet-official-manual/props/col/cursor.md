---
KEY: cursor
KIND: column-property
PATH: props/col/cursor
ALIAS: 위에, 마우스, 커서가, 호버시, 커서의
ALIAS_EN: cursor
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/cursor
---
# Cursor ***(col)***

> 열 위에 마우스 커서가 호버시 커서의 모양을 설정합니다.

> 설정가능한 커서의 모양은 css를 따릅니다.

> ex) auto, crosshair, default, pointer, move, e-resize, ne-resize, nw-resize, n-resize, se-resize, sw-resize, w-resize, text, wait, help


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|원하는 커서 모양|


### Example
```javascript
//열에 커서가 들어갔을때 커서 모양을 클릭가능한 손가락 모양으로 변경.
options.Cols = [
    ...
    {Type: "Text", Name: "sa_nm", Cursor: 'pointer', TextStyle: 4},
    ...
];
```

### Read More
- [TextStyle col](./text-style)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
