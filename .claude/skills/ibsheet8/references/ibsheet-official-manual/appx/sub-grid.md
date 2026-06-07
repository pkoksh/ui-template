---
KEY: subGrid
KIND: appendix
PATH: appx/sub-grid
ALIAS: 행의, 자식으로, 그리드를, 표시하는, 기능입니다
ALIAS_EN: sub, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/sub-grid
---
# !SubGrid  ***(appendix)***
> 행의 자식으로 그리드를 표시하는 기능입니다.


> **<mark>주의</mark> : `SearchMode: 2` 번만 지원합니다.**

> 단순 조회용으로만 기능 제공 됩니다.(편집, 엑셀 Export/Import, 저장 등의 기능은 동작하지 않습니다.)

## 1. 자식의 모든 그리드가 동일 할때의 설정
- 트리로 표현되기 때문에 `Cfg.MainCol` 을 설정해야 합니다.
```javascript
Cfg :{
        "SearchMode": '2',
	"MainCol": 'groupTitle'
},
Cols: [
	......,
	{
	  "Header": {
		"Value" : 'Dept A - Status',
		"Align" : 'Center'
	  },
	  "Name" : 'groupTitle',
	  "Type" : 'Text'
	},
	.....
]
```
- Def.Row.CDef 자식 그리드를 설정할 이름을 지정합니다.

```javascript
 Def: {
	Row:{
	  "CDef" : 'SubSheet1'
	}
}
```
- Def.Row.CDef 에 설정한 이름으로 자식 그리드 설정값을 셋팅합니다.

|Name|Type|Required| Description |
|----------|-----|---|----|
|CanExpand|`boolean`|필수|행에 접힘(+)/펼침(-) 아이콘 표시 여부(`default: 1(false)`)
반드시 0으로 설정해야 한다.|
|DetailCol|`string`|필수|자식 그리드를 표시할 열의 이름(부모 그리드의 열이름 설정)|
|DetailCol설정값.Span|`string`|선택|자식 그리드를 표시할 행을 가로로 머지할 경우 머지할 열의 갯수
 반드시 Spanned:1로 설정되어 있어야 한다.|
|DetailLayout|`object` \| `string`|필수|자식 그리드에 설정할 값, js의 url 설정가능|
|Expanded|`boolean`|필수|행의 접힘/펼침 여부(`default: 1(true)`)
반드시 0으로 설정해야 한다.|
|Spanned|`boolean`|선택|행의 가로로 머지 할지 여부(`default: 0(true)`)|

```javascript
Def : {
	Row:{
	  "CDef" : 'SubSheet1'
	},
	SubSheet1: {
	   "DetailCol" : 'groupTitle', // 필수, 자식 그리드를 표시할 열이름
	   "DetailLayout" : detailSheet, // 필수 (url, object)
	   "Expanded" : '0', //필수 반드시 0으로 설정해야 함
	   "CanExpand" : '0',//필수 반드시 0으로 설정해야 함
	   "Spanned" : '1', //Row 머지시 설정  
	   "groupTitle" : {
		"Span" : 3 //자식 그리드를 표현할 row의 가로 머지 갯수, Spanned:1로 설정되어 있어야 한다.
	   }
	}
}

//자식 그리드 설정값
var detailSheet = {
  Cfg: {
    MaxVScroll: '300', //자식 그리드의 높이
    
  },
  // 각 컬럼(Cols)별 세부 설정
  Cols: [
    {
      Name: 'aAcount',
      Type: 'Text'
    },
    {
      Name: 'aModel',
      Type: 'Text'
    },
    {
      Name: 'aSalesTask',
      Type: 'Text'
    },
    {
      Name: 'aDataSource',
      Type: 'Text'
    },
    {
      Name: 'aCreateUser',
      Type: 'Text'
    },
    {
      Name: 'aCreateDate',
      Type: 'Date',
      Align: 'Center'
    }
  ]
};
```
- 조회 데이터 설정하기

트리 시트이기 때문에 자식으로 표시될 그리드의 내용을 `Items:[]` 구조로 설정해야 한다.
```javascript
{
    Data : [
	{
		groupTitle: "DealComment",
		codeNumber: "DC - 001",
		Items: [{
		  Items: [{ //자식 그리드 데이터
			aAcount: "A5470333",
			aModel: "MD-4781",
			aSalesTask: "for sale",
			aDataSource: "Induce sales to business partners",
			aCreateUser: "BizUser",
			aCreateDate: "2018/03/02",
		  }]
		}]
	 },
	 {
		groupTitle: "DealComment",
		codeNumber: "DC - 002",
		Items: [{
		  Items: [{ //자식 그리드 데이터
			aAcount: "A5470334",
			aModel: "MD-4781",
			aSalesTask: "for sale",
			aDataSource: "Induce sales to business partners",
			aCreateUser: "BizUser",
			aCreateDate: "2019/03/02",
		  },{
			aAcount: "A5470335",
			aModel: "MD-4781",
			aSalesTask: "for sale",
			aDataSource: "Induce sales to business partners",
			aCreateUser: "BizUser",
			aCreateDate: "2019/03/03",
		  },{
			aAcount: "A5470336",
			aModel: "MD-4781",
			aSalesTask: "Not for sale",
			aDataSource: "",
			aCreateUser: "BizUser",
			aCreateDate: "2019/03/04",
		  },{
			aAcount: "A5470336",
			aModel: "MD-4781",
			aSalesTask: "Not for sale",
			aDataSource: "",
			aCreateUser: "BizUser",
			aCreateDate: "2019/03/04",
		  },{
			aAcount: "A5470336",
			aModel: "MD-4781",
			aSalesTask: "for sale",
			aDataSource: "Induce sales to business partners",
			aCreateUser: "BizUser",
			aCreateDate: "2019/03/04",
		  },{
			aAcount: "A5470336",
			aModel: "MD-4781",
			aSalesTask: "for sale",
			aDataSource: "Induce sales to business partners",
			aCreateUser: "BizUser",
			aCreateDate: "2019/03/04",
		  }]
		}]
	  }
	]
}


```

최종 예제 : [https://jsfiddle.net/j3f1hpsr/1/](https://jsfiddle.net/j3f1hpsr/1/)

## 2. Row 마다 자식의 그리드가 다를때 설정
- Def 영역에 자식으로 표시되어야 할 그리드를 정의 한다.
```javascript
Def: {
	//첫번째 자식 그리드 내용 셋팅  
	Master1: {
		Expanded: '0', // 트리 펼침 관련 로직
		CDef: 'Detail1', // CDef 를 이용하여 자식 로우의 Def 정보를 가져옵니다.
		CanFocus: '1', // 해당 로우를 클릭 시 포커스 가능 여부 설정
	},

	//CDef 설정한 이름으로 자식 그리드에 들어갈 내용을 설정
	Detail1: {
		DetailCol: 'codeNumber', //필수 자식 그리드가 그려질 열의 이름
		DetailLayout: detailSheet_1, // 필수 자식 그리드의 상세 설정 정보
		Expanded: '0',         // 필수 행이 확장되고 자식이 표시되는 방식
		CanExpand: '0',        // 필수 확장/축소 표시여부
		Spanned: '1',          // 자식그리드가 표시되는 row 가로 머지 여부
		codeNumber: {          // 가로로 머지할 컬럼의 갯수
			Span: 2
		}
	},
	//두번째 자식 그리드 내용 셋팅
	Master2: {
	  Expanded: '0', // 트리 펼침 관련 로직
	  CDef: 'Detail2', // CDef 를 이용하여 자식 로우의 Def 정보를 가져옵니다.
	  CanFocus: '1', // 해당 로우를 클릭 시 포커스 가능 여부 설정
	},
	Detail2: {
	  DetailCol: 'groupTitle', //필수 자식 그리드가 그려질 열의 이름
	  DetailLayout: detailSheet_2, // 필수 자식 그리드의 상세 설정 정보
	  Expanded: '0',         // 필수 행이 확장되고 자식이 표시되는 방식
	  CanExpand: '0',        // 필수 확장/축소 표시여부
	  Spanned: '1',          // 자식그리드가 표시되는 row 가로 머지 여부
	  groupTitle: {          // 가로로 머지할 컬럼의 갯수
		Span: 3
	  }
	}
}

// 자식 그리드 설정값
var detailSheet_1 = {
  Cfg: {
    MaxVScroll: '300', //Row가 노출되는 Body영역(Vscroll이 나타나는 영역)의 최대치를 설정
    CanEdit: 3
    
  },
  // 각 컬럼(Cols)별 세부 설정
  Cols: [
    {
      Name: 'aAcount',
      Type: 'Text'
    },
    {
      Name: 'aModel',
      Type: 'Text'
    },
    {
      Name: 'aSalesTask',
      Type: 'Text'
    },
    {
      Name: 'aDataSource',
      Type: 'Text'
    },
    {
      Name: 'aCreateUser',
      Type: 'Text'
    },
    {
      Name: 'aCreateDate',
      Type: 'Date',
      Align: 'Center'
    }
  ]
};

var detailSheet_2 = {
  Cfg: {
    MaxVScroll: '300', //Row가 노출되는 Body영역(Vscroll이 나타나는 영역)의 최대치를 설정
    CanEdit: 3
    
  },
  // 각 컬럼(Cols)별 세부 설정
  Cols: [
    {
      Name: 'aAcount',
      Type: 'Text'
    },
    {
      Name: 'aModel',
      Type: 'Text'
    }
  ]
};
```
- 조회데이터에서 Def에 자식으로 표시되어야 할 그리드를 지정한다.
```javascript
{
    Data : [
	{
		groupTitle: "DealComment",
		codeNumber: "DC - 001",
		Def: 'Master1', //표시할 그리드 지정
		Items: [{
		  Items: [{  //자식 그리드데이터
			aAcount: "A5470333",
			aModel: "MD-4781",
			aSalesTask: "for sale",
			aDataSource: "Induce sales to business partners",
			aCreateUser: "BizUser",
			aCreateDate: "2018/03/02",
		  }]
		}]
	 },
	 {
		Height: "50",
		groupTitle: "DealComment",
		codeNumber: "DC - 002",
		Def: 'Master2', //표시할 그리드 지정
		Items: [{
		  Items: [{ //자식 그리드데이터
			aAcount: "A5470334",
			aModel: "MD-4781",
			aSalesTask: "for sale",
			aDataSource: "Induce sales to business partners",
			aCreateUser: "BizUser",
			aCreateDate: "2019/03/02",
		  },{
			aAcount: "A5470335",
			aModel: "MD-4781",
			aSalesTask: "for sale",
			aDataSource: "Induce sales to business partners",
			aCreateUser: "BizUser",
			aCreateDate: "2019/03/03",
		  },{
			aAcount: "A5470336",
			aModel: "MD-4781",
			aSalesTask: "Not for sale",
			aDataSource: "",
			aCreateUser: "BizUser",
			aCreateDate: "2019/03/04",
		  },{
			aAcount: "A5470336",
			aModel: "MD-4781",
			aSalesTask: "Not for sale",
			aDataSource: "",
			aCreateUser: "BizUser",
			aCreateDate: "2019/03/04",
		  },{
			aAcount: "A5470336",
			aModel: "MD-4781",
			aSalesTask: "for sale",
			aDataSource: "Induce sales to business partners",
			aCreateUser: "BizUser",
			aCreateDate: "2019/03/04",
		  },{
			aAcount: "A5470336",
			aModel: "MD-4781",
			aSalesTask: "for sale",
			aDataSource: "Induce sales to business partners",
			aCreateUser: "BizUser",
			aCreateDate: "2019/03/04",
		  }]
		}]
	  }
	]
}

```
최종예제 : https://jsfiddle.net/nxbejsk3/

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.2.0.0|서브그리드의 데이터 복사가 가능하게 변경|