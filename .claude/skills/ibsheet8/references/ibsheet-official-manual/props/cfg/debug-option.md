---
KEY: debugOption
KIND: config-property
PATH: props/cfg/debug-option
ALIAS: 시트의, 디버그, 모드를, 활성화하는, 설정입니다
ALIAS_EN: debug, option
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/debug-option
---
# !DebugOption ***(cfg)***

> 시트의 디버그 모드를 활성화하는 설정입니다. 시트 설정되는 값에 따라 디버깅 되는 내용이 달라집니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
| `error` | (Red) 오류를 출력합니다. 치명적인 오류를 디버깅합니다. (데이터 통신, 포뮬라, 기능 사용 등) |
| `problem` | (Brown) 경고를 출력합니다. 오류와 치명적인 오류를 디버깅합니다. (데이터 통신, 포뮬라, 기능 사용 등) |
| `info` | (Black) 상태를 출력합니다. API 호출 정보, 상태 정보, (Brown) 경고, (Red) 일반 오류와 치명적인 오류를 디버깅합니다. (데이터 통신, 포뮬라, 기능 사용 등) |
| `check` | 모든 생성 옵션을 디버깅합니다. |
| `ioerror` | 데이터 통신의 오류를 출력합니다. |
| `io` | 데이터 통신의 정보를 출력합니다. |

### Example
```javascript
options.Cfg = {
    DebugOption: 'info, check'
};
```

### Read More
- [setDebugger method](/docs/funcs/core/set-debugger)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
