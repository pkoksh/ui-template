---
KEY: enumNoMatchText
KIND: column-property
PATH: props/col/enum-no-match-text
ALIAS: 설정했을, 셀에, 적용할, 대체, 텍스트를
ALIAS_EN: enum, no, match, text
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/enum-no-match-text
---
# EnumNoMatchText ***(col)***
> `EnumStrictMode` 를 1 로 설정했을 때 셀에 적용할 대체 텍스트를 설정합니다.

> 해당 옵션은 `EnumStrictMode` : 1 에서만 사용할 수 있습니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|`EnumStrictMode`: 1 을 사용할 때 셀에 표시할 대체 텍스트 설정|

### Example
```javascript
options.Cols = [
    // EnumStrictMode 설정
    {
        "Header": "Enum1",
        "Type": "Enum",
        "MinWidth": 80,
        "Name": "sEnum",
        "ColMerge": 0,
        "Align": "Center",
        "Enum": "|한국|중국|일본",
        "EnumKeys": "|KOR|CHA|JAP",
        "EnumStrictMode" : 1,
        "EnumNoMatchText" : "대체 텍스트",
        "RelWidth": 1
     }
];

var data = [
    // Enum, EnumKeys 에 아래 데이터가 없으므로 셀에는 "대체 텍스트" 라는 문구가 표시 됩니다.
    {sEnum: "USA"},
    ...
];
```

### Read More
- [EnumStrictMode](/docs/props/col/enum-strict-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.26|기능 추가|
