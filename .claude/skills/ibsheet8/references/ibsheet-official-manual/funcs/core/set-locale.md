---
KEY: setLocale
KIND: method
PATH: funcs/core/set-locale
ALIAS: sheet.setLocale, setLocale(), 시트에, 설정된, 언어의, 종류를, 변경하는
ALIAS_EN: set, locale
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-locale
---
# setLocale ***(method)***
> 시트에 설정된 언어의 종류를 변경하는 메소드입니다. 


### Syntax
```javascript
void setLocale( code, load, path, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|code|`string`|필수|시트에 설정할 언어 코드
(`'Ko'`, `'En'`, `'Jp'`, `'Cn'`, etc) (`default: 'Ko'`)|
|load|`boolean`|선택|해당 언어의 메시지가 없을때 동적으로 파일을 로드할지 여부
`0(false)`:`code`에 설정된 언어의 메시지가 없는 경우 파일 로드 하지 않음 (`default`)
`1(true)`:`code`에 설정된 언어의 메시지가 없는 경우 `path`에 경로의 언어 파일을 동적으로 로드|
|path|`string`|선택|메시지 언어팩이 있는 경로 (`default: ibsheet.js 기준 locale 폴더`)|
|render |`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함 (`default`)
`1(true)`:즉시 반영|

### Return Value
***boolean*** : 언어 코드의 적용 여부 (실패 시 `0(false)` 리턴)

### Example
```javascript
// 시트에 사용될 메시지를 영문 전용 메시지로 변경
// ibsheet.js에서 locale/en.js 파일을 ajax 호출하여 적용
sheet.setLocale( 'En' );

-------------------------------------------------

<script src="/ibsheet/locale/ko.js"></script>
<script src="/ibsheet/locale/en.js"></script>
<script src="/ibsheet/locale/jp.js"></script>

// 시트에 사용될 메시지를 영문 전용 메시지로 변경
// en.js을 호출하였기 때문에 ajax 통신하지 않고 적용
sheet.setLocale( 'En' );

-------------------------------------------------

// 시트에 사용될 메시지를 영문 전용 메시지로 변경
//ibsheet 폴더의 en.js 파일을 ajax 호출하여 적용
sheet.setLocale({code : "En", path:"/ibsheet/"} );

```


### Read More
- [getLocale method](./get-locale)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.2|기능 추가|
