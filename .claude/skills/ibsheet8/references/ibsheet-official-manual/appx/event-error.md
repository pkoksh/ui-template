---
KEY: eventError
KIND: appendix
PATH: appx/event-error
ALIAS: 객체, 이벤트, 호출, 에러가, 발생하면
ALIAS_EN: event, error
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/event-error
---
# event error 객체 ***(appendix)***
> 이벤트 호출 시 에러가 발생하면 에러에 대한 정보를 담고 있는 error 객체


> onBeforeChange, onResultMask 이벤트 호출 시 에러가 발생되면 error 객체에 에러 정보가 설정됩니다.

### Properties
|Name| Type | Description |
|----------|-----|-------|
|Action |`string`|에러가 발생하게 된 동작|
|Changes |`object`|셀 값을 변경 시도 시, 사용자의 시도와 다른 값이 반환되는 경우에 대한 정보를 담은 배열(ex [[message1, row1, col1],[message2, row2, col2],...] )|
|Errors |`object`|셀에 들어갈 수 없는 값을 설정 시도하였을때 해당 셀의 위치 정보와 에러 메시지 정보를 담은 배열(ex [[message1, row1, col1],[message2, row2, col2],...] )|


### 설정될 수 있는 Action 값


|Name| Description |
|-----------------|-----------|
|Clear|셀 값을 클리어하는 경우|
|Move|포커스된 영역의 셀들을 이동 시|
|Copy|포커스된 영역의 셀들을 복사 시|
|Fill|셀 값에 대한 자동완성 실행하는 경우|
|Paste|클립보드의 값을 셀에 붙여넣기를 시도하는 경우|
|Formula|Formula 계산을 시도하는 경우|
|Validate|설정된 마스킹 옵션에 따라 유효성 검사를 실행하는 경우|

<!--!
### Example
```js
```
!-->

### Read More

- [onBeforeChange event](/docs/events/on-before-change)
- [onResultMask event](/docs/events/on-result-mask)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
