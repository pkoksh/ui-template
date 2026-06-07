---
KEY: relWidth
KIND: column-property
PATH: props/col/rel-width
ALIAS: 열의, 상대적, 너비를, 설정합니다
ALIAS_EN: rel, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/rel-width
---
# RelWidth ***(col)***
> 열의 상대적 너비를 설정합니다.

> 열의 너비를 퍼센트로 설정하는 것과 유사하게 열간의 상대적인 너비를 설정합니다.

> 가령 시트의 크기가 1000px이고, 각 열의 너비가 100px 으로 설정한 열이 5개 있다고 가정할때 이중 한 열이 `RelWidth: 1`을 갖으면 해당 열의 너비는 600px를 갖게 됩니다.

> 만약 두개 열이 `RelWidth: 1`을 갖으면 두개 열은 각각 300px를 갖게 됩니다.

> 만약 두개 열이 `RelWidth` 속성이 설정되어있는데, 하나는 `RelWidth: 1`이고 다른 하나는 `RelWidth: 2` 로 설정되어 있다면 `RelWidth: 1` 인 열의 너비는 200px, `RelWidth: 2`인 열의 너비는 400px가 됩니다. 

> **주의 : 상대적 너비를 설정하다 보니, 시트 전체 너비보다 설정된 컬럼들의 너비가 더 큰 경우, `RelWidth` 가 설정된 컬럼의 너비가 작아지거나 0 이 되는 경우가 있기 때문에, 반드시 `minWidth` 를 사용하여 최소 너비를 지정해주는 것이 좋습니다.**

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|남는 너비에 대한 상대적인 비율|


### Example
```javascript
//특정 열이 나머지 영역을 모두 차지하게 설정
options.Cols = [
    ...
    {Type: "Date", Name: "em_date", RelWidth: 1, MinWidth: 100, ...},
    ...
];
```

### Try it
- [Set to 1](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/RelWidth-1/)

### Read More
- [Width col](./width)
- [MinWidth col](./min-width)
- [MaxWidth col](./max-width)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
