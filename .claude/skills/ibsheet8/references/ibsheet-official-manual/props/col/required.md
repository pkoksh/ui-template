---
KEY: required
KIND: column-property
PATH: props/col/required
ALIAS: 데이터의, 필수, 입력, 항목, 여부를
ALIAS_EN: required, mandatory, input, import
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/required
---
# Required ***(col)***
> 데이터의 필수 입력 항목 여부를 설정합니다.

> `1`인 경우 저장 함수 호출 시 셀에 데이터가 없는 경우 경고 메시지를 표시하고, 편집하도록 유도합니다.

> [RequiredPosition](/docs/props/cfg/required-position) 옵션으로 헤더 내용의 왼쪽/오른쪽에 설정 가능합니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|필수 입력 항목을 지정하지 않습니다. (`default`) |
|`1`|필수 입력 항목을 지정합니다.
![option1](/assets/imgs/required1.png "option1")
<!-- IMAGE: 스크린샷/예시 이미지 - option1 -->|

### Example
```javascript
//열 생성시 고유한 이름을 선언
options.Cols = [
    {Type: "Text", Name: "sName", Required: 1 ...},
    {Type: "Int", Name: "ssalary",Width: 70 ...},
    ...
];
```

### Read More
- [RequiredPosition cfg](/docs/props/cfg/required-position)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
