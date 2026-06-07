---
KEY: method
KIND: method
PATH: funcs/method
ALIAS: sheet.method, method(), 사용법, 기초, 시트가, 제공하는, 모든
ALIAS_EN: method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/method
---
# method 사용법 기초
> 시트가 제공하는 모든 메소드는 각 파라미터를 순서대로 설정하거나 하나의 `object` 형태로 설정할 수 있습니다.

### 파라미터 설정 방법
```javascript
//addRow 행추가   (next: 행위치, visible: 보임여부, focus: 포커스 이동여부, parent: 트리사용시 부모 행객체)

//각 파라미터를 순서대로 설정
sheet.addRow(sheet.getFirstRow(), 1);

//파라미터를 object 형태로 설정
sheet.addRow({visible: 1, focus: 1});
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
