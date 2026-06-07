---
KEY: useFilterDialog
KIND: config-property
PATH: props/cfg/use-filter-dialog
ALIAS: 필터, 다이얼로그를, 사용할지, 여부를, 결정합니다
ALIAS_EN: use, filter, dialog
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/use-filter-dialog
---
# UseFilterDialog ***(cfg)***
> 필터 다이얼로그를 사용할지 여부를 결정합니다. 

> 설정시 헤더행에 필터 다이얼로그를 띄우는 아이콘이 생성되며, 버튼 클릭시 나오는 필터 다이얼로그를 이용해 필터링을 진행할 수 있습니다. 

> 더불어 필터 다이얼로그 사용시 필터행은 사용하실 수 없습니다. 

> **제약사항1: 필터 다이얼로그는 멀티레코드 시트에서는 사용하실 수 없습니다.** 

> **제약사항2: 필터 다이얼로그는 컬럼, 셀의 Icon 옵션 및 HeaderCheck 옵션과 함께 사용하실 수 없습니다.** 

> **제약사항3: 필터 다이얼로그는 피벗 다이얼로그와 함께 사용하실 수 없습니다.** 


###
![UseFilterDialog](/assets/imgs/filterDialog.png "FilterDialog")
<!-- IMAGE: 스크린샷/예시 이미지 - UseFilterDialog -->

[필터 다이얼로그 이미지]


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|기능 사용 안함 (`default`)|
|`1(true)`|헤더행에 필터 다이얼로그를 띄우는 필터 다이얼로그 아이콘을 생성합니다.|
|`object`|헤더행에 필터 다이얼로그를 띄우는 필터 다이얼로그 아이콘을 생성합니다. 
 json 형태로 옵션을 설정하여 필터 다이얼로그를 바꿀 수 있습니다.|

`UseFilterDialog`를 `object`를 설정할 때, 사용자가 설정할 수 있는 옵션으로는 아래와 같은 것들이 있습니다. 

### UseFilterDialog Options
|Value|Description|
|-----|-----|
|`HideInputFilter`|
![UseFilterDialogInputFilterArea](/assets/imgs/filterDialogInputfilterArea.png "FilterDialogInputFilterArea")
<!-- IMAGE: 스크린샷/예시 이미지 - UseFilterDialogInputFilterArea -->

 데이터 필터 다이얼로그 최상단의 입력 필터를 숨길지 여부를 설정합니다. 
 `true`: 데이터 필터 다이얼로그를 오픈할 때, 다이얼로그 최상단에 입력 필터를 숨깁니다. 
 `false`: 데이터 필터 다이얼로그를 오픈할 때, 다이얼로그 최상단에 입력 필터를 포함합니다. (default: `false`)|
|`Height`|
![UseFilterDialogItemArea](/assets/imgs/filterDialogItemArea.png "FilterDialogItemArea")
<!-- IMAGE: 스크린샷/예시 이미지 - UseFilterDialogItemArea -->

 데이터 필터 다이얼로그 아이템 영역의 높이를 조정합니다. (default: `180`)|
|`ZIndex`|시트의 `(Cfg) ZIndex`와 무관하게 필터 다이얼로그의 `Zindex`를 조정합니다.|
|`Mode`| 데이터 필터 목록에 포함될 데이터를 결정합니다. (`default: 1`)
`1`: 현재 보여지는 데이터를 포함하여 목록을 표시합니다.
`2`: 현재 적용된 필터에 해당하는 데이터를 포함하여 목록을 표시합니다. 

### Example
```javascript
//헤더행에 필터 다이얼로그를 띄우는 필터 다이얼로그 아이콘을 생성합니다.
options.Cfg = {
    UseFilterDialog: true
};

options.Cfg = {
    // 필터 다이얼로그를 띄울 때, 어떻게 띄울지 변경합니다.
    UseFilterDialog: {
      HideInputFilter: true, // 데이터 필터 다이얼로그를 띄울 때, 다이얼로 최상단의 입력 필터를 띄우지 않습니다.
      Height: 150, // 데이터 필터 다이얼로그를 띄울 때, 아이템 영역의 높이를 150px로 조정합니다.
      ZIndex: 1000, // 필터 다이얼로그의 `ZIndex`를 1000으로 설정합니다.
    },
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.94|UseFilterDialog:1 옵션 추가|
|core|8.3.0.35|object 형태로 UseFilterDialog를 설정하는 옵션 추가. 
 UseFilterDialog.HideInputFilter, UseFilterDialog.Height, UseFilterDialog.ZIndex 옵션 추가.|
|core|8.3.0.40|Mode 옵션 추가|