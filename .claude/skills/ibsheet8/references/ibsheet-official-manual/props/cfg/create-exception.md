---
KEY: createException
KIND: config-property
PATH: props/cfg/create-exception
ALIAS: 시트, 생성, 과정에서, 오류가, 발생했을
ALIAS_EN: create, exception, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/create-exception
---
# !CreateException ***(cfg)***

> 시트 생성 과정에서 오류가 발생했을 경우 alert 메세지가 아닌 예외를 발생시키는 기능입니다.

> 발생된 예외를 잡아 처리해야 합니다.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|시트 생성에서 에러 발생시 `alert` 메세지 출력 (`default`)|
|`1(true)`|시트 생성에서 에러 발생시 예외 발생|


### Example
```javascript
options = {
  "Cfg":{
    "CreateException": 1,  // 시트 생성시 예외 발생
  }
};

// 시트 생성 예외 처리
try {
  IBSheet.create({
    id: 'sheet', // 생성할 시트의 id
    el: 'sheetDiv', // 시트를 생성할 Dom 객체 및 id
    options: options, // 생성될 시트의 속성
    data: this.data // 생성될 시트의 정적데이터
  });
} catch (e) {
  console.log(e.message); // 예외 메세지 출력
}
```

### Read More

- [create static](/docs/static/create)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.19|기능 추가|
