---
KEY: setEditMask
KIND: method
PATH: funcs/core/set-edit-mask
ALIAS: sheet.setEditMask, setEditMask(), 해당, 기능은, 버전, 이후로, 지원하지
ALIAS_EN: set, edit, mask
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-edit-mask
---
# !setEditMask ***(method)*** `[Deprecated]`

> 해당 기능은 8.0.0.0 버전 이후로 지원하지 않습니다.

> 8.2.x.x 버전 이후로 삭제됩니다.

<details>

> 시트 내 특정 열에 해당하는 셀 편집시 사용될 외부 마스킹 라이브러리를 연동시킵니다.</br>
> 열 내에 있는 셀 별로 다른 마스킹을 설정하는 것은 불가능합니다.

### Syntax
```javascript
void setEditMask( maskmap );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|maskmap|`object`|필수|대상 열이름을 키로, 외부 마스킹 라이브러리를 연동시키는 콜백함수(파라미터는 1개)를 값으로 가지는 객체 
 ex) `{"열이름" : func1, "열이름2" : func2 }`|


### Return Value
***none***


### Example
```javascript
sheet.setEditMask({
    "sDate_yyyyMMdd": function(input) {
        // 외부 Cleave 라이브러리를 "sDate_yyyyMMdd"에 연동
        var cleave = new Cleave(input, {
            date: true,
            delimiter: '-',
            datePattern: ['Y', 'm', 'd']
        })
    },
    "sDate_yyyyMMResolve": function(input) {
        // "sDate_yyyyMMdd"에 연동된 라이브러리에서 마스킹이 제거된 값을 리턴합니다.
        return cleave.getRawValue();
    }
    "sDate_yyyyMM": function(input) {
        // 외부 jquery.inputmask 라이브러리를 "sDate_yyyyMM"에 연동
        $(input).inputmask("9999/99");
    }
    "sDate_yyyyMMResolve": function(input) {
        // "sDate_yyyyMM"에 연동된 라이브러리에서 마스킹이 제거된 값을 리턴합니다.
        return $(input)[0].inputmask.unmaskedvalue();
    }
});

```

### Read More
- [EditMaskFunc cfg](/docs/props/cfg/edit-mask-func)

</details>

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.0|`Deprecated`|
