---
KEY: userAttr
KIND: config-property
PATH: props/cfg/user-attr
ALIAS: 속성을, 사용자, 지정대로, 사용, 있게
ALIAS_EN: user, attr
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/user-attr
---
# !UserAttr ***(cfg)***
> [Type](/docs/props/cell/type) 셀 속성을 사용자 지정대로 사용 할 수 있게 만듭니다.

> 이 속성을 `1(true)`로 설정하고 [TypePrefix](/docs/props/col/type-prefix)를 설정 할 경우 행 객체 안에 `열 이름+prefix+"Type"` 형태로 셀 속성이 설정됩니다.

> **반드시 cfg 와 col 속성을 모두 설정해야 정상적으로 사용 가능합니다.**


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|셀 속성을 사용자 지정대로 사용 불가 (`default`)|
|`1(true)`|셀 속성을 사용자 지정대로 사용 가능|


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
- [TypePrefix col](/docs/props/col/type-prefix)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.14|기능 추가|
