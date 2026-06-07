# 트리 그리드

## 기본 설정

`MainCol`에 트리를 표시할 열 이름을 지정합니다. 하나의 열만 트리가 될 수 있습니다.

```javascript
Cfg: {
    MainCol: "sProduct",     // "sProduct" 열에 트리 표시
    NoTreeLines: true        // 노드 연결선 숨김 (선택)
}
```

---

## 데이터 규격

### Items 기반 계층 구조 (권장)

```javascript
var treeData = {
    "Data": [
        {
            sProduct: "내부 시스템 개발 사업", sCustomer: "B사",
            Items: [
                { sProduct: "글로벌 통합 인사시스템", sKind: "프로젝트", sPrice: "192" },
                {
                    sProduct: "E-HR시스템", sKind: "유지보수",
                    Items: [
                        { sProduct: "물산 E-HR시스템", sKind: "기타", sPrice: "4" },
                        { sProduct: "제조 E-HR시스템", sKind: "기타", sPrice: "4" }
                    ]
                }
            ]
        }
    ]
};

sheet.loadSearchData(treeData);
```

### Level 기반 평면 구조

`Level` 값으로 계층을 표현합니다. 최상위는 `0`, 하위는 부모보다 1씩 증가합니다.
`IBSheet.v7.convertTreeData()`로 Items 기반 구조로 변환하여 사용합니다.
`IBSheet.v7.convertTreeData()`함수는 `/plugins/ibsheet-common.js`파일에 정의 되어 있습니다.

```javascript
var treeData = {
    "Data": [
        { Level: 0, sProduct: "병원 개발/CDP 구축", sKind: "프로젝트", sPrice: "29" },
        { Level: 1, sProduct: "성능개량사업", sKind: "프로젝트", sPrice: "15.5" },
        { Level: 2, sProduct: "SHE시스템 구축", sKind: "프로젝트", sPrice: "79" },
        { Level: 2, sProduct: "Cost Quotation System", sKind: "프로젝트", sPrice: "3" }
    ]
};

var convertData = IBSheet.v7.convertTreeData(treeData);
sheet.loadSearchData(convertData);
```

---

## 펼침/접기

```javascript
// 레벨 단위 펼침/접기
sheet.showTreeLevel(3);           // 3레벨까지 펼침
sheet.showTreeLevel(1);           // 최상위만 표시 (모두 접기)
sheet.showTreeLevel(3, 1);        // 3레벨까지 펼침, 이벤트 미호출
sheet.showTreeLevel(3, 0, 1);     // 3레벨까지 펼침, 하위 모두 접음
sheet.showTreeLevel(3, 0, 2);     // 3레벨까지 펼침, 하위 모두 펼침

// 특정 행 펼침/접기
sheet.setExpandRow(row);              // 토글
sheet.setExpandRow(row, null, 1);     // 펼치기
sheet.setExpandRow(row, null, 0);     // 접기

// 펼침 상태 확인
var isExpanded = sheet.getAttribute(row, null, "Expanded");
```

---

## 이벤트 활용

```javascript
Events: {
    // 펼침 전 제어 (true 리턴 시 중단)
    onBeforeExpand: function(evtParam) {
        if (evtParam.row["Level"] > 4) {
            return true;  // 펼침 중단
        }
    },
    // 펼침 후 처리
    onAfterExpand: function(evtParam) {
        console.log("펼쳐진/접힌 행:", evtParam.row);
    }
}
```

---

## 동적 로딩 (HaveChild)

자식이 없는 행에 `HaveChild: true`를 설정하면 접힌 트리 아이콘이 표시됩니다.

```javascript
// 데이터에 HaveChild 설정
Items: [{ sProduct: "카테고리A", HaveChild: true }]

// onBeforeExpand에서 동적 로드
Events: {
    onBeforeExpand: function(evtParam) {
        var row = evtParam.row;
        if (row.firstChild) return;  // 이미 자식 있으면 통과

        sheet.doSearch({
            url: "/api/tree/children",
            param: "parentId=" + sheet.getValue(row, "id"),
            parent: row
        });
        return true;
    }
}
```

---

## 체크박스 동기화 (TreeCheckSync)

`Icon: "Check"` 컬럼에서 부모-자식 간 체크 상태를 자동 동기화합니다.

```javascript
Cfg: {
    MainCol: "sProduct",
    TreeCheckSync: 1   // 0: 개별체크, 1: 자동동기화(?표시), 2: 자동동기화(v표시)
}
```

---

## 참고

- [MainCol cfg](/docs/props/cfg/main-col)
- [NoTreeLines cfg](/docs/props/cfg/no-tree-lines)
- [TreeCheckSync cfg](/docs/props/cfg/tree-check-sync)
- [showTreeLevel method](/docs/funcs/core/show-tree-level)
- [setExpandRow method](/docs/funcs/core/set-expand-row)
- [Expanded row](/docs/props/row/expanded)
- [HaveChild row](/docs/props/row/have-child)
- [onBeforeExpand event](/docs/events/on-before-expand)
- [onAfterExpand event](/docs/events/on-after-expand)
- [트리 데이터 규격](/docs/dataStructure/tree-structure)
