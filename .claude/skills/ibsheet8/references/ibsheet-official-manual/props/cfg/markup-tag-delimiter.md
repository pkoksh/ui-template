---
KEY: markupTagDelimiter
KIND: config-property
PATH: props/cfg/markup-tag-delimiter
ALIAS: 이나, 처럼, 함수, 사용시, 서버로
ALIAS_EN: markup, tag, delimiter, function, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/markup-tag-delimiter
---
# MarkupTagDelimiter ***(cfg)***

> [down2Excel](/docs/funcs/excel/down-to-excel)이나 [loadExcel](/docs/funcs/excel/load-excel) 처럼 `import/export` 함수 사용시 서버로 전송되는 전문의 구분자를 변경합니다. 

> 서버로 전송되는 전문은 `xml 과 유사한 구조`로 < 나 > 같은 기호를 이용하여 전문을 구성하게 되는데, 일부 서버에서 이러한 `html tag`를 필터링하여 다른 문자로 치환하는 경우 `ibsheet`의 서버 모듈에서 해석하지 못해 오류가 발생하곤 합니다.

> 따라서 이러한 경우 <,>와 같은 테그가 아닌 다른 문자를 지정하여 서버로 전송할 수 있습니다.

> 구분자는 4개가 있으며 이 속성을 통해 구분자를 변경시 서버사이드에서도 이 함수를 통해 동일한 구분자를 설정해야 합니다.

### Type
`array`

### Options
기본 구분자

번호|기호
---|---
1|<
2|>
3|<
4|/>

### Example
```javascript
options.Cfg = {
    MarkupTagDelimiter: ["┼","╫","╬","╪"]
};

```

서버측 설정
```java
    down = new IBSheetDown();

    //====================================================================================================
    // [ 사용자 환경 설정 #1 ]
    //====================================================================================================
    // 엑셀 전문의 MarkupTag Delimiter 사용자 정의 시 설정하세요.
    // 설정 값은 IBSheet8 환경설정(ibsheet.cfg)의 MarkupTagDelimiter 설정 값과 동일해야 합니다.
    //====================================================================================================
    down.setMarkupTagDelimiter("┼","╫","╬","╪");
```

### Read More

- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [loadExcel method](/docs/funcs/excel/load-excel)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
