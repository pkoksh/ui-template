---
KEY: expandLevel
KIND: row-property
PATH: props/row/expand-level
ALIAS: 행을, 표시하기, 펼쳐야, 하는, 또는
ALIAS_EN: expand, level
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/expand-level
---
# !ExpandLevel ***(row)***

> 행을 표시하기 위해 펼쳐야 하는 Expand Button 또는 Icon 수를 지정합니다

> `ExpandLevel`은 설정하지 않은 경우 default는 0 값이 아닌 null 입니다

> 만약 설정하지 않은 경우에는 Expand 동작이 발생할 때 접힘/펼침 동작과 `Visible` 값을 보고 접힘/펼침 동작이 실행됩니다.

> `ExpandLevel`이 설정된 경우에는 접음이 실행된 경우 `ExpandLevel` 값에서 -1을 하고, 펼침이 실행된 경우에는 `ExpandLevel` 값에서 +1을 합니다. 이렇게 변경된 `ExpandLevel` 값이 0보다 큰 경우에는 펼침을 실행하고, 0보다 작거나 같을 경우에는 접힘을 실행합니다.


### Type
`number`


### Options
|Value|Description|
|-----|-----|
|`number`|행을 표시하기 위해 펼쳐야 하는 버튼의 수|

### Example
```javascript
options.Def = {
	Header: {
		Init: [
      { 
        // 헤더 첫 행은 id를 변경하면 안된다.
      },
			{
				id: 'Header2',
			},
			{
				id: 'Header3',
				Visible: 0,
				ExpandLevel: -1, // Expand 버튼을 두개 이상 펼쳐야만 보여지도록 설정
			},
    ]
	}
};
```

### Read More

- [Expanded row](./expanded)
- [Visible row](./visible)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
