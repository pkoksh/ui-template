---
KEY: menuHSeparator
KIND: config-property
PATH: props/cfg/menu-h-separator
ALIAS: 사용시, 아이템, 구분자를, 지정할
ALIAS_EN: menu, separator
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/menu-h-separator
---
# MenuHSeparator ***(cfg)***
> [Menu](/docs/props/col/menu) 사용시 아이템 구분자를 지정할 수 있습니다. 

> 더불어 `-`와 `-*`는 기본적으로 [EnumKeys](/docs/props/col/enum-keys) 옵션에 설정했을 때 구분자가 생성되는 예약어로 작동하는데, 만약 `-`, 혹은 `-*` 예약어를 [EnumKeys](/docs/props/col/enum-keys)에 직접 데이터로 넣고 싶으시다면 해당 옵션을 이용해 `-`, `-*` 이외의 문자열을 지정해주시면 됩니다.

![MenuHSeparator](/assets/imgs/MenuHSeparator.png "여MenuHSeparator 기능")
<!-- IMAGE: 스크린샷/예시 이미지 - MenuHSeparator -->


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|메뉴 아이템 구분자로 지정할 예약어|


### Example
```javascript
options.Cfg = {
    MenuHSeparator : '!',     // 메뉴 아이템 구분자로 지정할 예약어 --------를 표시할 구분자를 !로 변경
};

options.Cols = [
   { Type: 'Enum', "Enum": "|대기|-|진행중|완료","EnumKeys": "|01|-|02|03|04", Name: 'char' ... },      // '-'와 같은 구분자 예약어도 데이터로 사용가능 
   { Type: "Text", Menu: "|진행|반려|전결|보류", Name: "procs" ... }
];

```

### Read More
- [Enum col](/docs/props/col/enum)
- [EnumKeys col](/docs/props/col/enum-keys)
- [Menu col](/docs/props/col/menu)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|기능 추가|
