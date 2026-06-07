---
KEY: groupSubTotal
KIND: column-property
PATH: props/col/group-sub-total
ALIAS: 그룹, 소계, 기능, 사용시, 소계행에
ALIAS_EN: group, sub, total, subtotal
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/group-sub-total
---
# GroupSubTotal ***(col)***
> [UseGroupSubTotal cfg](/docs/props/cfg/use-group-sub-total) 그룹 소계 기능 사용시, 그룹 소계행에 적용될 옵션을 설정합니다.

> 소계 계산을 표현할 열에 `Type`, `Color`, `Format`을 설정할 수 있습니다.

> 반드시 [UseGroupSubTotal cfg](/docs/props/cfg/use-group-sub-total) 을 설정</b>해야 정상적으로 동작합니다.

### Type
`object`

### Options
|Name|Type|Required|Description|
|----------|-----|---|----|
|`Type`|`string`|필수|계산 타입 
 `"Sum"`: 합계 
 `"Avg"`: 평균 
 `"Count"`: 갯수 
 `"Max"`: 최대값 
 `"Min"`: 최소값|
|`Color`|`string`|선택|소계행의 배경색 
 "#FFFFEF" (`default`)|
|`Format`|`string`|선택|소계 계산에 적용할 포맷 
 열에 적용된 "Format" (`default`)|



### Example
```javascript
options.cfg = {
    "Group": "SA_DEPTID",
    //그룹 소계 기능 사용 설정
    "UseGroupSubTotal": 1
};

//그룹 소계행 설정
options.Cols = [
    ...
    {Type: "Int", Name: "SA_DEPTID", GroupSubTotal: { Type: "Sum", Color: "#FFDDAA" ,"Format": "#,###"}, ...},
    ...
];
```

### Read More
- [UseGroupSubTotal cfg](/docs/props/cfg/use-group-sub-total)
- [Group cfg](./docs/props/cfg/group)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.8|기능 추가|
