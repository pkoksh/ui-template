---
KEY: noTreeLines
KIND: config-property
PATH: props/cfg/no-tree-lines
ALIAS: 트리를, 사용하는, 시트, 생성시, 노드와
ALIAS_EN: no, tree, lines, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/no-tree-lines
---
# NoTreeLines ***(cfg)***

> 트리를 사용하는 시트 생성시 노드와 노드 사이의 연결선을 표시할 지 여부를 설정합니다.

> 1 로 설정시 단순한 접기/펼침 버튼 형태로 트리의 노드가 표현됩니다. 


###
![NoTreeLines](/assets/imgs/noTreeLines.png "NoTreeLines 사용")
<!-- IMAGE: 스크린샷/예시 이미지 - NoTreeLines -->

[NoTreeLines: true]


![일반트리](/assets/imgs/tree.png "일반 트리")
<!-- IMAGE: 스크린샷/예시 이미지 - 일반트리 -->

[일반트리]


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|노드 연결 선을 표시 (`default`)|
|`1(true)`|노드 연결 선을 표시하지 않음|


### Example
```javascript
options.Cfg = {
    NoTreeLines: true,        //노드 연결선을 표시하지 않음.
    ...
};
```

### Read More
- [MainCol cfg](./main-col)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
