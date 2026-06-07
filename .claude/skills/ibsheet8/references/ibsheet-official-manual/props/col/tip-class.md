---
KEY: tipClass
KIND: column-property
PATH: props/col/tip-class
ALIAS: 풍선도움말, 객체에, 원하는, 클래스를, 적용하여
ALIAS_EN: tip, class
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/tip-class
---
# TipClass ***(col)***

> 풍선도움말 객체에 원하는 css클래스를 적용하여 디자인을 설정 합니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|풍선도움말 객체에 적용할 클래스 명|

### Example
```css
<style>
    .RedBold{color:red;font-weight:700;}
    .deepblue{color:#020079;}
</style>
```
```javascript

//특정 열에 풍선도움말 표시시 사용될 클레스를 설정.
options.Cols = [
    ...
    {Type:"Text", Tip: 1, TipClass: "deepblue", Name: "procs", Width: 120 ...},
    ...
];
```

### Read More
- [Tip col](./tip)
- [Tip+Value col](./tip-value)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
