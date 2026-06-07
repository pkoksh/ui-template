---
KEY: breakPoint
KIND: column-property
PATH: props/col/break-point
ALIAS: 언어팩에, 있는, 수치, 기준보다, 작을시
ALIAS_EN: break, point
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/break-point
---
# BreakPoint ***(col)***

> 언어팩에 있는 `BreakPoints` 수치 기준보다 더 작을시 hide 할지 말지 정하는 기능입니다. 

> 설정한 `BreakPoint` 와 시트 태그 사이즈를 비교하여 태그 사이즈 보다 작을시 `hide`, 클시 `show` 되는 기능입니다. 

> 해당 기능 설정시 설정되는 `Visible` 속성은 무시됩니다. 사이즈 변경이 필요할시에는 언어팩에 수치를 직접 변경하시면 됩니다. 


**아래는 언어팩에서 제공하는 BreakPoints 에 기본 수치입니다.**

```js
"BreakPoints": {
  "xs": 0,
  "sm": 576,
  "md": 768,
  "lg": 992,
  "xl": 1200,
  "xxl": 1400
}
```

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`xs`|태그 사이즈가 `xs` 수치보다 작으면 `hide`, 크면 `show`|
|`sm`|태그 사이즈가 `sm` 수치보다 작으면 `hide`, 크면 `show`|
|`md`|태그 사이즈가 `md` 수치보다 작으면 `hide`, 크면 `show`|
|`lg`|태그 사이즈가 `lg` 수치보다 작으면 `hide`, 크면 `show`|
|`xl`|태그 사이즈가 `xl` 수치보다 작으면 `hide`, 크면 `show`|
|`xxl`|태그 사이즈가 `xxl` 수치보다 작으면 `hide`, 크면 `show`|

### Example
```javascript
//html객체로 체크박스 표현
options.Cols = [
    ...
    {Type: "Text", Name: "BreakColA", BreakPoint: "md" ...},
    ...
];
```

### Read More

- [HideMobile col](/docs/props/col/hide-mobile)
<!--!
- `[비공개]` [ZoomSetSizeMode cfg](/docs/props/cfg/zoom-set-size-mode)
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.24|기능 추가|
