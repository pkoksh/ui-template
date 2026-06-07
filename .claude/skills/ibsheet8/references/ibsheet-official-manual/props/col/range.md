---
KEY: range
KIND: column-property
PATH: props/col/range
ALIAS: 열에서, 복수개를, 선택하게, 할지, 여부를
ALIAS_EN: range
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/range
---
# Range ***(col)***
> [Type](/docs/appx/type)이 `Enum`, `Radio`, `File`, `Date`인 열에서 복수개를 선택하게 할지 여부를 설정합니다.

> [Type](/docs/appx/type)이 `Enum`인 경우, 드랍리스트 내에 체크박스가 생성되어 여러개 선택이 가능하게 합니다.

> [Type](/docs/appx/type)이 `Radio`인 경우, 체크박스가 생성되어 여러개 아이템을 선택하실 수 있습니다.

> [Type](/docs/appx/type)이 `File`인 경우, 여러개 파일을 선택하실 수 있습니다.

> [Type](/docs/appx/type)이 `Date`인 경우, 드래그를 통해 달력내에 여러 일자를 선택할 수 있습니다.

> 복수로 선택한 아이템은 `locale/*.js` 파일에 `ValueSeparator`, `ValueSeparatorHtml`로 설정한 문자를 구분자로 하여 연결된 문자로 리턴됩니다.
### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|단일 선택만 허용 (`default`)|
|`1(true)`|복수 선택 허용|



### Example
```javascript
//Enum에서 여러개 선택 허용
options.Cols = [
    ...
    {Header: "명절선물", Type: "Enum", Name: "gift", Range : 1, Enum: "|갈비세트|조기세트|사과배|스팸3호" ...},
    ...
];

//File에서 여러개 선택 허용
options.Cols = [
    ...
    {Header: "파일선택", Type: "File", Name: "lblist", Range: 1},
    ...
];

```


### Read More
- [Enum col](/docs/props/col/enum)
- [Radio col](/docs/props/col/radio)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
