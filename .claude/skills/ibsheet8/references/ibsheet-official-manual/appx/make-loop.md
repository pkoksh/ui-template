---
KEY: makeLoop
KIND: appendix
PATH: appx/make-loop
ALIAS: 문, 만들기, 조회된, 데이터, 전체에
ALIAS_EN: make, loop, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/make-loop
---
# Loop문 만들기 ***(appendix)***
> 조회된 데이터 전체에 대해서 for loop문을 수행하는 것 보다는 가급적 formula를 이용하여 로직을 구성하는 것이 성능적으로 좋습니다.

> 하지만 formula를 통해 수행하기 어려운 경우라면 어쩔수 없이 행(row)나 열(col) 에 대해서 처음부터 끝까지 Loop문을 만들어 수행해야 하는 경우도 있습니다. 



## 1. 행(row)단위 Loop문 만들기
행 단위로 Loop문을 구성할 때는 [getDataRows()](/docs/funcs/core/get-data-rows)함수를 통해 전체 데이터 행들을 배열로 받은 후, 배열 안에 각 행의 객체를 접근하는 형태로 로직을 구성할 수 있습니다.

### Example
```javascript
  //첫번째 데이터부터 마지막 데이터까지 Loop 문을 수행하면서 특정 열(열이름:CHK)에 체크 된 행 객체를 배열형태로 반환하는 참고용 로직입니다.
  //실제로는 getRowsByChecked()함수를 통해 아래와 같은 작업을 수행할 수 있습니다.

  //전체 데이터 행을 배열로 얻는다.
  var rows = sheet.getDataRows();
  var checkRowArr = [];
  for (var i = 0; i < rows.length; i++) {
    //CHK 열이 체크되어 있으면
    if (rows[i]["CHK"] == 1) {
      //배열에 넣는다.
      checkRowArr.push(row);
    }
  }
  //전체 체크된 행의 개수를 console에 출력
  console.log(checkRowArr.length);
```

## 2. 열(col)단위 Loop문 만들기
열 단위로 Loop문을 구성할 때는 [getCols()](/docs/funcs/core/get-cols)함수를 통해 전체 열이나, 눈에 보여지는 열, 편집 가능한 열 등을 배열로 받은 후, 배열 안에 각 열이름을 접근하는 형태로 로직을 구성할 수 있습니다.


### Example
```javascript
  //첫번째 데이터 행을 기준으로 Loop 문을 수행하여 Type이 Text인 열의 열이름을 배열에 담아 리턴하는 참고용 로직입니다.

  //눈에 보여지는 열(감춰진 열 제외)만 추출
  var colsArr = sheet.getCols("Visible");
  var textColArr = [];
  var fRow = sheet.getFirstRow(); //첫번째 행
  for (var i = 0; i < colsArr.length; i++) {
    //첫번째 행에 전체 열의 타입을 비교하여
    if (sheet.getType(fRow,colsArr[i]) === "Text") {
        //배열에 넣는다.
        textColArr.push(colsArr[i]);
    }
  }
  //Type이 Text인 열들을 console에 출력
  console.log(textColArr);
```

### Read More
- [getDataRows method](/docs/funcs/core/get-data-rows)
- [getCols method](/docs/funcs/core/get-cols)
- [getFirstRow method](/docs/funcs/core/get-first-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
