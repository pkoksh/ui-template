# 컬럼 속성 레퍼런스

## Col 속성

- [모든 속성 정보](../ibsheet-official-manual/props/col/index.md)
- SEQ 컬럼은 항상 존재함 (생성하지 않으면 좌측 첫번째열로 안보이게 생성됨)


### Cfg 속성 사용 예

```javascript
document.addEventListener("DOMContentLoaded", function() {
    // 시트 생성
    IBSheet.create({
      id: "sheet",
      el: "sheetContainer",
      options: {
        Cfg: { ... }, 
        Cols: [
          {
            Header: "사원명",
            Type: "Text",
            Name: "EMPNAME",
            Align: "Center",
            Width: 120,
            RelWidth: 1
            ...
          },
          ...
        ]
        ...
      }
    });
  });
```
---

### 컬럼생성시 주로 사용되는 속성 list:

| 속성 | 유형 | 기본값 | 설명 |
|------|------|--------|------|
| Header | String or object or jsonArray | - | 헤더 텍스트 |
| Name | String | - | 컬럼 식별자 (필수) |
| Type | String | "Text" | [컬럼 타입](./column-type-property.md) |
| Width | Number | 헤더셀의 글자수를 기준으로 자동너비가 설정됨 | 컬럼 너비 (px) |
| MinWidth | Number | - | 최소 너비 |
| RelWidth | Number | - | 상대 너비(비율로 설정됨) |
| Align | String | Type에 따라 다름  | 정렬 (Left, Center, Right) |
| CanEdit | Boolean | true | 편집 가능 여부 (0:편집불가,1:편집가능)|
| Visible | Boolean | true | 보임/감춤 여부 (0:감춤,1:보임) |
| Format | String or object | Type에 따라 다름 | [컬럼 포멧](./column-format-property.md) |
| Formula | String or function | - | 계산에 의한 값 설정 (../features/formula.md 참고)|
| FormulaRow | String or function | - | 데이터 하단에 고정된 합계행 생성 ("Sum","Avg","Max","Min","Count") ([상세](../features/summary.md)) |
| Attribute-Formula | String or function | - | 계산에 의한 속성 값 설정 (../features/attribute-formula.md 참고)|
| Required | Boolean | false | 필수 입력 여부(저장함수 호출시 빈값이 포함되면 오류 발생) |
| DefaultValue | Any | - | 데이터 로드시 해당 열에 대한 값이 없는 경우 또는 신규 행에 대한 기본값 |

---

## Header 속성

1. 단일 헤더
```javascript
{
  Header: "사용자명",
  Name: "userName",
  Type: "Text",
  ...
}
```
2. 단일 헤더 + 속성 정의
```javascript
{
  Header: {Value:"사용자명", TextStyle: 1, TextColor: "#FF0000"}, // ../ibsheet-official-manual/props/cell/index.md 의 속성들 사용
  Name: "userName",
  Type: "Text",
  ...
}
```

3. 다중 헤더 (계층형)
```javascript
{
  Header: ["사용자 정보", "이름"], //두줄 헤더 (상위 그룹 헤더 + 자기 헤더)
  Name: "userName",
  Type: "Text",
  ...
}
```

4. 다중 헤더 + 속성 정의
```javascript
{
  Header: ["사용자 정보", {Value: "이름", Color:"#222222", TextColor:"#FFFFFF"}], //두줄 헤더 
  Name: "userName",
  Type: "Text",
  ...
}
```

5. 한 셀 내에서 줄바꿈 (`\n`)
단순히 좁은 컬럼 폭에 긴 한글 헤더를 두 줄로 표시하고 싶을 때는 **문자열 내부에 `\n`** 을 넣는다. 원본 XFDL `&#13;&#10;` (CRLF) 에 대응되는 관용 패턴. 계층 그룹 헤더(방식 3)와는 다르다.

```javascript
{ Header: "부속\n코드",      Name: "afilCd",     Width: 40 },
{ Header: "최저나이\n(이상)", Name: "strtAge",    Width: 60 },
{ Header: "PANIC\n하한값",   Name: "pancLowVal", Width: 60 }
```

- JSON / i18n 리소스에서도 리터럴 `\n` 을 그대로 쓰면 된다 (`"afilCd": "부속\n코드"` → IBSheet8 이 개행으로 렌더)
- 헤더 행 높이가 기본(Body 높이) 보다 커야 두 줄이 보이므로, `Cfg.HeaderRowHeight` 또는 Row 정의 (`Rows: [{size:40, band:"head"}]`) 로 늘릴 수도 있음 — 단, IBSheet8 기본 동작만으로도 대부분 잘 표시됨

----

## Name 속성

- 모든 컬럼의 Name은 고유해야 함
- 다음 Name은 사용에 주의가 필요

|Name|사유|
|---|---|
|SEQ|순차증가열의 기능으로 사용됨 [변경방법](../ibsheet-official-manual/props/cfg/row-index.md)|
|id|각 행의 id와 중복되어 사용 불가|
|STATUS|저장 시 자동으로 추가되는 상태 정보와 동일한 이름 [변경방법](../ibsheet-official-manual/props/cfg/req-status-name.md)|

---
## Width 속성
- 시트 생성시 컬럼의 너비를 지정
- 0으로 설정하여 열을 감출수 있으나 이보다는 Visible:0 속성을 쓸 것.

---

## RelWidth 속성

- 컬럼의 너비를 상대적으로 늘리거나 줄이는 기능으로 시트의 너비에 비해 열들의 너비가 작은 경우 RelWidth가 설정된 열들이 값의 비율만큼 늘어남
- 시트의 너비에 비해 열들의 너비가 큰 경우 RelWidth가 설정된 열들의 너비가 줄어듦
- 너비가 줄어들더라도 MinWidth로 지정한 값 이하로 줄어들지 않음

---

