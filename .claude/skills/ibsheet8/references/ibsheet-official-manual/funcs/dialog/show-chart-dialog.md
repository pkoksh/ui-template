---
KEY: showChartDialog
KIND: method
PATH: funcs/dialog/show-chart-dialog
ALIAS: sheet.showChartDialog, showChartDialog(), 시트의, 선택된, 영역을, 기준으로, 차트를
ALIAS_EN: show, chart, dialog
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/dialog/show-chart-dialog
---
# showChartDialog ***(method)***

> 시트의 선택된 영역을 기준으로 차트를  보여주는 다이얼로그 창을 보여줍니다.

> 
> <mark>해당 함수는 `"/plugins/ibsheet-dialog.js"` 파일과 `IBChart` 가 포함되어 있어야 사용하실 수 있습니다.</mark>

> 다이얼로그에 대한 자세한 수정은 `ibsheet-dialog.js` 파일에서 하실 수 있습니다.

### 상세 설명
> `chartType` 인자로 다이얼로그 생성 시 차트 종류를 정할 수 있습니다.

> 선택된 영역에 반드시 선택 시 `Int`, `Float`의 숫자형 열을 포함해야 합니다.

> `Text`, `Lines`, `Enum`의 [Type](/docs/appx/type)만 카테고리로 설정됩니다.

> 선택된 영역 중간에 숨겨진 열이 존재할 경우 다이얼로그가 생성되지 않습니다.

> `MultiRecord` 사용 시 사용할 수 없습니다.


### 화면 설명
![다운로드](../../../assets/imgs/showChartDialog.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 다운로드 -->

#### 다이얼로그 버튼 메뉴
![다운로드](../../../assets/imgs/showChartDialog_menu2.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 다운로드 -->
> 다운로드 버튼 클릭 시 이미지 또는 엑셀 파일로 차트를 다운로드할 수 있습니다.

> 설정 버튼을 클릭 시 관련 메뉴가 나타납니다.

> 설정 메뉴가 보이면 확대/축소 버튼은 비활성화됩니다.

> 확대/축소 버튼 클릭 시 브라우저 창의 크기만큼 다이얼로그의 크기를 확대시킵니다.

#### 설정 버튼 메뉴
##### 1. 차트 유형
![다운로드](../../../assets/imgs/showChartDialog_menu3.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 다운로드 -->
> 차트 유형을 변경할 수 있습니다. 
##### 2. 차트 데이터
![다운로드](../../../assets/imgs/showChartDialog_menu4.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 다운로드 -->
> 1. 카테고리: 가로축 기준을 설정할 수 있습니다.

> 2. 데이터 영역: 세로축 기준을 설정할 수 있습니다.

> 3. 전체 영역 선택: `showChartDialog` 시 선택한 행이 아닌 현재의 시트 화면에 있는 모든 행의 데이터를 포함하여 차트를 생성합니다.
##### 3. 기타 설정
![다운로드](../../../assets/imgs/showChartDialog_menu5.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 다운로드 -->
> 1. 툴팁/데이터 레이블 사용 여부: 차트에 툴팁/데이터 레이블을 표시하거나 감출 수 있습니다.

> 2. 색상 팔레트: 차트의 색상을 변경할 수 있습니다.

> 3. 범례 위치: 범례의 표시 위치를 설정할 수 있습니다.

> 4. 데이터 피벗: 가로축과 세로축의 기준을 반전시킵니다.

### Syntax
```javascript
void showChartDialog(chartType);
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|chartType|`string`|선택|차트의 종류 (`default: line`)|
<!--!
|`[비공개]`exrtaOpt|`object`|선택|chart에 대한 초기 설정 ([IBChart 참고](https://docs.ibsheet.com/ibchart/v1/manual/#docs/intro/feature))|
!-->

### chartType Options
|Value|Description|
|----------|-----|
|`line`|선형 일반 차트|
|`spline`|꺽은선 차트|
|`lineStep`|계단형 차트|
|`column`|수직막대 일반차트|
|`columnStacked`|수직막대 누적차트|
|`columnStacked100`|수직막대 100% 누적차트|
|`bar`|수평막대 일반차트|
|`barStacked`|수평막대 누적차트|
|`barStacked100`|수평막대 100% 누적차트|
|`pie`|파이형 차트|
|`doughnut`|도넛형 차트|
|`area`|일반영역차트|
|`areaStacked`|누적영역차트|
|`areaStacked100`|100% 누적영역차트|
|`combination1`|세로막대+영역 차트|
|`combination2`|세로막대+꺽은선 차트|

### Return Value
***none***

### Example
```javascript
// 막대형 차트 생성
sheet.showChartDialog("bar");

// 선형 차트 생성
sheet.showChartDialog("line");
```
<!--!
```javascript
var extraOpt = {
  chart : {
    backgroundColor : "#EDEDED",
    type : "column",
    style : {
      fontSize : "20px"
    }
  },
  legend : {
    layout : "vertical",
    align : "right",
    verticalAlign : "top"
  },
  plotOptions : {
    series : {
      shadow : false,
      dataLabels : {
        enabled : true,
        align : "center"
      }
    },
    column : {
      pointPadding : 0.02
    }
  },
  tooltip: {
    pointFormat: "{point.y} hPa"
  },
  yAxis: {
    labels: {
      format: "{value} test-scale"
    }
  }
}

sheet.showChartDialog("", extraOpt);
```
!-->

### Read More
- [showDialog static](/docs/static/show-dialog)
- [Dialog appendix](/docs/appx/dialog)

### Since

|product|version|desc|
|---|---|---|
|dialog|1.0.17|기능 추가|