---
KEY: fastloadConstraints
KIND: appendix
PATH: appx/fastload-constraints
ALIAS: 가상, 스크롤, 조회에, 대한, 제약
ALIAS_EN: fastload, constraints
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/fastload-constraints
---
# 가상 스크롤 조회에 대한 제약 사항  ***(appendix)***
> SearchMode 설정이 0, 3일 가상 스크롤 방식을 지원합니다.

> 이 때, 일부 타입과 기능을 사용하는데 있어 제약이 있습니다. 

## 현재 사용할 수 없는 기능

|Feature|Description|
|---|---|
|`피벗`|피벗된 시트가 아닌 일반 데이터 시트는 사용 가능|
|`Cfg.NoVScroll`|시트의 높이를 데이터의 높이만큼 지정하는 옵션이므로 사용불가|

## 권장하지 않는 타입(데이터행의 높이에 동적으로 영향을 주어 스크롤 시 문제가 될 수 있음)

- Lines
- Html
- Img
- Icon
- Button


### Read More
- [SearchMode cfg](/docs/props/cfg/search-mode)
- [Type appendix](/docs/appx/type)
- [Type col](/docs/props/col/type)
- [Type cell](/docs/props/cell/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.3|트리 및 그룹 기능 지원|
