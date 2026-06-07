---
KEY: fileTypeUpload
KIND: appendix
PATH: appx/file-type-upload
ALIAS: 업로드, 또는, 셀의, 설정, 파일
ALIAS_EN: file, type, upload, config, setting, option
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/file-type-upload
---
# File Type 업로드 ***(appendix)***
> 열 또는 셀의 [Type](/docs/props/type)을 `File`로 설정 시 파일 업로드를 할 수 있습니다.

> Input태그가 각 셀마다 생성되며, 사이드 버튼 클릭 시 업로드 창이 열리고 파일을 선택할 수 있습니다.

> 시트에 추가된 파일은 저장시 서버로 전송되며, 저장 로직 처리 후 파일이름과 저장경로를 응답하면 파일을 다운로드 할 수 있습니다.

> 파일 업로드(추가, 편집) 후에는 해당 파일을 클릭해도 서버호출(다운로드)이 일어나지 않습니다.

> [Path](/docs/props/cell/path) 혹은 [FilePath](/docs/props/cfg/export)가 설정된 경우에만 셀에 데이터가 표시됩니다.

## 1. 조회
> 조회 데이터는 `(Col) Name : 파일이름`, `(Col) Name + "Path" : "파일 저장경로"`의 내용으로 조회해야 합니다. 

> `Cfg.Export.FilePath` 에 파일 저장 경로 설정시 `Path`를 설정하지 않아도 파일 다운로드 가능 합니다. 


```
예)
컬럼 설정 정보
Cols:[{"Header": "파일","Type": "File","Name": "lblist","Width": 300,"Align": "Center"}]

조회 데이터
{"data": [{"lblist":"file.xlsx", "lblistPath":"/customer-sample/", "lblistAlias":"파일.xlsx"}]}
```

## 2. 저장
> 저장은 [doSave()](/docs/funcs/core/do-save)를 이용하거나 ajax 통신 후 결과를 [applySaveResult()](/docs/funcs/core/apply-save-result)를 이용하여 시트에 반영 합니다.

#### ajax 로 저장하기
```javascript
var url = '../jsp/samples/customer/file_save.jsp';
var saveData = sheet.getSaveJson({saveMode:2, formData: true}); //시트의 데이터와 file를 추출

$.ajax({
  	url: url,
      	data: saveData,
      	method: "POST",
      	enctype: 'multipart/form-data',
      	contentType: false,
      	processData: false,
      	cache: false,
      	success:function(data){
      	      var result = data.IO.Result;
      	      var fileData = data.IO.data;

     	      //결과를 시트에 반영한다.
              //저장처리 이후 파일 다운로드 동작을 하려면 fileData에 값을 전달해야 한다.
      	      sheet.applySaveResult(result, null, null, fileData);
     	}
});
```

### 저장 후 시트에서 서버로 전송하는 저장 데이터 규격
- 파일 타입 컬럼데이터는 `rowID$colName: (binary)` 형태로 업로드 된 파일이 서버로 전송되며 저장 데이터에서는 제외됩니다.
```jsp
Data: {
     "data":[
          {"id":"AR1", "STATUS":"Changed"},
          {"id":"AR2", "STATUS":"Changed"},
     ]
}
AR1$file1: (binary)
AR2$file: (binary)
```

### 저장 작업 후 서버 응답 데이터 규격
```javascript
// 서버에서 시트로 보낼 응답 규격
// 성공 시
{"IO": {
    "Result": 0 ,
    "Message": "저장 되었습니다.",
    "data":[ 
            //저장처리 이후 파일 다운로드 하려면 필요
            {"file":"file.xlsx", "filePath":"/customer-sample/", "id":"AR7"},
            {"file":"file1.xlsx", "filePath":"/customer-sample/", "id":"AR4"},
           ]
    }
}
// 실패 시 Result 값을 음수로 설정.
{"IO": {"Result": -9, Meassage:"오류내용..." }}
```

### 서버 예제
```jsp
<%@ page language="java" contentType="application/json; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ page import="java.util.*, javax.servlet.*, com.ibleaders.utility.ib_json.*"%>

<%!
    // 파일 이름 가지고 오는 함수 예시
    public String getFilename(Part part) {
        for (String cd : part.getHeader("content-disposition").split(";")) {
            if (cd.trim().startsWith("filename")) {
            String filename = cd.substring(cd.indexOf('=') + 1).trim().replace("\"", "");
            return filename.substring(filename.lastIndexOf('/') + 1).substring(filename.lastIndexOf('\\') + 1);
            }
        }
        return null;
    }
%>
<%
    request.setCharacterEncoding("utf-8");
    response.setContentType("application/json");
    response.setStatus(200);

    boolean process = false;
    JSONArray jsonArr = new JSONArray();
    try {
        Collection<Part> parts = request.getParts();
        for(Part part : parts){
            if  (part.getHeader("Content-Disposition").contains("filename=")) {
                //  파일에 대한 처리
                JSONObject file = new JSONObject();
                String fileParam = part.getName();
	    	String id = fileParam.split("\\$", 2)[0];
	    	String col = fileParam.split("\\$", 2)[1];

                String filename = getFilename(part);
                String filepath = "C:/myPath/temp/";
                part.write(filepath + filename);

                file.put("id", id);
                file.put(col, filename);
                file.put(col + "Path", filepath);
                jsonArr.add(file);
            } else {
                // 다른 값에 대한 처리
                String colName = part.getName();
                String value = request.getParameter(part.getName());
            }
        }
        process = true;
    } catch(Exception ex) {
    	System.out.println(ex.getMessage());
        process = false;
    }

    JSONObject result = new JSONObject();
    JSONObject IO = new JSONObject();
    try {
        int res = process ? 0 : -9; // Result 오류에 관해서는 음수값을 셋팅한다. -1 ~ -7 까지는 시트가 사용하는 코드이므로 이 값은 피한다.
        IO.put("Result", res);
        IO.put("data", jsonArr);

        result.put("IO", IO); // 통신 관련 객체
    } catch(Exception ex) {
        result.put("Exception", ex);
    }
    out.print(result);
%>
```

### Read More
- [type appendix](/docs/appx/type)
- [doSave method](/docs/funcs/core/do-save)
- [getSaveJson method](/docs/funcs/core/get-save-json)
- [applySaveResult method](/docs/funcs/core/apply-save-result)
- [Alias cell](/docs/props/cell/Alias)
- [Path cell](/docs/props/cell/Path)
- [onBeforeFileDown event](/docs/events/on-before-file-down)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|기능 추가|
