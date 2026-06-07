---
KEY: expandLevel
KIND: column-property
PATH: props/col/expand-level
ALIAS: 열을, 표시하기, 펼쳐야, 하는, 또는
ALIAS_EN: expand, level
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/expand-level
---
# !ExpandLevel ***(col)***

> 열을 표시하기 위해 펼쳐야 하는 Expand Button 또는 Icon 수를 지정합니다

> `ExpandLevel`은 설정하지 않은 경우 default는 0 값이 아닌 null 입니다

> 만약 설정하지 않은 경우에는 Expand 동작이 발생할 때 접힘/펼침 동작과 `Visible` 값을 보고 접힘/펼침 동작이 실행됩니다.

> `ExpandLevel`이 설정된 경우에는 접음이 실행된 경우 `ExpandLevel` 값에서 -1을 하고, 펼침이 실행된 경우에는 `ExpandLevel` 값에서 +1을 합니다. 이렇게 변경된 `ExpandLevel` 값이 0보다 큰 경우에는 펼침을 실행하고, 0보다 작거나 같을 경우에는 접힘을 실행합니다.


### Type
`number`


### Options
|Value|Description|
|-----|-----|
|`number`|열을 표시하기 위해 펼쳐야 하는 버튼의 수|

### Example
```javascript
options.Cols = [
	...
	{
		Header: [
			{ Value: 'A' },
			{ Value: 'A1' },
			{ Value: 'A10' }
		],
		Name: 'A10',
		Type: 'Text',
		Visible: 0,
		Width: 80,
		ExpandLevel: -1 // Expand 버튼을 두개 이상 펼쳐야만 열이 보여지게 설정
	},
	...
]
```

### Read More

- [Visible col](./visible)
- [Expanded cell](/docs/props/cell/expanded)
- [ExpandRows cell](/docs/props/cell/expand-rows)
- [ExpandCols cell](/docs/props/cell/expand-cols)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
