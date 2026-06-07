---
KEY: customFormat
KIND: column-property
PATH: props/col/custom-format
ALIAS: 원본, 데이터에, 마스킹을, 정의합니다
ALIAS_EN: custom, format
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/custom-format
---
# CustomFormat ***(col)***
> 원본 데이터에 대한 마스킹을 정의합니다.

> <mark>Type이 Text또는 Lines인 경우</mark> 사용 가능한 사용자 정의 포맷으로, 사용자가 선언한 커스텀 포맷 함수도 지정가능합니다.

> `|`구분자로 여러개 포맷 지정 가능 합니다.

> `CustomFormat`에서 사용 가능한 예약어는 다음과 같습니다.
> |Value|Description|
> |-----|-----|
> |`#`|그대로 보여지는 글자|
> |`*`| *(별표)로 처리되는 글자|
> |`PostNo`| 우편번호 |
> |`IdNoMask`| 주민등록번호(뒤 6자리 *(별표)로 처리) |
> |`IdNo`| 주민등록번호(full text) |
> |`SaupNo`| 사업자 등록번호 |
> |`CardNo`| 카드번호 |
> |`PhoneNo`| 전화번호(휴대폰번호) |


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|열의 Type에 따른 다양한 포맷설정 문자열|


### Example
```javascript

options.Cols = [
    ...
    //전화번호 포맷을 정의합니다.
    {Type: "Text", Name: "sPhone", CustomFormat: 'PhoneNo' ...}, //0226212288 입력시 02-2621-2288로 표시, 01073213834 입력시 010-7321-3834 로 표시
    //임의의 포멧을 정의합니다.
    {Type: "Text", Name: "sawonNo", CustomFormat: '###-#####' ...}, //12345678 입력시 123-45678로 표시
    //주민번호에 뒷자리를 감추는 형식
    {Type: "Text", Name: "cNo", CustomFormat: 'IdNoMask' ...}, //8501242384211 입력시 850124-2******로 표시
     //데이터의 자릿수에 따라 지정
    {Type: "Text", Name: "cNo", CustomFormat: 'IdNoMask|SaupNo' ...}, //8501242384211(주민번호) 입력시 850124-2******로 표시, 6258412458(사업자번호) 입력시 625-84-12458로 표시
    //임의의 함수로 처리
    {Type: "Text", Name: "ISDNS", CustomFormat: function(v, sheet, col){
        //값의 글자수에 따라 다른 포멧으로 보여지게 끔 표시
        if (v.length > 10) {
            //######-#######
            return v.substr(0,6) + "-" + v.substr(6);
        } else {
            //#####-#####
            return v.substr(0,5) + "-" + v.subst(5);
        }

    }},
    ...
];
```

### Read More
- [Format appendix](/docs/appx/format)
- [Format col](./format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.87|function 사용시 시트객체, 컬럼명 인자 추가|