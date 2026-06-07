---
KEY: decimalAdjust
KIND: cell-property
PATH: props/cell/decimal-adjust
ALIAS: 타입, 컬럼, 데이터의, 근사값, 처리방식을
ALIAS_EN: decimal, adjust
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/decimal-adjust
---
# DecimalAdjust ***(cell)***

> Int, Float 타입 컬럼 데이터의 근사값 처리방식을 설정합니다. 


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`round`|근사값을 반올림으로 처리합니다. (`default`)|
|`floor`|근사값을 내림으로 처리합니다.|
|`ceil`|근사값을 올림으로 처리합니다.|

```javascript
//조회 데이터 내에서 속성 적용  (열이름 :FloatData )
{
    data:[
        {... , "FloatData": 15.1, "FloatDataDecimalAdjust": "floor", ...} // 해당 셀의 근사값 처리 방식을 내림으로 설정
    ]
}
```

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.11|기능 추가|
