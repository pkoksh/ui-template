---
KEY: merge
KIND: cell-property
PATH: props/cell/merge
ALIAS: 같은, 안에, 다른, 셀들의, 값을
ALIAS_EN: merge
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/merge
---
# Merge ***(cell)***
> 같은 행 안에 다른 셀들의 값을 한 셀에서 표현하는 기능입니다.

> 눈에 보이기만 할뿐 실제 셀의 값은 별도로 관리됩니다.

> `row`에 [Spanned](/docs/props/row/spanned) 속성이 `1`로 설정되어야 동작합니다.


###
![Merge속성](/assets/imgs/Merge.png "Merge속성")
<!-- IMAGE: 스크린샷/예시 이미지 - Merge속성 -->
[empinfoMerge:"empno,empNm,pstnGbn" 으로 설정]


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|열이름 (","구분자로 여러개 지정 가능)|

### Example
```javascript
//Spanned가 설정되어 있어야 함.
options.Def.Row = {Spanned: 1};

//empinfo 열에서 empno,empNo,pstnGbn 열의 값을 모두 표시
opyiond.Def.Row["empinfo"] = {"Merge": "empno,empNm,pstnGbn"}

```
### Read More
- [Span cell](./span)
- [Spanned row](/docs/props/row/spanned)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
