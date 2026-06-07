---
KEY: zoomSetSizeMode
KIND: config-property
PATH: props/cfg/zoom-set-size-mode
ALIAS: 나뉘며, 사용시에는, 태그, 사이즈가, 설정되어있는
ALIAS_EN: zoom, set, size, mode
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/zoom-set-size-mode
---
# !ZoomSetSizeMode ***(cfg)***

> `mode: 1, 2` 로 나뉘며 `mode: 1` 사용시에는 태그 사이즈가 설정되어있는 메세지의 사이즈보다 작을수록 `Size` 를 **점점 작게**, 클수록 **점점 크게** 

> `mode: 2` 사용시에는 태그사이즈가 설정되어있는 메세지의 사이즈보다 작을수록 `Size`를  **점점 크게**, 클수록 **점점 작게** 

> 메세지 파일에 `BreakPoints` 에 각 사이즈값들이 적혀 있습니다. 


**아래는 언어팩에서 제공하는 `BreakPoints` 에 기본 수치입니다.**

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
`number`


### Options
|Value|Description|
|-----|-----|
| `0` | 동작하지 않음. (`default`) |
| `1` | `xs` 보다 작으면 `Tiny`, `sm` 보다 작으면 `Small`, `md` 보다 작으면 `Low`, `lg` 보다 작으면 `Normal`, `xl` 보다 작으면 `High`, `xxl` 보다 작으면 `Big`, 무조건 더 크면 `Big` |
| `2` | `xs` 보다 작으면 `Big`, `sm` 보다 작으면 `High`, `md` 보다 작으면 `Normal`, `lg` 보다 작으면 `Low`, `xl` 보다 작으면 `Small`, `xxl` 보다 작으면 `Tiny`, 무조건 더 크면 `Tiny` |


### Example
```javascript
options.Cfg = {
    // 태그 사이즈가 각 메세지 사이즈보다 작을 수록 점점 크게, 반대로 커지면 점점 작게
    ZoomSetSizeMode: 2,
    ...
};
```

### Read More

- [HideMobile col](/docs/props/col/hide-mobile)
- [BreakPoint col](/docs/props/col/break-point)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.24|기능 추가|
