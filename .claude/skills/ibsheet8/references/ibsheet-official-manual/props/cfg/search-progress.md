---
KEY: searchProgress
KIND: config-property
PATH: props/cfg/search-progress
ALIAS: 데이터, 조회, 사용시, 내부에서, 일어나는
ALIAS_EN: search, progress, data, query, fetch, load, retrieve
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/search-progress
---
# SearchProgress ***(cfg)***

> 데이터 조회(`doSearch, loadSearchData`) 사용시 내부에서 일어나는 작업 과정
(`"API 호출 및 응답대기", "데이터 파싱", "렌더링 시작", "렌더링 완료"`)을 순차적으로, 프로그래스바 형태로 보여줍니다. 

> 프로그레스바가 비동기형태로 동작하기 때문에 실제 시트에 로딩되는 속도와는 약간 차이가 있을 수 있습니다. 

> 조회시에 `SuppressMessage`를 낮추어 다른 조회 메세지를 사용시에는 해당 프로그레스바와 충돌이 일어날 수 있음으로, 
 `SuppressMessage`를 3, 4 사용을 권장합니다.

> 조회 중에 오류 발생시, 해당 프로그래스바에서 어떤 과정에서 오류가 났는지 확인할 수 있습니다. 


### 프로그레스바 구조

![프로그래스바](../../../assets/imgs/showProgress.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 프로그래스바 -->

프로그래스바에 표시되는 Text는 메세지 파일(ko.js 등)의 `SearchProgressMessage`, `DataSearchingMessage` 값입니다.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|데이터 조회 시 프로그래스바 미사용 (`defalut`)|
|`1(true)`|데이터 조회 시 프로그래스바 사용|


### Example
```javascript
options.Cfg = {
    SearchProgress: true
};
```

### Read More
- [SuppressMessage cfg](./suppress-message)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.14|기능 추가|
