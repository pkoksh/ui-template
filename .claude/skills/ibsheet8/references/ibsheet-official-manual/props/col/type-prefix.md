---
KEY: typePrefix
KIND: column-property
PATH: props/col/type-prefix
ALIAS: 속성을, 사용자, 지정대로, 사용, 있게
ALIAS_EN: type, prefix
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/type-prefix
---
# !TypePrefix ***(col)***

> [Type](/docs/props/cell/type) 셀 속성을 사용자 지정대로 사용 할 수 있게 만듭니다.

> 이 속성을 설정하고 [UserAttr](/docs/props/cfg/user-attr) 속성을 설정 할 경우 행 객체 안에 `열 이름+prefix+"Type"` 형태로 셀 속성이 설정됩니다.

> **반드시 cfg 와 col 속성을 모두 설정해야 정상적으로 사용 가능합니다.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Type 속성 앞에 사용 할 문자열|

### Example
```javascript
// Type 셀 속성을 사용자 지정대로 사용
options.Cfg = {
   UserAttr: true
};

options.Col = [
  {
    Name: "sUser",
    Type: "Text",
    TypePrefix: "@"
  },
  {    
    Name: "sUserType",
    Type: "Int"
  }
];
```

### Read More
- [UserAttr cfg](/docs/props/cfg/user-attr)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.14|기능 추가|
