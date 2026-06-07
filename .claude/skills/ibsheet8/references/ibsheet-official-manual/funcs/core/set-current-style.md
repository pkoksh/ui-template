---
KEY: setCurrentStyle
KIND: method
PATH: funcs/core/set-current-style
ALIAS: sheet.setCurrentStyle, setCurrentStyle(), 문자열을, 현재, 시트의, 테마, 설정된
ALIAS_EN: set, current, style
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-current-style
---
# setCurrentStyle ***(method)***
> 문자열을 통해 현재 시트의 테마 및 Def의 `Header`, `Row`에 설정된 스타일 관련 정보를 변경하는 메소드입니다.

### Syntax
```javascript
boolean setCurrentStyle( info );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|info|`string`|필수|현재 시트 컬럼에 적용하고 싶은 스타일 정보|

### Return Value
***boolean***

### Example
```javascript
var info = '{"HeaderColor":"#1d1d1b","HeaderTextSize":"14","HeaderTextColor":"#efe6e6","AlternateColor":"#dfdfe2","RowColor":"#f6f6ee","RowTextSize":"12","RowTextColor":"#211c1c","Theme":"IB"}' // getCurrentStyle에서 얻은 결과와 같은 형식

sheet.setCurrentStyle( info );
```

### Read More
- [행(Row) 구조에 대한 이해 getting started](/docs/start/row)
- [getCurrentStyle method](./get-current-Style)
- [AlternateColor row](/docs/props/row/alternate-color.md)
- [Color row](/docs/props/row/color.md)
- [TextColor row](/docs/props/row/text-color.md)
- [TextSize row](/docs/props/row/text-size.md)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.18|기능 추가|
