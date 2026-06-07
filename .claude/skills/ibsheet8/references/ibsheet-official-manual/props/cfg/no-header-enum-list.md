---
KEY: noHeaderEnumList
KIND: config-property
PATH: props/cfg/no-header-enum-list
ALIAS: 버전, 이후로, 관계없이, 헤더의, 높이가
ALIAS_EN: no, header, enum, list
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/no-header-enum-list
---
# !NoHeaderEnumList ***(cfg)*** `[Deprecated]`

> **<mark>8.0.0.29-20221222-1026-DEV-1 버전 이후로 NoHeaderEnumList에 관계없이 Enum 헤더의 높이가 시트 높이를 넘어서지 않도록 변경되어 해당 기능은 비공개로 유지합니다</mark>**


<details>

> `Enum` 을 편집시, `Enum` 의 구조는 header, list 형태로 만들어지게 됩니다. header 의 경우, 셀 크기만큼 생기게 되고 list 의 경우, 아이템 갯수만큼 만들어지게 됩니다. 

> 그렇다보니, 셀의 크기가 시트의 Body 사이즈보다 커지는 경우 header 가 Body 보다 길게 늘어지는 현상이 발생합니다. 

> `1(true)` 로 설정시, `Enum` 의 header 부분을 만들지 않고 list 형태만 붙이게 됩니다. 셀의 크기가 시트의 Body 사이즈보다 커져도 길게 늘어지는 현상은 발생하지 않습니다. 


###
**NoHeaderEnumList: false, 셀의 크기가 시트의 바디 사이즈 보다 큰 경우** 

![NoHeaderEnumList_true](/assets/imgs/NoHeaderEnumList_false.png "NoHeaderEnumList_true")
<!-- IMAGE: 스크린샷/예시 이미지 - NoHeaderEnumList_true -->

**NoHeaderEnumList: true, 셀의 크기가 시트의 바디 사이즈 보다 큰 경우** 

![NoHeaderEnumList_false](/assets/imgs/NoHeaderEnumList_true.png "NoHeaderEnumList_false")
<!-- IMAGE: 스크린샷/예시 이미지 - NoHeaderEnumList_false -->

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Enum 의 Header 부분을 생성함. (`default`)|
|`1(true)`|Enum 의 Header 부분을 생성하지 않음.|


### Example
```javascript
options.Cfg = {
    NoHeaderEnumList: true,        // Enum 의 Header 부분을 생성하지 않음.
    ...
};
```

### Read More

</details>

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.20|기능 추가|
|core|8.1.0.0|`Deprecated`|
