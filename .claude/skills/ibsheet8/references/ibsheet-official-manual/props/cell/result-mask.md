---
KEY: resultMask
KIND: cell-property
PATH: props/cell/result-mask
ALIAS: 편집, 종료시, 입력된, 글자를, 검사할
ALIAS_EN: result, mask, edit, editable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/result-mask
---
# ResultMask ***(cell)***

> 셀 편집 종료시 입력된 글자를 검사할 자바스크립트 정규식을 설정합니다.

> 정규식 검사에 대한 로직은 [EditMask](/docs/props/cell/edit-mask)와 동일합니다.
>
> 정규식에 맞지 않은 글자가 입력되었을 시에는 [ResultMessage](/docs/props/cell/result-message)속성으로 설정한 메세지가 화면에 보여집니다.

> [onResultMask](/docs/events/on-result-mask)이벤트의 리턴값을 통해 잘못된 값이 입력되었을때 후속 처리에 대한 부분을 설정하실 수 있습니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|자바스크립트 정규식 문자|

### Example
```javascript
//조회 데이터 내에서 속성 적용  (열이름: CLS)
{
    data:[
        //이메일 주소만 입력 가능
        {... ,CLSResultMask:"^[\\w\\.\\+%-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,6}$",
          CLSResultText:"이메일 주소를 확인해 주세요.", ...}
    ]
}
```
### Read More
- [ResultText cell](/docs/props/cell/result-text)
- [ResultMessage cell](/docs/props/cell/result-message)
- [Error cell](/docs/props/cell/error)
- [EditMask cell](/docs/props/cell/edit-mask)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
