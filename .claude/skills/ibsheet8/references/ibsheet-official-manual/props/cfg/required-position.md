---
KEY: requiredPosition
KIND: config-property
PATH: props/cfg/required-position
ALIAS: 보여질, 위치를, 설정합니다
ALIAS_EN: required, position
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/required-position
---
# RequiredPosition ***(cfg)***
> [Required](/docs/props/col/required)가 보여질 위치를 설정합니다.

### Type
String

### Options
|Value|Description|
|-----|-----|
|`Left`|헤더의 왼쪽에 `Required` 표시를 합니다. (`default`)
![option1](/assets/imgs/required1.png "option1")
<!-- IMAGE: 스크린샷/예시 이미지 - option1 -->|
|`Right`|헤더의 오른쪽에 `Required` 표시를 합니다
![option2](/assets/imgs/required2.png "option2")
<!-- IMAGE: 스크린샷/예시 이미지 - option2 -->|
|`None`|헤더에 `Required` 마크를 표시하지 않습니다
|


### Example
```javascript
options = {
    Cfg:{
      RequiredPosition: "Right", // 헤더의 오른쪽에 Required를 설정
    },
    Cols : [
      {Type: "Text", Name: "sName", Required: 1 ...},
      {Type: "Int", Name: "ssalary",Width: 70 ...},
    ...
    ];
};
```

### Read More
- [Required col](/docs/props/col/required)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.2.0.13|`None` 옵션 추가|
