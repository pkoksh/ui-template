---
KEY: disable
KIND: method
PATH: funcs/core/disable
ALIAS: sheet.disable, disable(), 시트를, 비활성화
ALIAS_EN: disable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/disable
---
# disable ***(method)***
> 시트를 비활성화 합니다.

> 시트 위에 투명한 layer가 덮혀 hover 관련 기능을 차단하고 기타 키보드, 마우스 이벤트가 차단됩니다. 

> `disable` 영역은 시트 바깥 영역에 있습니다. `fixedInSheet` 를 `true` 로 사용시에 안쪽에 영역을 고정시킵니다.

### Syntax
```javascript
void disable( hard, fixedInSheet );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|hard|`boolean`|선택|시트위에 50% 반투명 layer가 표시됩니다.
`0(false)`:layer 표시 안함 (`default`)
`1(true)`:layer 표시|
|fixedInSheet|`boolean`|선택|시트 영역 안쪽에 `disable` 영역을 만듭니다.
`0(false)`:`disable` 영역 생성 안함 (`default`)
`1(true)`:`disable` 영역 생성|



### Return Value
***none***

### Example
```javascript
//시트를 비활성화
sheet.disable(true);
```

### Read More
- [enable method](./enable)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.19|`fixedInSheet` 인자 추가|
