---
KEY: shrinkToFit
KIND: cell-property
PATH: props/cell/shrink-to-fit
ALIAS: 이용하여, 엑셀을, 다운로드, 셀에, 내용이
ALIAS_EN: shrink, to, fit
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/shrink-to-fit
---
# !ShrinkToFit ***(cell)***

> [exportData](/docs/funcs/core/export-data)를 이용하여 엑셀을 다운로드 할 때 셀에 내용이 셀 보다 크기가 클 경우 글자 크기 자동 축소 기능을 설정합니다

> `wordWrap` 기능과 같이 사용할 경우 `wordWrap`이 더 우선순위가 높습니다.



### Type

`boolean`

### Options

|Value|Description|
|-----|-----|
|`0(false)`|글자 크기 자동 축소 기능 사용 안함 (`default`)|
|`1(true)`|글자 크기 자동 축소 기능 사용|


### Example

```javascript
//조회 데이터 내에서 속성 적용  (열이름: CLS)
{
    data:[
        {... , "CLSShrinkToFit": 1, ...}
    ]
}
```

### Read More

- [exportData method](/docs/funcs/core/export-data)
- [Wrap cell](./wrap)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.4|기능 추가|
