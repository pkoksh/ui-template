---
KEY: styleRowConfig
KIND: config-property
PATH: props/cfg/style-row-config
ALIAS: 시트, 상단, 혹은, 하단에, 별도의
ALIAS_EN: style, row, config, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/style-row-config
---
# StyleRowConfig ***(cfg)***
> 시트 상단 혹은 하단에 별도의 행을 통해 시트의 스타일을 설정 할 수 있습니다.

> `StorageType`을 통해 스타일 정보를 저장할 방법을 설정할 수 있습니다.


### Type
`object`

### Options
|Value|Type|Description|
|----------|-----|---|
|Visible|`boolean`| 화면 표시 여부
`true`: 표시
`false`: 표시하지 않음 |
|StorageType|`number`|스타일 정보를 저장, 사용할 저장소 유형
`0`: 저장 기능 사용하지 않음(`default`)
`1`: 로컬 스토리지 ([StorageSession](/docs/props/cfg/storage-session)을 설정해야 동작합니다.) 
`2`: 스타일 정보를 `ServerUrl`인자로 지정한 주소로 전송|
|ServerUrl|`string`|`StorageType`: 2인 경우 스타일 정보를 통신할 주소
스타일을 불러올때는 GET, 스타일 저장할 때는 POST 방식으로 전송됩니다.|
|AutoLoad|`boolean`|시트 생성 시 저장된 스타일을 불러올 지 여부 (`default`: true)|
|Themes|`object`|스타일 행에 표시할 테마 목록
시트의 기본 테마 css 파일을 불러온 경우 자동적으로 포함됩니다.|
|Extend|`boolean`| 처음 랜더링 시 '헤더행', '데이터행' 버튼의 펼쳐짐 여부 (`default`: true)| 
|Layout|`Array`|스타일 행에 버튼의 순서와 종류를 설정합니다.
default: `["Init", "Save", "Load", "ApplyAll"]`
`Init`: 시트에 적용된 스타일을 초기화하고, 시트의 id에 해당하는 스타일 정보를 삭제합니다.
`Save`: 시트의 id로 스타일 정보를 저장합니다.
`Load`: 시트의 id에 해당하는 스타일 정보를 불러옵니다.
`ApplyAll`: 동일한 `StorageType`으로 설정된 시트에 스타일을 적용 후 "IB_Style"의 id로 정보를 저장합니다.
`InitAll`: 동일한 `StorageType`으로 설정된 시트의 스타일을 초기화 후 "IB_Style"에 해당하는 정보를 삭제합니다.|

![StyleRowConfig](/assets/imgs/styleRow.png "StyleRowConfig")
<!-- IMAGE: 스크린샷/예시 이미지 - StyleRowConfig -->

### Example
```javascript
options.Cfg = {
  StyleRowConfig: {
    Visible: true,
    StorageType: 2,
    ServerUrl: "./ibsheet/styleInfo.jsp",
    AutoLoad: true,
    Themes: {
      Mono: "./assets/ibsheet/css/mono/main.css", // css 파일 내의 클래스를 key와 일치되도록 수정 필요
      IBGY: "./assets/ibsheet/css/gray/main.css"
    }
  }
};
```
#### 서버 통신 데이터 구조 예시
> 서버와 저장/불러오기 시 주고받는 스타일 정보는 아래와 같은 JSON 구조입니다.
```js
{
  "AlternateColor": "#cfd3d1",        // 데이터 행의 교차 배경색
  "HeaderColor": "#b4e0e4",           // 헤더 배경색
  "HeaderTextColor": "#000000",       // 헤더 텍스트 색상
  "HeaderTextSize": "20",             // 헤더 텍스트 크기(px)
  "RowTextSize": "14",                // 데이터 행 텍스트 크기(px)
  "Theme": "IBMT",                    // 적용 테마명
  "id": "sheet2"                      // 시트 고유 ID
}
```

### Read More
- [StorageSession cfg](/docs/props/cfg/storage-session)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.15|기능 추가|
|core|8.3.0.33|`Layout` 옵션 추가|