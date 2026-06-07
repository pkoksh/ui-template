---
KEY: class
KIND: column-property
PATH: props/col/class
ALIAS: 열에, 적용할, 커스텀, 설정합니다
ALIAS_EN: class
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/class
---
# Class ***(col)***

> 열에 적용할 커스텀 `css class명`을 설정합니다.


> **<mark>주의</mark> : Class로 적용한 css는 엑셀 다운로드시 디자인 반영되지 않습니다.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|열에 적용할 css class 명|


### Example
```css
<style>
.RedBold{color:#FF0000;font-weight:700}
</style>
```
```javascript
//특정 열에 "RedBold" 클래스를 적용
options.Cols = [
    ...

    {Type: "Text", Name: "Dept", Class: "RedBold", Width: 100 ...},
    ...
];
```

### Read More



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
