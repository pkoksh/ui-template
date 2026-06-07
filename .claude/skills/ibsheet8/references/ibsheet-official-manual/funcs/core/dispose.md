---
KEY: dispose
KIND: method
PATH: funcs/core/dispose
ALIAS: sheet.dispose, dispose(), 시트를, 메모리에서, 제거합니다
ALIAS_EN: dispose
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/dispose
---
# dispose ***(method)***

> 시트를 DOM과 메모리에서 제거합니다.

> `dispose`된 시트는 더 이상 사용할 수 없고, 초기화 과정을 통해 처음부터 다시 생성해야 합니다.
> SinglePageApplication 기반의 프로젝트에서는 페이지 이동 전에 이 함수를 통해 시트 객체를 제거해야만 합니다.
### Syntax
```javascript
void dispose();
```


### Return Value
***none***

### Example
```javascript
//시트객체를 완전히 제거
sheet.dispose();
```

### Read More

- [clear method](./clear)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
