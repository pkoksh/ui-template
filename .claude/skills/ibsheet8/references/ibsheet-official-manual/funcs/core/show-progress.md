---
KEY: showProgress
KIND: method
PATH: funcs/core/show-progress
ALIAS: sheet.showProgress, showProgress(), 시트, 영역, 가운데에, 진행상태를, 표시하는
ALIAS_EN: show, progress, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/show-progress
---
# showProgress ***(method)***
> 시트 영역 가운데에 진행상태를 표시하는 `Dialog`를 띄웁니다.

> 다이얼로그를 제거하기 전까지 시트는 비활성화 됩니다.

> [hideMessage](./hide-message)를 호출하시면 다이얼로그가 제거됩니다.

> [SuppressMessage](/docs/props/cfg/suppress-message) : 0, 1 에서만 동작합니다.

###
![showProgress](/assets/imgs/showProgress.png "시트 영역 위에 진행율 다이얼로그를 띄움")
<!-- IMAGE: 스크린샷/예시 이미지 - showProgress -->


### Syntax
```javascript
void showProgress( caption, text, cancel, pos, cnt );
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|caption|`string`|필수|다이얼로그의 제목|
|text|`string`|필수|다이얼로그의 내용|
|cancel|`string`|선택|다이얼로그에 표시될 버튼 내용(버튼을 클릭시 다이얼로그는 제거되고 시트 내부에 `CancelProgress` 속성이 `1`로 수정됨) (`default: null`)|
|pos|`number`|선택|cnt(전체)중 진행 정도 (`default: 0`)|
|cnt|`number`|선택|진행 정도 마지노선 (`cnt:5, pos:1`이면 프로그레스 바는 1/5 진행으로 표시됨) (`default: 0`)|

### Return Value
***none***

### Example
```javascript
function popup(){
	sheet.showProgress({caption: "회계 년도 계산 중", text: "잠시만 기다려주세요.", pos: 2, cnt: 5});
}
```

### Read More

- [SuppressMessage cfg](/docs/props/cfg/suppress-message)
- [hideMessage method](./hide-message)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
