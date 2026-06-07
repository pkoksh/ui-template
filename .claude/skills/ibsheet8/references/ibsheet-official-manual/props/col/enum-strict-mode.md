---
KEY: enumStrictMode
KIND: column-property
PATH: props/col/enum-strict-mode
ALIAS: 설정되지, 않은, 값은, 조회, 무시되고
ALIAS_EN: enum, strict, mode, search, query, fetch, load, retrieve
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/enum-strict-mode
---
# EnumStrictMode ***(col)***
> `Enum, EnumKeys`에 설정되지 않은 값은 조회 시 무시되고 `EnumStrictMode`를 `1`로 설정하게 되면 

> 설정되지 않은 값을 셀에 적용 할 수 있습니다.

###
![EnumStrictMode](/assets/imgs/EnumStrictModes.png "EnumStrictMode")
<!-- IMAGE: 스크린샷/예시 이미지 - EnumStrictMode -->

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|`Enum, EnumKeys` 에 설정되지 않은 값을 셀에 적용하지않음. (`default`)|
|`1`|`Enum, EnumKeys` 에 설정되지 않은 값을 셀에 적용.|
|`2`|`Enum, EnumKeys` 에 설정되지 않은 값을 셀에 적용하고, Enum의 List에 해당 값을 추가합니다.|

### Example
```javascript
options.Cols = [
    ...
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
        "RelWidth": 1
     },
    // EnumStrictMode 미설정
     {
        "Header": "Enum2",
        "Type": "Enum",
        "MinWidth": 80,
        "Name": "aEnum",
        "ColMerge": 0,
        "Align": "Center",
        "Enum": "|한국|중국|일본",
        "EnumKeys": "|KOR|CHA|JAP",
        "RelWidth": 1
      },
    ...
];

var data = [
    {sEnum: "USA", aEnum: "USA"},
    ...
];
```

### Read More
- [Enum col](/docs/props/col/enum)
- [EnumKeys col](/docs/props/col/enum-keys)
- [Menu appendix](/docs/appx/menu)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.3|기능 추가|
|core|8.2.0.26|`EnumStrictMode : 2` 추가| 
