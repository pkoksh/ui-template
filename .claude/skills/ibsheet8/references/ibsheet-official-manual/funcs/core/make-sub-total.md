---
KEY: makeSubTotal
KIND: method
PATH: funcs/core/make-sub-total
ALIAS: sheet.makeSubTotal, makeSubTotal(), 기준, 열의, 데이터에, 따른, 소계
ALIAS_EN: make, sub, total, subtotal
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/make-sub-total
---
# makeSubTotal ***(method)***
> 기준 열의 데이터에 따른 소계/누계 행을 시트에 추가합니다.

> 설정된 기준 열의 왼쪽 열에 소계에 대한 설명("소계 : 값")이 보이며, 첫 번째 열의 경우 해당 열 내에 설명이 보이게됩니다. 

>
> 일반적으로 소계 시 머지`usermerge:0(default)`는 `stdCol` 열 기준으로 머지가 이루어지며 여러 개로 지정한다면 각각의 `stdCol` 기준으로 머지가 이루어집니다. 

> `stdCol`에 지정된 열에 대해 이전 혹은 다음 행의 값이 같은 경우 행들을 머지하는 `DataMerge:1`과 같이 동작합니다.


> **<mark>주의</mark> : `SearchMode`:`0, 2`만 지원** 

> **<mark>주의</mark> : 조회시 소계를 사용하는 경우, [onDataLoad (event)](/docs/events/on-Data-Load) 이벤트에서 사용할 수 있습니다.** 

> **<mark>주의</mark> : `usermerge:0(default)`를 사용하면 [DataMerge (cfg)](/docs/props/cfg/data-merge), [PrevColumnMerge (cfg)](/docs/props/cfg/prev-column-merge) 설정이 무시됩니다.** 

> **<mark>주의</mark> : `captionCol` 사용 방법에 따라 머지에 영향을 받을 수 있습니다.** 

> **<mark>주의</mark> : `addRow` 의 경우, 소계 그룹 안에서 사용할 수 없습니다. 소계가 된 영역이 아닌, 밖의 영역(맨위, 맨아래)에만 행추가가 가능합니다.** 

> **<mark>주의</mark> : `excludeSubTotalRowCount` 의 경우, 서버페이지 기능 사용 시에는 동작되지 않습니다.** 


###
[단일소계]

![단일소계](/assets/imgs/makeSubTotal1.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 단일소계 -->

[`stdCol`: 정책사업(정책사업 컬럼에 `CaptionCol` 설정), 단위사업(`CaptionCol` 설정 안함)]

![단일소계](/assets/imgs/makeSubTotal2.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 단일소계 -->

[`stdCol`: 정책사업(정책사업 컬럼에 `CaptionCol` 설정), 단위사업(정책사업 컬럼에 `CaptionCol` 설정)]

![단일소계](/assets/imgs/makeSubTotal3.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 단일소계 -->

[`stdCol`: 정책사업, `CaptionCol({col: '정책사업', val: '%s: %col'}, {col: '단위사업', val: '%capCol'}, {col: '세부사업', val: '%cnt'})`]

![captionCol](/assets/imgs/makeSubTotal_capCol.png)
<!-- IMAGE: 스크린샷/예시 이미지 - captionCol -->


### Syntax
```javascript
void makeSubTotal( subTotalRows, usermerge, excludeSubTotalRowCount );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|subTotalRows|`array[object]`|필수|소계 행에 대한 설정입니다. 
`object` **배열** 이며 하나의 배열에 들어갈 `subTotalRows`의 프로퍼티들은 
아래 `subTotalRows` 표와 같습니다.|
|usermerge|`boolean`|선택|사용자가 설정한 `DataMerge`, `PrevColumnMerge`옵션을 사용하여 머지할지 여부
 **`usermerge:1` 설정 후 해당 함수 호출 시 사용자가 설정한 `DataMerge`, `PrevColumnMerge`에 따라 머지가 이루어집니다.**
`0(false)`:병합 동작 실행 안함 (`default`)
`1(true)`:사용자가 설정한 병합 조건에 따라 병합 동작 실행|
|excludeSubTotalRowCount|`boolean`|선택|소계, 누계 행을 `SEQ` 컬럼과 `InfoRow ` 행의 개수 카운트에서 제외 여부
`0(false)`:소계, 누계 행을 `SEQ` 컬럼과 `InfoRow ` 행의 개수 카운트에 포함 (`default`)
`1(true)`:소계, 누계 행을 `SEQ` 컬럼과 `InfoRow ` 행의 개수 카운트에서 제외|

### subTotalRows
|Name|Type|Required|Description|
|----------|-----|---|----|
|stdCol|`string`|필수|기준 열|
|sumCols|`string`|선택|소계가 계산(합)되어야 할 열이름들을 '\|'로 연결한 문자열|
|countCols|`string`|선택|소계 행에 데이터 행의 수로 계산되어야 할 열이름들을 '\|'로 연결한 문자열
 (Cfg)`CalcMergeMode` 설정시에는 이 값을 설정해야 한다. |
|avgCols|`string`|선택|소계가 계산(평균값)되어야 할 열이름들을 '\|'로 연결한 문자열|
|color|`string`|선택|소계 행의 배경색|
|showCumulate|`boolean`|선택|소계에 대한 누계 행 표시 여부
`0(false)`:소계에 대한 누계 행 표시 안함(`default`)
`1(true)`:소계에 대한 누계 행 표시|
|cumulateColor|`string`|선택|누계 행의 배경색|
|sort|`string`|선택|기준 열의 정렬 처리 방법 
`""`:사용안함 (`default`)
`"asc"`:오름차순 정렬
`"desc"`:내림차순정렬|
|position|`string`|선택|소계행 생성 위치 
`"bottom"`:그룹 하단 표시 (`default`)
`"top"`:그룹 상단 표시
`"bottomAll"`:최하단 표시
`"topAll"`:최상단 표시|
|captionCol|`array[object]`|선택|캡션에 대한 정보 설정.
캡션이 들어갈 열이름과 캡션 값으로 이루어진 객체의 배열
`"col"`:캡션이 설정될 열이름(`sumCols, countCols, avgCols` 와 같이 계산된 값이 들어가는 컬럼에는 적용되지 않음.)
`"val"`:소계 캡션에 들어갈 값, 함수 형태의 포뮬러 연산 제공(숫자 데이터의 천단위 구분자의 경우, 붙여서 리턴.) `ex) [{col: '정책사업', val: '%s: %col'}, {col: '단위사업', val: function(fr) { return fr.Row['단위사업'] + '%' }}]` 
`"cumVal"`:누계 캡션에 들어갈 값
`"span"`: 소계행에서 `captionCol`의 `col` 기준으로 열머지 할 값을 결정 

 **captionCol 에서 사용 가능한 예약어** 
 `"%s"`: '소계(누계)'를 의미하는 예약어 
`"%col"`:소계 기준값 출력 
`"%cnt"`:소계(누계)건수를 표시
`"%capCol"`:**col**에 설정된 컬럼의 가장 마지막 행의 값을 소계행에 표시 

(`default: [ { col : “기준 열”, val:”%s: %col” } ]`)|
|mode|`number`|선택|소계행 표시 방법을 설정 
`0`:모든 대상 그룹에 대한 소계행 표시 (`default`)
`1`:대상 그룹이 2개 이상인 그룹에 대해서만 소계행 표시
`2`:대상 그룹이 1개 이상인 그룹에 대해서만 소계행 표시
(소계행이 감춰질 뿐 생성되지 않는 것은 아님.)|
|hidden|`boolean`|선택|`Visible:0(false)` 인 행에 대한 소계 계산 포함 여부
`0(false)`:`Visible:0(false)` 인 행에 대한 소계 계산 대상 제외 (`default: 0`)
`1(true)`:`Visible:0(false)` 인 행에 대한 소계 계산 대상 포함|

### Return Value
***none***

### Example
```javascript

Events: {
  // 조회 후, 머지를 사용하는 경우 소계행 설정 (onDataLoad 를 사용하세요.)
  onDataLoad: function (evt) {
    evt.sheet.makeSubTotal([
        {
          stdCol: "sPolicy",
          avgCols: "A|D",
          countCols: "E",
          showCumulate: 1,
          sort: "desc",
          captionCol: [
            {
              col: 'sPolicy',
              val: '%s: %col'
            }
          ]
        }, {
          stdCol: "sUnit",
          sumCols: "B|C",
          showCumulate: 1,
        },
              .
              .
              .
    ]);
  }
}

sheet.makeSubTotal([
  {
    stdCol: 'sPolicy',
    sumCols: 'A|B|C|D',
    position: 'bottom',
    captionCol: [
      {
        // E셀에 포뮬러 연산 동작
        col: 'E',
        val: function (fr) {
          var val = (fr.Row["A"] + fr.Row["B"]) * 10;
          return "E: " + val + "퍼센트!"; // "E: 80퍼센트!"
        }
      },
      {
        col: 'F',
        val: function (fr) {
          return '1,000,000' // 숫자 데이터의 경우, 구분자를 붙여서 리턴해야함.
        }
      },
    ]
  }
]);

//소계, 누계 행을 `SEQ`에서 제외
sheet.makeSubTotal({
    subTotalRows:[
        {
	    stdCol: 'sPolicy',
	    sumCols: 'B|C|D',
	    avgCols: 'A',
	    position: 'bottom',
	    captionCol: [
		{
	           col: 'sPolicy',
		   val: '%s: %col',
		   cumVal: '%s: %col',
		   span: 3
		},
		{
		    col: 'E',
		    val: ' ',
		    cumVal: ' ',
   		    span: 2
		}
	    ],
	}	
    ],
    excludeSubTotalRowCount:1
});

```

### 소계셀에 Format 적용 (`8.0.0.25` 버전부터 동작) - sumCols, avgCols, countCols에 설정한 컬럼의 Format만 변경 가능
```js
Def: {
  SubSum: { // Def.SubSum을 이용하면 소계행에만 Def 속성을 적용할 수 있다
    AFormat: '합계 : #,##0.##', // 소계행 A셀에 합계 Text와 실수형 포맷 적용
    BFormat: '#,##0' // 소계행 B셀에 정수형 포맷 적용
  }
}

sheet.makeSubTotal([
  {
    stdCol: 'sPolicy',
    sumCols: 'B|C|D',
    avgCols: 'A',
    position: 'bottom',
    captionCol: [
      {
        col: 'sPolicy',
        val: '%s: %col',
        cumVal: '%s: %col',
        span: 3
      },
      {
        col: 'E',
        val: ' ',
        cumVal: ' ',
        span: 2
      }
    ],
  }
]);

//
sheet.makeSubTotal(
{
    subTotalRows:[
      {
        stdCol: 'sPolicy',
        sumCols: 'B|C|D',
        avgCols: 'A',
        position: 'bottom',
        captionCol: [
          {
            col: 'sPolicy',
            val: '%s: %col',
            cumVal: '%s: %col',
            span: 3
          },
          {
            col: 'E',
            val: ' ',
            cumVal: ' ',
            span: 2
          }
        ],
      }
    ],
    excludeSubTotalRowCount:1
}
);
```

### Read More
- [removeSubTotal method](./remove-sub-total)
- [getSubTotalRows method](./get-sub-total-rows)
- [NoCalculate row](/docs/props/row/no-calculate)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.7|`mode` 속성 기능 추가|
|core|8.0.0.11|`usermerge` 기능 추가|
|core|8.0.0.11|`%capCol` 예약어 추가|
|core|8.0.0.18|메뉴얼 내용 수정: 해당함수는 조회된 데이터가 생성된 다음에 호출되어야 합니다. 따라서 [onSearchFinish (event)](/docs/events/on-search-finish) 이벤트나 조회된 이후에 버튼 등, 클릭 이벤트에서 호출하셔야 합니다. => 조회시 소계를 사용하는 경우, [onDataLoad (event)](/docs/events/on-Data-Load) 이벤트에서 사용할 수 있습니다.|
|core|8.0.0.22|`hideen` 속성 추가|
|core|8.1.0.78|`excludeSubTotalRowCount` 기능 추가|
