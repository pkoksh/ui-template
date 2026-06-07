---
KEY: onReadEnum
KIND: event
PATH: events/on-read-enum
ALIAS: 빈번하게, 발생하며, 사용, 용도가, 명확하지
ALIAS_EN: on, read, enum
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-read-enum
---
# !onReadEnum ***(event)*** `[Deprecated]`

> **<mark>빈번하게 발생하며 사용 용도가 명확하지 않아 비공개 전환</mark>**

> 해당 기능은 8.1.x.x 버전 이후로 지원하지 않습니다.

> 8.2.x.x 버전 이후로 삭제됩니다.

<details>

> [Enum](/docs/props/col/enum) 속성으로 설정된 콤보를 열 때 호출되는 이벤트입니다.

> 새로운 콤보 리스트를 만들고 리턴하여 기존의 콤보 리스트 대신 사용할 수 있습니다.

> 마우스 호버, 포커싱 및 셀 편집 모드로 들어갈 때마다 호출되므로 해당 이벤트에 복잡한 로직을 넣는 경우 <b>시트 성능 저하가 발생할 수 있습니다</b>

### Syntax

```
    onReadEnum : function(paramObject) {

    }
or
    sheet.bind("onReadEnum" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|셀의 열이름|
|enum|`string`|화면에 보일 콤보 리스트|

### Return
***string***

### Example
```javascript
options.Events = {
    onReadEnum:function(evtParam){
        // 도시 열에 있는 셀 값이 서울인 경우와 인천인 경우에 대해 다른 Enum을 보여줍니다.
        if (evtParam.col == "sDistrict") {
            if (evtParam.row["sCity"] === "서울") {
                return "||강남구|서초구|송파구|용산구|동대문구|중랑구|성동구|동대문구";
            } else if (evtParam.row["sCity"] === "인천") {
                return "||중구|남구|동구|연수구";
            } else if (evtParam.row["sCity"] === "부산") {
                return "||강서구|서구|동구|북구|남구|중구|수영구|해운대구";
            }
        }
    }
}
```

### Read More

- [Enum col](/docs/props/col/enum)
- [onReadEnumKeys event](./on-read-enum-keys)

</details>

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.0|`Deprecated`|
