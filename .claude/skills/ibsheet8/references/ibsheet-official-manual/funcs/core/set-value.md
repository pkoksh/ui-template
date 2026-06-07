---
KEY: setValue
KIND: method
PATH: funcs/core/set-value
ALIAS: sheet.setValue, setValue(), 셀의, 값을, 지정한, 값으로, 수정합니다
ALIAS_EN: set, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-value
---
# setValue ***(method)***
> 셀의 값을 지정한 값으로 수정합니다. 

> 편집상태에서 `setValue`를 할 경우, `onEndEdit` 이벤트가 발생합니다. 

> `ignoreOnEndEdit` 을 사용하여, 이벤트를 발생을 막을 수 있습니다.

### Syntax
```javascript
boolean setValue( row, col, val, render, ignoreOnEndEdit, noCalc );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|필수|열이름|
|val|`number`\|`string`|필수|입력값(셀 타입에 맞는 값)|
|render|`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함
`1(true)`:즉시 반영 (`default`)|
|ignoreEvent|`object|boolean`|선택|`setValue`시 발생하는 이벤트를 발생시킬지 여부를 제어하는 옵션입니다. 
 Json 형태로 옵션 세팅이 가능하며, 해당 이벤트 이름을 key 값으로 넣고, true를 리턴할시 해당되는 이벤트가 발생하지 않습니다. 
 해당 옵션을 true/false로 설정할 경우 기존의 `ignoreOnEndEdit`으로 동작합니다.|
|calc|`boolean`|선택|포뮬러 계산 여부 
 해당 기능을 `0(false)`로 설정할 경우 `setValue`시 포뮬러 계산이 이뤄지지 않습니다. 포뮬러를 반영하려면 이후 반드시 `calculate()`를 호출해줘야 됩니다.(`default:1`) |

### ignoreEvent Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| OnChange| `boolean` | 선택 | `setValue`시 발생하는 `OnChange` 이벤트 발생 여부를 제어합니다. true 리턴시 해당 이벤트가 발생하지 않습니다. (`default: 0(false)`) |
| OnSame| `boolean` | 선택 | `setValue`시 발생하는 `OnSame` 이벤트 발생 여부를 제어합니다. true 리턴시 해당 이벤트가 발생하지 않습니다. (`default: 0(false)`) |
|onEndEdit| `boolean` | 선택 | 편집상태에서 `setValue`를 할 경우, 기본적으로 `onEndEdit` 이벤트가 발생합니다. 
 이때 발생하는 `onEndEdit` 이벤트의 발생 여부를 제어합니다. 
 true를 리턴할 경우, 해당 이벤트가 발생하지 않습니다. (`default: 0(false)`)|

### ignoreEvent를 true/false로 설정할 경우 
`ignoreEvent`를 true/false로 설정할 경우, 기존의 5번째 인자 옵션인 `ignoreOnEndEdit`으로 동작합니다. 
`ignoreOnEndEdit`은 기본적으로 `ignoreEvent`의 `onEndEdit` 인자와 동일하게 동작하며 true를 설정할 경우 `onEndEdit` 이벤트가 발생하지 않게 동작합니다. 
 다만 해당 옵션은 deprecated되었으니 `ignoreEvent` 사용을 권장하는 바입니다. 

### Return Value
***boolean*** : 값의 변경 여부 (값이 변경되면 `1(true)`, 변경되지 않으면(기존값과 동일한 경우) `0(false)`)

### Example
```javascript
var r5 = sheet.getRowById("AR5");
//AR5 행에 값을 입력
sheet.setValue( r5, "StartDate", "20160105");
sheet.setValue({row:r5, col:"EndDate", val:"20160315", render:1});
```

### Read More

- [getValue method](./get-value)
- [getString method](./get-string)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.11|`ignoreOnEndEdit` 추가|
|core|8.2.0.21|`ignoreEvent` 추가, `ignoreOnEndEdit` deprecated 처리|
|core|8.3.0.45|`calc` 추가|