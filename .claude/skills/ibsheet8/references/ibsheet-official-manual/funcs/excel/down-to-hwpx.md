---
KEY: downToHwpx
KIND: method
PATH: funcs/excel/down-to-hwpx
ALIAS: sheet.downToHwpx, downToHwpx(), 시트의, 내용을, 한글, 파일로, 다운로드
ALIAS_EN: down, to, hwpx
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/excel/down-to-hwpx
---
# down2Hwpx ***(method)***

> 시트의 내용을 한글(Hwpx) 파일로 다운로드 합니다.

> 이 함수는 시트의 내용을 제품과 같이 배포되는 `Down2Hwpx.jsp` 파일로 전달하고, 이 파일에서 실제 한글(Hwpx) 파일을 생성하여 클라이언트 측으로 전송하게 됩니다.

> 따라서 해당 함수를 사용하시려면  `Down2Hwpx.jsp`와 더불어 `hwpx.jar` 파일이 필요합니다.

> **이 기능을 사용하시려면, 배포시 같이 제공되는 `/plugins/ibsheet-excel.js` 파일을 include 하셔야 합니다.**
>
> `Down2Hwpx.jsp` 파일에 대한 경로는 `Cfg`에 `Export` 속성을 통해 설정됩니다.

> 매 시트 생성시 마다 `Export`속성을 설정하기 번거로운 경우에는 [IBSheet.CommonOptions](/docs/static/common-options) 속성을 통해 모든 시트에 공통으로 설정할 수도 있습니다.

> 다시 정리해 보자면 다음과 같은 작업이 필요 합니다.

###
1. `ibsheet8-hwpx-1.0.x.jar` 파일을 WEB-INF/lib에 추가
2. `/plugins/ibsheet-excel.js` 파일을 해당 페이지에 include
3. 시트 생성시 `Cfg`에 `Export` 속성을 통해 `Down2Hwpx.jsp` 파일에 대한 경로 설정


[다운로드/업로드 관련 기본 정보](/docs/appx/import-export)

### Syntax
```javascript
void down2Hwpx( param );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|fileName|`string`|선택|생성할 한글파일 명 (`default: "Hwpx.hwpx"`) 
**한글 (hwpx)파일명을 지정합니다.**|
|downRows|`string`|선택|지정한 행만 다운로드 합니다.
 별도의 설정이 없을시 모든 행이 다운로드 됩니다.
 보여지는 행만 다운로드하고 싶을 경우 `"Visible"`로 설정하면 됩니다.
 (ex: "1\|3\|4\|5\|9" 식의 문자열)
 `downRows`를 사용하면 머지 기능이 동작하지 않습니다.|
|downCols|`string`|선택|지정한 열만 다운로드 합니다.
 별도의 설정이 없을시 모든 열이 다운로드 됩니다.
 보여지는 열만 다운로드하고 싶을 경우 `"Visible"`로 설정하면 됩니다.
(ex: "Price\|AMT\|TOTAL" 식의 문자열)|
|downHeader|`boolean`|선택|헤더행을 다운로드 할지 여부를 설정합니다.
`0(false)`:다운로드 시 헤더행 미포함
`1(true)`:다운로드 시 헤더행 포함 (`default`)|
|sheetDesign|`number`|선택|`main.css` 파일에 설정된 시트의 디자인 요소를 한글 문서의 표에도 반영할지 여부를 설정합니다. 
 반영되는 디자인 요소는 다음과 같습니다: 헤더의 배경색,폰트명,폰트크기,데이터 배경색 
`0`:셀 외곽선을 제외한 모든 디자인을 적용하지 않습니다.
`1`:셀 외곽선을 포함해 모든 디자인을 적용합니다. (`default`) 
`2`:셀 외곽선을 제외한 셀 스타일을 적용합니다. 
`3`:셀 외곽선 및 스타일을 모두 적용하지 않습니다. 
`4`:헤더행에만 모든 디자인을 적용합니다.
|merge|`boolean`|선택|시트의 머지 상태를 표에 그대로 반영할지를 설정합니다.
`0(false)`:시트의 머지 상태를 표에 반영 안함 (`default`)
`1(true)`:시트에 머지 상태를 표에 반영|
|downSum|`boolean`|선택|합계 행 다운로드 여부를 설정합니다.
`0(false)`:합계 행 다운로드 시 미포함
`1(true)`:합계 행 다운로드 시 포함 (`default`)|
|sheetFontSize|`number`|선택|시트의 폰트 크기를 설정합니다. 
 설정된 폰트 크기는 한글 문서의 표에만 적용됩니다.|
|excludeFooterRow|`boolean`|선택|푸터 행 제외 여부를 설정합니다.
`0(false)`:푸터 행 포함 (`default`) 
`1(true)`:푸터 행 제외|
|reqHeader|`object`|선택|서버 전송 헤더에 사용자가 지정한 헤더 정보를 설정합니다.|
|extendParam|`string`|선택|서버로 전달해야 하는 내용이 있는 경우 `GET` 방식의 `QueryString`으로 연결하여 서버로 같이 전달됩니다.
 (ex: `sheet.down2Excel({extendParam: "sido=서울시&sigungu=관악구"}`)|
|extendParamMethod|`string`|선택|`extendParam`의 내용을 `GET` 또는 `POST`로 전달할지를 설정합니다.(`default: "GET"`)|
|excludeSubSum|`boolean`|선택|소계/누계 행 제외 여부를 설정합니다.
 `0(false)`: 소계/누계 모두 제외하지 않습니다. (`default`)
 `1(true)`: 소계/누계 모두 제외합니다.|
|landScape|`boolean`|선택|한글 문서의 편집용지 방향을 설정합니다.
`0(false)`:세로방향 (`default`)
`1(true)`:가로방향|
|top|`object`|선택|시트를 기준으로 상단에 표현할 문자열을 삽입합니다. 
<table><tr><td>**Name**</td><td>**Type**</td><td>**Required**</td><td>**Description**</td></tr><tr><td>topAlign</td><td>`string`</td><td>선택</td><td>`left, center, right` 중 정렬을 설정합니다.(`default: "center"`)</td></tr><tr><td>topFontBold</td><td>`boolean`</td><td>선택</td><td>폰트의 굵기를 설정합니다. (`default: 0(false)`)</td></tr><tr><td>topFontColor</td><td>`string`</td><td>선택</td><td>폰트 색상을 설정합니다.</td></tr><tr><td>topFontSize</td><td>`number`</td><td>선택</td><td>폰트 크기를 설정합니다.</td></tr><tr><td>topText</td><td>`string`</td><td>선택</td><td>상단에 표현할 문자열을 설정합니다.\r\n 을 사용하면 줄바꿈이 가능합니다.</td></tr></table>(ex: `top: [{topText: "상단영역 첫번째 줄", topAlign: "center", topFontSize: 10, topFontBold: true, topFontColor:"#ff0000"},`
 `{topText: "상단영역 두번째 줄", topAlign: "right", topFontSize: 8, topFontBold: false, topFontColor:"#000000"}]`)|
|bottom|`object`|선택|시트를 기준으로 하단에 표현할 문자열을 삽입합니다.<table><tr><td>**Name**</td><td>**Type**</td><td>**Required**</td><td>**Description**</td></tr><tr><td>bottomAlign</td><td>`string`</td><td>선택</td><td>`left, center, right` 중 정렬을 설정합니다.(`default: "center"`)</td></tr><tr><td>bottomFontBold</td><td>`boolean`</td><td>선택</td><td>폰트의 굵기를 설정합니다(`default: 0(false)`)</td></tr><tr><td>bottomFontColor</td><td>`string`</td><td>선택</td><td>폰트 색상을 설정합니다.</td></tr><tr><td>bottomFontSize</td><td>`number`</td><td>선택</td><td>폰트 크기를 설정합니다.</td></tr><tr><td>bottomText</td><td>`string`</td><td>선택</td><td>하단에 표현할 문자열을 설정합니다.\r\n 을 사용하면 줄바꿈이 가능합니다.</td></tr></table>(ex: `bottom: [{bottomText: "하단영역 첫번째 줄", bottomAlign: "center", bottomFontSize: 10, bottomFontBold: true, bottomFontColor:"#ff0000"},`
 `{bottomText: "하단영역 두번째 줄", bottomAlign: "right", bottomFontSize: 8, bottomFontBold: false, bottomFontColor:"#000000"}]`)|
|hwpxHeader|`object`|선택|머리말 영역에 표현할 문자열을 삽입합니다.<table><tr><td>**Name**</td><td>**Type**</td><td>**Required**</td><td>**Description**</td></tr><tr><td>hwpxHeaderAlign</td><td>`string`</td><td>선택</td><td>`left, center, right` 중 정렬을 설정합니다.(default: "center")</td></tr><tr><td>hwpxHeaderFontBold</td><td>`boolean`</td><td>선택</td><td>폰트의 굵기를 설정합니다(default: false)</td></tr><tr><td>hwpxHeaderFontColor</td><td>`string`</td><td>선택</td><td>폰트 색상을 설정합니다.</td></tr><tr><td>hwpxHeaderFontSize</td><td>`number`</td><td>선택</td><td>폰트 크기를 설정합니다.</td></tr><tr><td>hwpxHeaderText</td><td>`string`</td><td>선택</td><td>하단에 표현할 문자열을 설정합니다.\r\n 을 사용하면 줄바꿈이 가능합니다.</td></tr></table>(ex: `hwpxHeader: [{hwpxHeaderText: "머리말 영역 첫번째 줄", hwpxHeaderAlign: "center", hwpxHeaderFontSize: 10, hwpxHeaderFontBold: true, hwpxHeaderFontColor:"#ff0000"},`
 `{hwpxHeaderText: "머리말 영역 두번째 줄", hwpxHeaderAlign: "right", hwpxHeaderFontSize: 8, hwpxHeaderFontBold: false, hwpxHeaderFontColor:"#000000"}]`)|
|hwpxFooter|`object`|선택|꼬리말 영역에 표현할 문자열을 삽입합니다.<table><tr><td>**Name**</td><td>**Type**</td><td>**Required**</td><td>**Description**</td></tr><tr><td>hwpxFooterAlign</td><td>`string`</td><td>선택</td><td>`left, center, right` 중 정렬을 설정합니다.(default: "center")</td></tr><tr><td>hwpxFooterFontBold</td><td>`boolean`</td><td>선택</td><td>폰트의 굵기를 설정합니다(default: false)</td></tr><tr><td>hwpxFooterFontColor</td><td>`string`</td><td>선택</td><td>폰트 색상을 설정합니다.</td></tr><tr><td>hwpxFooterFontSize</td><td>`number`</td><td>선택</td><td>폰트 크기를 설정합니다.</td></tr><tr><td>hwpxFooterText</td><td>`string`</td><td>선택</td><td>하단에 표현할 문자열을 설정합니다.\r\n 을 사용하면 줄바꿈이 가능합니다.</td></tr></table>(ex: `hwpxFooter: [{hwpxFooterText: "꼬리말 영역 첫번째 줄", hwpxFooterAlign: "center", hwpxFooterFontSize: 10, hwpxFooterFontBold: true, hwpxFooterFontColor:"#ff0000"},`
 `{hwpxFooterText: "꼬리말 영역 두번째 줄", hwpxFooterAlign: "right", hwpxFooterFontSize: 8, hwpxFooterFontBold: false, hwpxFooterFontColor:"#000000"}]`)|
|topMargin|`number`|선택|편집 용지 위쪽 여백을 설정합니다.(`단위:mm`) (`default: 20`)|
|bottomMargin|`number`|선택|편집 용지 아래쪽 여백을 설정합니다.(`단위:mm`) (`default: 20`)|
|leftMargin|`number`|선택|편집 용지 왼쪽 여백을 설정합니다.(`단위:mm`) (`default: 30`)|
|rightMargin|`number`|선택|편집 용지 오른쪽 여백을 설정합니다.(`단위:mm`) (`default: 30`)|
|headerMargin|`number`|선택|편집 용지 머리말 영역 여백을 설정합니다.(`단위:mm`) (`default: 15`)|
|footerMargin|`number`|선택|편집 용지 꼬리말 영역 여백을 설정합니다.(`단위:mm`) (`default: 15`)|
|botPage|`boolean`|선택|한글 문서 하단 부분 페이지 표시 여부를 설정합니다. 
`0(false)`:한글 문서 하단 부분 페이지 미표시 (`default`)
`1(true)`:한글 문서 하단 부분 페이지 표시|
|repeatHeader|`boolean`|선택|시트가 페이지를 넘어가는 경우 시트의 헤더를 반복 출력 여부를 설정합니다. 
`0(false)`:시트가 페이지를 넘어가는 경우 시트의 헤더 반복 출력하지 않음
`1(true)`:시트가 페이지를 넘어가는 경우 시트의 헤더 반복 출력 (`default`)|
|tempFile|`string`|선택|템플릿 파일명을 설정합니다. 
템플릿 파일의 경우 `Down2Hwpx.jsp`의 `setTempRoot`가 설정되어있어야 합니다. 
`setTempRoot` 의 경우 템플릿 파일이 존재하는 서버의 경로입니다.
|keyField|`object`|선택|템플릿기능 사용시 한글의 `필드`기능을 사용한 경우 사용하는 속성입니다.
 `필드`에서 `필드 이름`이 `keyField`의 키값과 동일한 경우 해당 값으로 매핑됩니다.
 (ex: `sheet.down2Excel({keyField: {"name": "홍길동"}}` 
`필드 이름` 중 `name`으로 설정된 필드 값이 `홍길동`으로 매핑 됨) 
|sheetField|`string`|선택|템플릿기능 사용시 한글의 `필드`기능을 사용한 경우 사용하는 속성입니다.
 `필드`에서 `필드 이름`이 `sheetField` 의 값과 동일한 필드가 한글의 표로 변환됩니다.
 (ex: `sheet.down2Excel({sheetField: "ibsheet"}`
 `필드 이름` 이 `ibsheet `으로 설정된 필드가 내려받을 `ibsheet`의 위치)


### 한글의 필드 기능 사용 정리
한글에서는 `필드` 기능을 지원합니다. 쉽게 생각하면 <input> 태그의 placeholder 속성 기능이라고 생각하시면 되겠습니다.

`down2Hwpx`에서는 필드 기능을 활용해 원하는 위치에 시트를 표현 및 원하는 값을 입력할 수 있습니다.

![image](/assets/imgs/hanField1.png)
<!-- IMAGE: 스크린샷/예시 이미지 - image -->

![image](/assets/imgs/hanField2.png)
<!-- IMAGE: 스크린샷/예시 이미지 - image -->

`필드 이름`을 year로 설정한 경우 `keyField`속성을 아래와 같이 설정하면 year가 2024로 표현됩니다.
```javascript
var param1 = {
        fileName:"문서.hwpx",
        //tempFile과 keyField는 첫번째에서만 설정.
        tempFile:"template.hwpx",
        keyField: {
                "year": "2024",
        },
        sheetField : "sheet1"
};
sheet1.down2Hwpx(param1);
```




### downCols, downRows 사용시 merge 적용 정리

| downCols |화면과 동일하게 컬럼 설정 | 화면과 다르게 컬럼 설정 |
| ------ | ------ | ------ |
| downRows 사용| X |  X |
| downRows 사용 안함 | O | 아래 설명 참고|

merge 옵션을 적용해 downCols를 사용하시려면 downCols에 머지가 이뤄진 컬럼을 **순서대로** **모두** 포함하고 있어야만 합니다. **Visible: 0이 설정된 컬럼이 있다면 해당 컬럼도 반드시 downCols에 포함해둬야만 합니다.** 


머지가 이뤄진 컬럼 중 특정 컬럼이 빠지거나, 머지가 이뤄진 컬럼을 모두 포함하고 있더라도 다운로드 받는 컬럼의 순서가 다르면 한들 문서에서 머지가 정상적으로 이뤄지지 않습니다. 





![downCols사용시 머지](/assets/imgs/downcols_merge.png "downCols사용시 머지")
<!-- IMAGE: 스크린샷/예시 이미지 - downCols사용시 머지 -->




이미지로 예를 들자면,  "머지 컬럼" 컬럼을 온전히 머지가 적용된 채로 다운로드받고 싶다면 downCols: "컬럼1|컬럼2|컬럼3|컬럼4"와 같이 설정하셔야 합니다. 


downCols: "컬럼2|컬럼3|컬럼4"와 같이 특정 컬럼을 제외하거나 downCols: "컬럼4|컬럼1|컬럼3|컬럼2"와 같이 컬럼 순서를 바꾸시면 머지가 온전히 적용되지 않습니다. 



### Return Value
***none***

### Example
```javascript
var param = {
    merge: 1,
    hwpxHeader: [{
        hwpxHeaderText: "머릿글 영역",
        hwpxHeaderAlign: "Center",
        hwpxHeaderFontSize: 8,
        hwpxHeaderFontColor: '#945151'
    }],
    top: [{
        topText: "시트 상단 영역 첫번째 줄",
        topAlign: "center",
        topFontSize: 10,
        topBorder: true
    }, {
        topText: "시트 상단 영역 두번째 줄",
        topAlign: "center",
        topFontSize: 30,
        topFontColor: '#821751'
    }],
    sheetDesign: 1,
    fileName: "test",
    bottom: [{
        bottomText: "시트 하단 영역 첫번째 줄",
        bottomAlign: "center",
        bottomFontSize: 20
    }, {
        bottomText: "시트 하단 영역 두번째 줄",
        bottomAlign: "right",
        bottomFontSize: 10
    }],
    topMargin: 10,
    leftMargin: 10,
    rightMargin: 10,
    headerMargin: 10,
    hwpxFooter: [{
        hwpxFooterText: "바닥글 영역",
        hwpxFooterAlign: "Center",
        hwpxFooterFontSize: 8,
        hwpxFooterFontColor: '#245151'
    }, {
        hwpxFooterText: "바닥글 영역 두번째 줄",
        hwpxFooterAlign: "Center",
        hwpxFooterFontSize: 5,
        hwpxFooterFontColor: '#142991'
    }],
    sheetFontSize: 10,
    // 용지 방향 설정
    landScape: false
};
sheet.down2Hwpx(param);
```

### Read More

- [onBeforeExport event](/docs/events/on-before-export)
- [onExportFinish event](/docs/events/on-export-finish)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.85|Down2Hwpx 기능 추가|
|excel|1.1.2|Down2Hwpx 기능 추가|
|jar|1.0.0|Down2Hwpx 기능 추가|
