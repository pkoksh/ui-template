---
KEY: useFilterDialog
KIND: column-property
PATH: props/col/use-filter-dialog
ALIAS: 필터, 다이얼로그를, 사용할지, 여부를, 결정합니다
ALIAS_EN: use, filter, dialog
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/use-filter-dialog
---
# !UseFilterDialog ***(col)***
> 필터 다이얼로그를 사용할지 여부를 결정합니다. 

> 설정시 헤더행에 필터 다이얼로그를 띄우는 아이콘이 생성되며, 버튼 클릭시 나오는 필터 다이얼로그를 이용해 필터링을 진행할 수 있습니다. 

> 더불어 필터 다이얼로그 사용시 필터행은 사용하실 수 없습니다. 

> **제약사항1: 필터 다이얼로그는 멀티레코드 시트에서는 사용하실 수 없습니다.** 

> **제약사항2: 필터 다이얼로그는 컬럼, 셀의 Icon 옵션 및 HeaderCheck 옵션과 함께 사용하실 수 없습니다.**

###
![AlternateCount](/assets/imgs/filterDialog.png "FilterDialog")
<!-- IMAGE: 스크린샷/예시 이미지 - AlternateCount -->

[필터 다이얼로그 이미지]


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|기능 사용 안함 (`default`)|
|`1(true)`|헤더행에 필터 다이얼로그를 띄우는 필터 다이얼로그 아이콘 생성|

### Example
```javascript
//헤더행에 필터 다이얼로그를 띄우는 필터 다이얼로그 아이콘을 생성합니다.
options.Cols = [
    ...
    {
        Header:{
            Value: "문자열(Text)",
            UseFilterDialog: 1,
        },
        Type: "Text", Name: "TextData", Width: 100, ...
    },
    ...
];
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.101|UseFilterDialog:1 옵션 추가|
