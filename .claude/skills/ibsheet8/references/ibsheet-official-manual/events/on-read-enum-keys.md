---
KEY: onReadEnumKeys
KIND: event
PATH: events/on-read-enum-keys
ALIAS: 해당, 기능은, 버전, 이후로, 지원하지
ALIAS_EN: on, read, enum, keys
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-read-enum-keys
---
# !onReadEnumKeys ***(event)*** `[Deprecated]`

> 해당 기능은 8.1.x.x 버전 이후로 지원하지 않습니다.

> 8.2.x.x 버전 이후로 삭제됩니다.

<details>

> [Enum](/docs/props/col/enum)과 [EnumKeys](/docs/props/col/enum-keys) 속성이 설정된 콤보를 열 때 호출되는 이벤트입니다.

> 기존의 [EnumKeys](/docs/props/col/enum-keys)대신 새로운 콤보 키를 리턴하여 사용할 수 있습니다.

> 마우스 호버, 포커싱 및 셀 편집 모드로 들어갈 때마다 호출되므로 해당 이벤트에 복잡한 로직을 넣는 경우 <b>시트 성능 저하가 발생할 수 있습니다</b>

### Syntax

```
    onReadEnumKeys : function(paramObject) {

    }
or
    sheet.bind("onReadEnumKeys" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|셀의 열이름|
|enumkeys|`string`|기존에 설정된 `EnumKeys`|

### Return
***string***

### Example
```javascript
options.Events = {
    onReadEnumKeys:function(evtParam){
        // 도시 열에 있는 셀 값이 서울인 경우와 인천인 경우에 대해 다른 Enum을 보여줍니다.
        if (evtParam.col == "sDistrict") {
            if (evtParam.row["sCity"] === "서울") {
                return "||01|02|03|04|05|06|07|08";
            } else if (evtParam.row["sCity"] === "인천") {
                return "||a|b|c|d";
            } else if (evtParam.row["sCity"] === "부산") {
                return "||A|B|C|D|E|F|G|H";
            }
        }
    }
}
```

### Read More

- [EnumKeys col](/docs/props/col/enum-keys)
- [onReadEnum event](./on-read-enum)

</details>

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.0|`Deprecated`|
