---
KEY: editMaskFunc
KIND: config-property
PATH: props/cfg/edit-mask-func
ALIAS: 시트, 특정, 열에, 해당하는, 편집시
ALIAS_EN: edit, mask, func, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/edit-mask-func
---
# EditMaskFunc ***(cfg)***

> 시트 내 특정 열에 해당하는 셀 편집시 사용될 외부 마스킹 라이브러리를 연동시킵니다.

> 마스킹을 추가하는 속성과 마스킹을 제거하는 속성(실제 셀에 넣어지는 값은 마스킹이 제거된 값이 필요합니다)을 쌍으로 함께 추가해야합니다.

>
> 대상 열이름을 키로, 외부 마스킹 라이브러리를 연동시키는 마스킹용 콜백함수(파라미터는 1개)를 값으로 받습니다.

> 대상 열이름과 "Resolve"의 조합을 키로, 마스킹 제거 콜백함수(파라미터는 1개)를 값으로 받습니다. 해당 콜백함수는 <b>반드시 마스킹이 제거된 값을 리턴</b>해야합니다. 

> ex) {"열이름" : func1, "열이름Resolve" : func2, "열이름2" : func3, "열이름2Resolve": func4 }


###
![EditMaskFunc사용예](/assets/imgs/editMaskFunc.png)
<!-- IMAGE: 스크린샷/예시 이미지 - EditMaskFunc사용예 -->


아래는 Cleave나 jquery.inputmask 라이브러리를 이용하여 날짜 입력시 마스크를 적용해 본 예제입니다.

### Type
`object`


### Example
```javascript
var cleave;

options.Cfg = {
    EditMaskFunc: {
        "sDate_yyyyMMdd": function(input) {
            // 외부 Cleave 라이브러리를 "sDate_yyyyMMdd"에 연동
            cleave = new Cleave(input, {
                date: true,
                delimiter: '-',
                datePattern: ['Y', 'm', 'd']
            });
        },
        "sDate_yyyyMMResolve": function(input) {
            // "sDate_yyyyMMdd"에 연동된 라이브러리에서 마스킹이 제거된 값을 리턴합니다.
            return cleave.getRawValue();
        },
        "sDate_yyyyMM": function(input) {
            // 외부 jquery.inputmask 라이브러리를 "sDate_yyyyMM"에 연동
            $(input).inputmask("9999/99");
        },
        "sDate_yyyyMMResolve": function(input) {
            // "sDate_yyyyMM"에 연동된 라이브러리에서 마스킹이 제거된 값을 리턴합니다.
            return $(input)[0].inputmask.unmaskedvalue();
        }
    }
};
```

### Try it
- [Demo of EditMaskFunc](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/EditMaskFunc/)

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
