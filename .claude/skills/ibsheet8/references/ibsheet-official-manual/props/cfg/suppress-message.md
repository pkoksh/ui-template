---
KEY: suppressMessage
KIND: config-property
PATH: props/cfg/suppress-message
ALIAS: 시트에서, 제공하는, 상태, 메시지들, 표시하지
ALIAS_EN: suppress, message
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/suppress-message
---
# SuppressMessage ***(cfg)***

> 시트에서 제공하는 상태 메시지들 중 표시하지 않을 메시지 종류에 대해 설정 합니다.  

> **<mark>주의</mark> : 시트 수가 많을 경우, `SuppressMessage: 0` 설정으로 인해 렌더링이 지연될 수 있습니다.**



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|시트 내에서 발생하는 모든 메세지 표시|
|`1`|시트 로딩 및 업데이트시 생성되는 메시지 표시 안함. 렌더링 메세지는 표시됨.|
|`2`|1번 옵션 + 정렬과 같이 시트 내부 계산에 대한 정보 메세지 표시 안함 |
|`3`|2번 옵션 + 페이지 로딩 및 렌더링, 조회, 저장 메세지 표시 안함 (`default`)|
|`4`|3번 옵션 + 시트가 정상적으로 보여지지 않을 때의 에러 메세지 표시 안함 |


### Example
```javascript
options.Cfg = {
  SuppressMessage: 0,       // 시트 내에서 발생하는 모든 메세지 표시
  ...
};
```

### Read More
- [showMessage method](/docs/funcs/core/show-message)
- [showMessageTime method](/docs/funcs/core/show-message-time)
- [showProgress method](/docs/funcs/core/show-progress)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
