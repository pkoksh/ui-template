---
KEY: linkBase
KIND: column-property
PATH: props/col/link-base
ALIAS: 셀에, 속성이, 있는, 경우, 경로를
ALIAS_EN: link, base
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/link-base
---
# LinkBase ***(col)***

> 셀에 [Link](/docs/props/col/link)속성이 있는 경우, Base 경로를 설정합니다.

> 현재 페이지가 **/abc/test.html**이라고 가정했을때, `LinkBase` 설정에 따른 연결 `URL`은 다음과 같습니다.
> |Link|LinkBase|실제연결URL|
> |---|---|---|
> |/xyz/test2.html||/xyz/test2.html|
> |./xyz/test2.html||/abc/xyz/test2.html|
> |/xyz/test2.html|/kor|/kor/xyz/test2.html|
> |./xyz/test2.html|/kor|/kor/xyz/test2.html|


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|[Link](/docs/props/col/link)에서 설정한 `URL`의 Base 경로|


### Example
```javascript
//열을 클릭시 특정 URL로 이동한다.
options.Cols = [
    ...
    //클릭시 /koef/tMIS/dcp/ConfProc.do 로 연결
    {Type: "Text", Link: "/tMIS/dcp/ConfProc.do", LinkBase: "/koef", CanEdit: 0, Name: "sa_cfprc", Width: 100 ...},
    ...
];
```

### Read More

- [Link col](/docs/props/col/link)
- [LinkTarget col](/docs/props/col/link-target)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
