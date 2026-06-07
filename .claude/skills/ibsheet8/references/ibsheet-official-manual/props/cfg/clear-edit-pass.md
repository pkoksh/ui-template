---
KEY: clearEditPass
KIND: config-property
PATH: props/cfg/clear-edit-pass
ALIAS: 일때, 편집시, 호출은, 제외, 데이터를
ALIAS_EN: clear, edit, pass
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/clear-edit-pass
---
# !ClearEditPass ***(cfg)***

> 열 ([Col](/docs/props/col/type), [Cell](/docs/props/cell/type) ) [Type](/docs/appx/type)이 `Pass`일때 셀 편집시([setValue](/docs/funcs/core/set-value), [setString](/docs/funcs/core/set-string), 등 API 호출은 제외) 셀 데이터를 무조건 초기화할지 여부를 설정합니다.(`default: 0(false)`)

> 예를 들어, `Pass Type`의 열의 셀을 편집할 때 값이 설정되어 있고 옵션이 `1(true)`면 편집모드(`F2, Enter 키`)로 진입했을 때 값이 초기화 된 상태에서 편집을 시작합니다.

> **이 때, 편집취소(`ESC 키`)를 했을때를 제외하면 모든 경우가 편집되어 빈값이 설정됩니다.**


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|셀 값을 유지한 후 편집모드 (`default`)|
|`1(true)`|셀 값을 초기화 후 편집모드|


### Example
```javascript
options.Cfg = {
    ClearEditPass: true,        // Pass 열의 셀을 편집할때 초기화 후 편집모드 진입
    ...
};
```

### Read More
- [Type appendix](/docs/appx/type)
- [Type col](/docs/props/col/type)
- [Type cell](/docs/props/cell/type)
- [setString method](/docs/funcs/core/set-string)
- [setValue method](/docs/funcs/core/set-value)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
