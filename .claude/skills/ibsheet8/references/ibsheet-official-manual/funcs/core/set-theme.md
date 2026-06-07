---
KEY: setTheme
KIND: method
PATH: funcs/core/set-theme
ALIAS: sheet.setTheme, setTheme(), 시트가, 사용하는, 파일을, 변경합니다
ALIAS_EN: set, theme
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-theme
---
# setTheme ***(method)***
> 시트가 사용하는 css 파일을 변경합니다.

> 기본 사용 css 파일(`/default/main.css`)파일 대신해 사용할 css 파일의 경로와 css 내에 `prefix(접두어)`를 설정합니다.

> 여기서 `css prefix`란 시트의 css 파일에 각 클레스 시작 이름입니다.

> (`/default/main.css` 파일을 열어보면 모든 클레스 명이 `".IB"`로 시작하는걸 알 수 있습니다.)
> 다른 테마를 사용하실 때는 반드시 이 `prefix명`도 기존과 달라야 합니다.


### Syntax
```javascript
void setTheme( prefix, csspath, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|prefix|`string`|필수|css 파일 내에 사용할 접두어 (`default: "IB"`)|
|csspath|`string`|필수|새로 적용할 css 파일 경로|
|render|`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함
`1(true)`:즉시 반영 (`default`)|


### Return Value
***none***

**기본으로 제공하는 테마**

|value|Prefix|Description|
|---|---|---|
|`default` 폴더|`IB`(`default`)|시트에서 사용하는 이미지를 svg 제공|
|`default_img` 폴더|`IB`|시트에서 사용하는 이미지를 png, gif 제공|
|`grace` 폴더|`IBGR`|시트에서 사용하는 이미지를 svg 제공|
|`gray` 폴더|`IBGY`|시트에서 사용하는 이미지를 svg 제공|
|`material` 폴더|`IBMR`|시트에서 사용하는 이미지를 svg 제공|
|`mint` 폴더|`IBMT`|시트에서 사용하는 이미지를 svg 제공|
|`simple` 폴더|`IBSP`|시트에서 사용하는 이미지를 svg 제공|


### Example
```javascript
//partnerStyle.css 파일을 시트의 테마로 적용한다.
sheet.setTheme("SH", "./newTheme/partnerStyle.css", 1);
```

### Read More
 - [Style cfg](/docs/props/cfg/style)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
