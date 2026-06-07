---
KEY: spreadSheet
KIND: appendix
PATH: appx/spread-sheet
ALIAS: 스프레드, 시트, 엑셀과, 유사한, 형식의
ALIAS_EN: spread, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/spread-sheet
---
# !스프레드 시트(Spread) ***(appendix)***

> 엑셀과 유사한 형식의 스프레드 시트 기능을 사용하는 방법입니다.

> 엑셀의 수식을 사용하거나 사용중인 그대로 엑셀 내려받기(`exportData`)가 가능합니다 



## 1. 스프레드 시트 사용

- (`Cfg`) [UseSpreadSheet](/docs/props/cfg/use-spread-sheet)를 사용하면 스프레드 기능을 사용할 수 있습니다.

- `UseSpreadSheet`를 사용하면 컬럼과 필요한 기능을 자동 설정합니다. 

- 사용자가 설정한 `Cfg`, `Def`, `LeftCols`, `Cols`, `RightCols`, `Header`, `Solid` 등의 정보는 무시됩니다.


### Cfg 설정
```javascript
Cfg: {
    UseSpreadSheet: 1
}
```

## 2. 컬럼 별 너비, 행 별 높이 설정
- 스프레드 시트에서는 모든 컬럼을 자동으로 설정하기 때문에 시트 설정으로는 컬럼 너비를 지정할 수 없습니다. 최초 생성 너비는 `64px` 입니다.
- `onRenderFirstFinish` 이벤트 구간에서 [setColWidth](/docs/funcs/core/set-col-width)를 이용하여 너비를 조정할 수 있습니다.
- 행 높이의 경우 데이터의 `Height` 속성을 이용하여 적용 가능합니다

### onRenderFirstFinish에서 컬럼 너비 조정하기
```js
// event구문
event: {
    onRenderFirstFinish: function (evtParam) {
        evtParam.sheet.setColWidth("B", 100); // B 컬럼의 너비를 100증가
    }
}
```

## 3. 스프레드 시트 스타일 사용
- 스프레드 시트의 각 셀은 테두리, 스타일, 배경색, 글꼴, 글자 크기, 머지 기능을 사용할 수 있습니다.

### 셀 테두리, 셀 스타일 적용
- 행 전체
    - `BorderBottom`: "번호,색상" (ex."2,red")
    - `BorderLeft`: "번호,색상" (ex."2,#223399")
    - `BorderBottom`: "번호,색상"
    - `BorderTop`: "번호,색상"

- 특정 셀
    - 컬럼명+`BorderBottom`: "번호,색상"
    - 컬럼명+`BorderLeft`: "번호,색상"
    - 컬럼명+`BorderBottom`: "번호,색상"
    - 컬럼명+`BorderTop`: "번호,색상"

|번호|스타일|
|---|---|
|`0`|스타일 없음|
|`1`|1px solid|
|`2`|2px solid|
|`3`|3px solid|
|`4`|1px dotted|
|`5`|2px dotted|
|`6`|1px dashed|
|`7`|2px dashed|

### 배경색 적용
- 행 전체
    - `Color`: "색상" (ex. "#223399", "blue", ...)

- 특정 셀
    - 컬럼명+`Color`: "색상"

```js
// 조회 데이터를 이용하여 배경색 적용
[
    {},
    {
        Color: '#ADADAD', // 행 전체 배경색상을 회색으로 설정한다.
        B: '국가 기술 자격 통계 (2018 근거)',
        BSpan: 10,
    },
    {
        B: '종목별',
        BRowSpan: 2,
        C: '연령별',
        CRowSpan: 2,
        D: 2018,
        DSpan: 8,
        BColor: '#DFDFAA', // B컬럼 셀에 배경 색상 설정
        CColor: '#DFDFAA', // C컬럼 셀에 배경 색상 설정
        DColor: '#EFEFCC', // D컬럼 셀에 배경 색상 설정
    },
]
```

### 글꼴 적용
- 행 전체
    - `TextFont`: "폰트명" (ex. "궁서체", "Times New Roman", ...)

- 특정 셀
    - 컬럼명+`TextFont`: "폰트명"

```js
// 조회 데이터를 이용하여 글꼴 적용
[
    {},
    {
        A: "TextFont",
        B: "글꼴",
        C: "글꼴",
        D: "글꼴",
        E: "글꼴",
        F: "글꼴",
        TextFont: "궁서체", // 행 글꼴 설정
    },
    {
        A: "컬럼TextFont",
        B: "글꼴",
        C: "글꼴",
        D: "글꼴",
        E: "글꼴",
        F: "글꼴",
        BTextFont: "default", // B컬럼 셀에 글꼴 설정
        CTextFont: "monospace",
        DTextFont: "serif",
        ETextFont: "sans serif",
        FTextFont: "궁서체",
    },
]
```

### 글자 크기 적용
- 행 전체
    - `TextSize`: 크기 (ex. 12, 20, ...)

- 특정 셀
    - 컬럼명+`TextSize`: 크기

```js
// 조회 데이터를 이용하여 글자 크기 적용
[
    {},
    {
        A: "TextSize",
        B: "크기",
        TextSize: 22, // 행 글자 크기 설정
    },
    {
        A: "컬럼TextSize",
        B: "크기",
        C: "크기",
        D: "크기",
        E: "크기",
        F: "크기",
        G: "크기",
        H: "크기",
        I: "크기",
        J: "크기",
        BTextSize: 8, // B컬럼 셀에 글자 크기 설정
        CTextSize: 9,
        DTextSize: 10,
        ETextSize: 12,
        FTextSize: 14,
        GTextSize: 17,
        HTextSize: 22,
        ITextSize: 30,
        JTextSize: 25,
    },
]
```

### 글자 개수 초과 시, 글자 크기 자동 축소
- [ShrinkToFit](/docs/props/cell/shrink-to-fit) 기능을 이용하여 글자 크기 자동 축소 기능을 사용 할 수 있습니다.
- <mark>해당 기능은 엑셀 다운로드 시에만 적용됩니다.</mark>

```js
// 조회 데이터를 이용하여 글자 크기 자동 축소 적용
[
    {},
    {
        A: "ShrinkToFit",
        B: "ShrinkToFit 테스트 데이터",
        BShrinkToFit: 1, // B컬럼 셀에 글자 크기 자동 축소 설정
        BWrap: 0,
    },
]
```

## 4. 머지 영역의 이미지 다운로드

- [DownExcelFillImage](/docs/props/cfg/down-excel-fill-image) 기능을 이용하여 머지 영역의 이미지 채우기 방식을 설정할 수 있습니다

```javascript
Cfg: {
    DownExcelFillImage: 1 // 머지 영역에 이미지를 채워 다운로드
}
```

## 5. 스프레드 시트 기본 눈금선 설정

- [DefaultBorder](/docs/props/cfg/default-border) 기능을 시트 데이터 영역 눈금선을 설정할 수 있습니다.
- 해당 설정을 사용하면 엑셀 다운로드 결과에도 동일하게 적용되어 다운로드 됩니다
```javascript
Cfg: {
    DefaultBorder: 0 // 눈금선 보이지 않음
}
```

## 6. 스프레드 시트 탭 사용 API

- [UseSpreadSheet](/docs/props/cfg/use-spread-sheet) 기능을 사용 시트 하단에 탭 제어가 가능한 Solid 행이 자동 생성됩니다.

[Solid 행]

![spreadSheetSolid](/assets/imgs/spreadSheetSolid.png "SpreadSheet Solid")
<!-- IMAGE: 스크린샷/예시 이미지 - spreadSheetSolid -->



- Solid 행을 이용하거나 아래 API를 이용하여 탭을 제어할 수 있습니다.
- [addSheet](/docs/funcs/core/add-sheet): 탭 추가
- [deleteSheet](/docs/funcs/core/delete-sheet): 탭 삭제
- [loadSheet](/docs/funcs/core/load-sheet): 탭 선택
- [getSheets](/docs/funcs/core/get-sheets): 탭 목록 확인

## 7. 스프레드 시트 데이터 조회

- 스프레드 시트에서는 시트 생성 시 데이터를 넣어 데이터를 조회하거나 [loadSearchData](/docs/funcs/core/load-search-data)를 이용한 동적 데이터 조회 사용이 가능합니다. ([doSearch](/docs/funcs/core/do-search) 사용 불가)
- 데이터 조회 규격은 아래 처럼 배열 형식이며, 일반 시트와 동일합니다.
- 시트에 여러 개의 탭이 있는 상태에서 데이터 조회 시 현재 `active` 상태인 탭에 데이터가 로드 됩니다.

```js
// 데이터 조회
sheet.loadSearchData(
    [
        {},
        {},
        {
            B: '|../assets/imgs/11/s1.jpg|60|80|||',
            BType: 'Img', // 셀 타입 변경
            Height: 80
        },
        {
            B: '국가 기술 자격 통계 (2018 근거)',
            BSpan: 10,
            BTextStyle: 3,
            BTextSize: 15,
            BTextColor: '#EEEEEE',
            BColor: '#223399',
            Height: 70
        },
        {},
        {
            B: '종목별',
            BRowSpan: 2,
            C: '연령별',
            CRowSpan: 2,
            D: 2018,
            DSpan: 8,
            DAlign: 'Center',
            BColor: '#DFDFAA',
            CColor: '#DFDFAA',
            DColor: '#EFEFCC',
            TextStyle: 1
        },
        {
            B: '종목별',
            C: '연령별',
            D: '필기접수 (명)',
            E: '필기응시 (명)',
            F: '필기합격 (명)',
            G: '필기합격률 (%)',
            H: '실기접수 (명)',
            I: '실기응시 (명)',
            J: '실기합격 (명)',
            K: '실기합격률 (%)',
            BColor: '#FAFADF',
            TextStyle: 1,
            DColor: '#EFEFCC',
            EColor: '#EFEFCC',
            FColor: '#EFEFCC',
            GColor: '#EFEFCC',
            HColor: '#EFEFCC',
            IColor: '#EFEFCC',
            JColor: '#EFEFCC',
            KColor: '#EFEFCC'
        }
    ]
);
```


## 8. 컨텍스트 메뉴

[컨텍스트 메뉴]

![spreadSheetContextMenu](/assets/imgs/spreadSheetContextMenu.png "SpreadSheet ContextMenu")
<!-- IMAGE: 스크린샷/예시 이미지 - spreadSheetContextMenu -->


- [UseSpreadSheet](/docs/props/cfg/use-spread-sheet) 기능을 사용 후 각 셀에서 마우스 오른쪽 버튼을 클릭하면 위 이미지에 있는 컨텍스트 메뉴가 나옵니다.
- 편집, 스타일, 색상, 정렬 등의 기능을 간편하게 사용할 수 있습니다.



### Read More

- [UseSpreadSheet cfg](/docs/props/cfg/use-spread-sheet)
- [onRenderFirstFinish event](/docs/events/on-render-first-finish)
- [setColWidth method](/docs/funcs/core/set-col-width)
- [ShrinkToFit cell](/docs/props/cell/shrink-to-fit)
- [DownExcelFillImage cfg](/docs/props/cfg/down-excel-fill-image)
- [DefaultBorder cfg](/docs/props/cfg/default-border)
- [loadSearchData method](/docs/funcs/core/load-search-data)
- [addSheet method](/docs/funcs/core/add-sheet)
- [deleteSheet method](/docs/funcs/core/delete-sheet)
- [loadSheet method](/docs/funcs/core/load-sheet)
- [getSheets method](/docs/funcs/core/get-sheets)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.5|기능 추가|
