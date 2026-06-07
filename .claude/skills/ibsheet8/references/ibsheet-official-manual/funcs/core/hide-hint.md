---
KEY: hideHint
KIND: method
PATH: funcs/core/hide-hint
ALIAS: sheet.hideHint, hideHint(), 현재, 보여지고, 있는, 힌트를, 감춥니다
ALIAS_EN: hide, hint
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/hide-hint
---
# hideHint ***(method)***
> 현재 보여지고 있는 힌트를 감춥니다.


###
![힌트활성화](/assets/imgs/hint1.png "마우스 커서가 셀에 올라갔을때 힌트를 통해 감춰진 부분이 보여짐")
<!-- IMAGE: 스크린샷/예시 이미지 - 힌트활성화 -->

[힌트 예시]

### Syntax
```javascript
void hideHint();
```

### Return Value
***none***

### Example
```javascript
//현재 보여지는 힌트를 감춤
sheet.hideHint();
```

### Read More

- [showHint method](./show-hint)
- [onShowHint event](/docs/events/on-show-hint)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
