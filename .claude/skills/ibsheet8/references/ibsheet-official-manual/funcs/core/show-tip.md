---
KEY: showTip
KIND: method
PATH: funcs/core/show-tip
ALIAS: sheet.showTip, showTip(), 현재, 마우스커서가, 위치한, 곳에, 원하는
ALIAS_EN: show, tip
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/show-tip
---
# showTip ***(method)***
> 현재 마우스커서가 위치한 곳에 원하는 내용의 풍선도움말을 띄웁니다.

> `tip` 인자에 html태그를 넣으면 더 다양한 표현도 가능합니다.

### Syntax
```javascript
void showTip( tip );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|tip |`string`|필수|풍선 도움말에 보여질 내용|

### Return Value
***none***

### Example
```javascript
//현재 마우스 커서 위치에 다음 내용을 풍선도움말 형식으로 띄운다.
sheet.showTip("You are so beautiful");
```

### Read More

- [hideTip method](./hide-tip)
- [onShowTip event](/docs/events/on-show-tip)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
