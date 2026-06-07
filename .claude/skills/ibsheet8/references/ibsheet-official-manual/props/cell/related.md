---
KEY: related
KIND: cell-property
PATH: props/cell/related
ALIAS: 이나, 열들, 간에, 연관성을, 대분류
ALIAS_EN: related
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/related
---
# Related ***(cell)***
> [Type](./type)이 [Enum](/docs/props/cell/enum)이나 [Radio](/docs/props/cell/radio) 인 열들 간에 연관성을 통해, 대분류/중분류/소분류와 같은 **관계형 콤보**를 설정합니다.

> 자세한 사용 방법은 col [Related](/docs/props/col/related)속성을 확인해 주세요.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|자신의 상위 관계 열이름|

### Example
```javascript
//Related 속성을 통해 대분류/중분류/소분류에 해당하는 콤보를 구성
//메소드를 통해 특정 셀에 속성 적용 (열이름: CLS3)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS3", "Related", "CLS1,CLS2");
```

### Read More
- [Related col](/docs/props/col/related)
- [Enum cell](/docs/props/cell/enum)
- [EnumKeys cell](/docs/props/cell/enum-keys)
- [Clear cell](/docs/props/cell/clear)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
