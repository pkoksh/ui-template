---
KEY: customFormat
KIND: cell-property
PATH: props/cell/custom-format
ALIAS: 원본, 데이터에, 마스킹을, 정의합니다
ALIAS_EN: custom, format
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/custom-format
---
# CustomFormat ***(cell)***
> 원본 데이터에 대한 마스킹을 정의합니다.

> <mark>[Type](/docs/appx/type)이 `Text`또는 `Lines`인 경우</mark>에 사용가능한 사용자 정의 포맷으로, 사용자가 선언한 커스텀 포맷 함수도 지정가능합니다.

> `CustomFormat`에서 사용 가능한 예약어는 다음과 같습니다.
> |Value|Description|
> |-----|-----|
> |`#`|그대로 보여지는 글자(숫자)|
> |`*`| *(별표)로 처리되는 글자(숫자)|
> |`PostNo` | 우편번호 |
> |`IdNo` | 주민등록번호(뒤 6자리 *(별표)로 처리) |
> |`IdNoMask` | 주민등록번호(full text) |
> |`SaupNo` | 사업자 등록번호 |
> |`CardNo` | 카드번호 |
> |`PhoneNo` | 전화번호 |

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|열의 Type에 따른 다양한 포맷설정 문자열|


### Example
```javascript
//주민등록번호 포맷을 정의합니다.
{
    data:[
        {... , "CLSCustomFormat":"IdNoMask" , ...}
    ]
}

//사업자 번호와 주민등록번호 마스킹 적용
{
    data:[
        {... , "CLSCustomFormat":"SaupNo|IdNo" , ...}
    ]
}
```

### Read More
- [Format appendix](/docs/appx/format)
- [Format cell](./format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
