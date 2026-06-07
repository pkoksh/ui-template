---
KEY: editarrowbehavior
KIND: config-property
PATH: props/cfg/editarrowbehavior
ALIAS: 편집, 키보드, 방향키로, 이동을, 있도록
ALIAS_EN: editarrowbehavior, edit, editable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/editarrowbehavior
---
# EditArrowBehavior ***(cfg)***

> 편집 중 키보드 좌/우 방향키로 셀 이동을 할 수 있도록 설정 합니다.

> 커서가 편집 중인 텍스트의 좌/우 끝에 도달 했을 때 이동합니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|기능 사용 안함 (`default`)|
|`1`|편집 불가 컬럼은 건너뛰고 좌/우 셀로 이동합니다.|
|`2`|편집 불가 컬럼인 경우에는 포커스 이동 후 편집 모드가 종료 되며 좌/우 셀로 이동합니다.|


### Example
```javascript
options.Cfg = {
    EditArrowBehavior: 2
};
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.97|기능 추가|
