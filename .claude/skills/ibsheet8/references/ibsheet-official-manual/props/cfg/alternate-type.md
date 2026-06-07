---
KEY: alternateType
KIND: config-property
PATH: props/cfg/alternate-type
ALIAS: 트리로, 구성된, 시트에서, 자식행들도, 계산에
ALIAS_EN: alternate, type
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/alternate-type
---
# AlternateType ***(cfg)***

> 트리로 구성된 시트에서 자식행들도 [Alternate](./alternate) 계산에 포함될지 여부를 설정합니다. 

> 해당 속성을 `1`로 설정한 경우, 트리를 펼치고 접을 때마다 자식행들에 대한 컬러 계산이 이루어지면서 시트가 느려질 수 있습니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|트리 시트의 자식행을 포함하지 않고 하이라이트 표시 (`default`)|
|`1`|트리 시트의 자식행을 포함해 재계산하여 하이라이트 표시 |


### Example
```javascript
options.Cfg = {
    "Alternate": 2,        // 짝수행에 하이라이트 표시
    "AlternateType": 1     // 트리시트에서 자식행도 Alternate 에 포함하여 하이라이트 처리
};
```

### Read More
- [Alternate cfg](./alternate)
- [AlternateColor row](/docs/props/row/alternate-color)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
