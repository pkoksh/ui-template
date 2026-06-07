---
KEY: ibsheet8Actions
KIND: appendix
PATH: appx/ibsheet8-actions
ALIAS: 시트에, 포커스가, 있는, 상태에서, 키보드
ALIAS_EN: ibsheet8, actions
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/ibsheet8-actions
---
# !IBSheet8 Actions ***(appendix)***

> 시트에 포커스가 있는 상태에서 키보드 또는 마우스 입력이 있는 경우 각 입력에 따른 동작 정리

## Actions

| 키보드 | 마우스 | 기본 동작 | 제약 사항 |
| ----- | ------ | --------- | ------------ |
|        | `Click` | 셀 포커스, Bool 값 변경, (헤더 전체 선택 상태) 전체 취소, (헤더) 정렬 | 헤더 행에서는 [(cfg) HeaderSortActionMode](/docs/props/cfg/header-sort-action-mode)에 따라 동작이 달라질 수 있음 |
|        | `Right Click` | 컨택스트 메뉴 열기 | 컨택스트 메뉴가 설정된 셀에서만 동작 |
| `Ctrl` | `Click` | 여러개 셀 선택 혹은 선택 취소, Header에서는 이전 정렬 취소 후 정렬 | 헤더 행에서는 [(cfg) HeaderSortActionMode](/docs/props/cfg/header-sort-action-mode)에 따라 동작이 달라질 수 있음 |
| `Shift` | `Click` | 포커스 된 셀부터 클릭 셀 까지 범위 선택, Header에서는 정렬 취소 | |
|        | `Drag` | 행 또는 셀 범위를 선택하거나 선택 취소 | |
| `Ctrl` | `Drag` | 행 또는 셀 범위를 여러개 선택하거나 선택 취소 | |
| `Shift` | `Drag` | 선택한 모든 범위의 셀 값이 첫 번째 셀값으로 셋팅됨 | |
| `Enter` | | 편집모드로 전환, Date 타입 달력창 띄우기, Radio 타입 오른쪽으로 이동, Bool 타입 값 변경, Link 타입 링크 클릭 | |
| `Ctrl + Enter` | | 트리 행의 접힘/펼침 
웹 접근성 모드(Accessibility: 1)에서 필터 행의 필터 메뉴 열기 | |
| `Space` | | Header의 경우 ASC,DESC 정렬, Date 타입 달력창 띄우기, Radio 타입 오른쪽으로 이동, Bool 타입 값 변경, Link 타입 링크 클릭 | |
| `Ctrl + Space` | | 열 선택 | 대용량 조회 (SearchMode: 0), 멀티레코드 (MultiRecord) 환경에서 동작 안함, 기존 행 선택에서 동작 변경 |
| `Shift + Space` | | 행 선택 | |
| `Tab` | | focus 상태에서는 오른쪽 셀로 이동, 편집상태에서는 편집이 가능한 셀로 편집을 유지하면서 이동 | 포커스 가능한 셀로만 이동 가능([CanFocus](/docs/props/cell/can-focus)) |
| `Shift + Tab` | | 왼쪽 셀로 이동, 편집상태에서는 편집이 가능한 셀로 편집을 유지하면서 이동 | 포커스 가능한 셀로만 이동 가능([CanFocus](/docs/props/cell/can-focus)) |
| `Ctrl + Deleted` | | 행을 Deleted 상태로 변경 | |
| `Deleted` | | 셀값 삭제 | |
| `Ctrl + A` | | 전체 데이터 선택 | |
| `Shift + Ctrl + A` | | 전체 데이터 선택 해제 | |
| `Ctrl + Alt + A` | | 전체 데이터 선택 / 전체 데이터 선택 해제 | |
| `F2` | | 편집 모드로 전환 | |
| `Esc` | | Selected된 셀의 영역을 취소, 편집 중 편집취소 | |
| `Shift + Enter` | | 편집 중 Lines 타입 줄 엔터 / 셀 편집 완료 | |
| `Alt + Enter` | | 편집 중 Lines 타입 줄 엔터 / 셀 편집 완료 | |
| `Ctrl + Enter` | | 편집 중 Lines 타입 줄 엔터 / 셀 편집 완료
트리 행의 접힘/펼침
웹 접근성 모드(Accessibility:1)에서 필터 행의 필터 메뉴 열기 | |
| `Home` | | 현재 포커스 행에 첫번째 셀로 이동 | |
| `Ctrl + Home` | | 현재 포커스 된 컬럼의 첫번째 행으로 포커스 | |
| `End` | | 현재 포커스 행에 마지막 셀로 이동 | |
| `Ctrl + End` | | 현재 포커스 된 컬럼의 마지막 행으로 포커스 | |
| `Arrow(Up, Down, Left, Right)` | | 방향키 방향에 따라 포커스 된 셀 변경/편집모드에서는 편집을 유지하면서 이동(Up, Down) | 포커스 가능한 셀로만 이동 가능(CanFocus) |
| `Shift + Arrow` | | 방향키 방향에 따라 셀 범위 선택 | |
| `Shift + Ctrl + Arrow` | | 방향키 방향에 따라 연속 셀 범위 한 번에 선택 | 멀티레코드 (MultiRecord) 환경에서 동작 안함, 대용량 모드에서 MergeVisibleDom에 따라 병합 정보가 다게 동작, 마지막 선택 영역으로 스크롤 이동 안함 |
| `Ctrl + C` | | 복사 | |
| `Ctrl + V` | | 붙여넣기 | |
| `Ctrl + X` | | 포커스 된 셀을 복사 후 행을 Deleted 상태로 변경 | |
| `Ctrl + Y` | | 편집상태에서 값을 이후로 돌리기(Redo) | |
| `Ctrl + Z` | | 편집모드에서 값을 이전으로 돌리기(Undo) | |
| `Ctrl + Shift + F` | | 찾기 다이얼로그 열기 | ibsheet-dialog.js 가 include 되어있어야 사용가능, ibsheet-common.js의 Event에 단축키에 대한 내용 정의되어있어 사용자가 핸들링 가능 |
| `Ctrl + Alt + T` | | 피벗 다이얼로그 열기 | ibsheet-dialog.js 가 include 되어있어야 사용가능, ibsheet-common.js의 Event에 단축키에 대한 내용 정의되어있어 사용자가 핸들링 가능 |


<!--!
## [`비공개`] Action Keyword

| 키보드 | 마우스 | Keyword |
| ----- | ------ | --------- |
|       | `Click` | "OnClickCell", "OnClickSort" |
|       | `Right Click` | "OnRightClick" |
| `Ctrl` | `Click` | "OnCtrlClickCell", "OnCtrlClickSort" |
| `Shift` | `Click` | "OnShiftClickCell", "OnShiftClickSort" |
|         | `Drag` | "OnDragRow" |
| `Ctrl`  | `Drag` | "OnCtrlDragRow" |
| `Shift` | `Drag` | "OnShiftDragRow" |
| `Enter`        | | "OnEnter", "OnEnterEdit" |
| `Ctrl + Enter` | | "OnCtrlEnter" |
| `Space`        | | "OnSpace", "OnSpaceEdit" |
| `Ctrl + Space` | | "OnCtrlSpace" |
| `Shift + Space` | | "OnShiftSpace" |
| `Tab`          | | "OnTab", "OnTabEnum", "OnTabEdit" |
| `Shift + Tab`  | | "OnShiftTab", "OnShiftTabEnum", "OnShiftTabEdit" |
| `Ctrl + Deleted` | | "OnCtrlDel" |
| `Deleted` | | "OnDel" |
| `Ctrl + A` | | "OnCtrlA" |
| `Shift + Ctrl + A` | | "OnShiftCtrlA" |
| `Ctrl + Alt + A` | | "OnCtrlAltA" |
| `F2` | | "OnF2" |
| `Esc` | | "OnEsc", "OnEscEdit" |
| `Shift + Enter` | | "OnShiftEnter", "OnShiftEnterEdit" |
| `Alt + Enter` | | "OnAltEnterEdit" |
| `Ctrl + Enter` | | "OnCtrlEnter", "OnCtrlEnterEdit" |
| `Home` | | "OnHome" |
| `Ctrl + Home` | | "OnCtrlHome" |
| `End` | | "OnEnd" |
| `Ctrl + End` | | "OnCtrlEnd" |
| `Arrow(Up, Down, Left, Right)` | | "OnUp", "OnDown", "OnLeft", "OnRight", "OnUpEdit", "OnDownEdit" |
| `Shift + Arrow` | | "OnShiftUp", "OnShiftDown", "OnShiftLeft", "OnShiftRight" |
| `Shift + Ctrl + Arrow` | | "OnShiftCtrlUp", "OnShiftCtrlDown", "OnShiftCtrlLeft", "OnShiftCtrlRight" |
| `Ctrl + C` | | "OnCtrlC" |
| `Ctrl + V` | | "OnCtrlV" |
| `Ctrl + X` | | "OnCtrlX" |
| `Ctrl + Y` | | "OnCtrlY" |
| `Ctrl + Z` | | "OnCtrlZ" |
| `Ctrl + Shift + F` | | |
| `Ctrl + Alt + T` | | |
!-->


### Read More

- [HeaderSortActionMode cfg](/docs/props/cfg/header-sort-action-mode)
- [CanFocus cell](/docs/props/cell/can-focus)
<!--!
- [`비공개`] [Accessibility cfg](/docs/props/cfg/accessibility)
!-->


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.3.0.50|`Ctrl + Space`동작 변경, `Shift + Space` 동작 추가, `Shift + Ctrl + Arrow` 동작 추가|
