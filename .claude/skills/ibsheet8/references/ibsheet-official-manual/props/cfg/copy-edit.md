---
KEY: copyEdit
KIND: config-property
PATH: props/cfg/copy-edit
ALIAS: 선택된, 셀의, 값을, 복사시, 마스크가
ALIAS_EN: copy, edit
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/copy-edit
---
# CopyEdit ***(cfg)***

> `ctrl+c`를 통해 선택된 셀의 값을 `clipboard`로 복사시 마스크가 포함된 문자([Format](/docs/props/col/format))로 복사할지, 편집시 사용되는 포맷([EditFormat](/docs/props/col/edit-format)) 복사할지를 설정합니다. 

> `ctrl+v`를 통해 값을 붙여넣기 하는 경우에는, [EditFormat](/docs/props/col/edit-format)이 적용된 셀값을 복사하는 것이 적합합니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|`Format`이 적용된 셀값을 복사, `CustomFormat`이 설정되어 있다면 `CustomFormat`을 우선 적용하여 적용된 셀값을 복사|
|`1`|`EditFormat`이 적용된 셀값을 복사 (`default`)|


### Example
```javascript
options = {
    "Cfg":{
      "CopyEdit": 0,  // Format 이 적용된 셀값으로 복사
    }
};
```

### Read More
- [Format col](/docs/props/col/format)
- [CustomFormat col](/docs/props/col/custom-format)
- [EditFormat col](/docs/props/col/edit-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
