---
KEY: memoId
KIND: config-property
PATH: props/cfg/memo-id
ALIAS: 시트에, 메모기능을, 사용하기, 필요한, 고유한
ALIAS_EN: memo, id
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/memo-id
---
# MemoId ***(cfg)***

> 시트에 메모기능을 사용하기 위해 필요한 고유한 id 값을 설정합니다.

> 메모기능은 시트의 헤더 셀에 설정 가능합니다.

> 메모기능이 설정된 헤더 셀에는 왼쪽 위에 빨간색 삼각형이 표시됩니다.

> 메모기능이 설정된 헤더 셀에 마우스를 올렸을 경우 툴팁 형태로 메모값이 보여집니다.

> 메모 값 설정을 위해서는 [showMemoDialog method](/docs/funcs/core/show-memo-dialog)를 통하여 셋팅 가능합니다.

> 메모 데이터는 브라우저의 localStorage에 관리됩니다.

![MemoId](/assets/imgs/memoId0.png)
<!-- IMAGE: 스크린샷/예시 이미지 - MemoId -->

![MemoId](/assets/imgs/memoId1.png)
<!-- IMAGE: 스크린샷/예시 이미지 - MemoId -->

### Type
`string`


### Example
```javascript
options.Cfg = {
    MemoId: "sheet1Memo" // 메모기능을 사용하기 위한 시트의 메모 id 값 설정
};
```

### Read More
- [showMemoDialog method](/docs/funcs/core/show-memo-dialog)
- [removeMemo method](/docs/funcs/core/remove-memo)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.19|기능 추가|
