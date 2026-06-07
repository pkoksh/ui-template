---
KEY: importExport
KIND: appendix
PATH: appx/import-export
ALIAS: 엑셀파일, 업로드, 다운로드, 시트의, 내용을
ALIAS_EN: import, export
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/import-export
---
# 엑셀파일 업로드/다운로드  ***(appendix)***
> 시트의 내용을 엑셀이나,텍스트 파일로 다운로드 하거나, 반대로 파일의 내용을 읽어 시트에 업로드하는 방법에 대해 알아봅니다.

> **이 내용은 서버 기반 파일 다운로드/업로드 방법을 설명합니다.**
 
> **클라이언트 기반 다운로드/업로드는 [exportData](/docs/funcs/export-data)/[importData](/docs/funcs/import-data) 함수를 참고해 주세요.**

## 필수 파일 요소
업로드/다운로드 작업을 위해서 다음과 같은 파일이 필요합니다.
1. 서버모듈(엑셀모듈)
<!--!- poi 3.13 이용시 필요 파일(JAVA)

|파일명|용도|
|---|---|
|ibsheet8-1.0.x.jar|엑셀 서버코어모듈|
|ibsheet8-hwpx-1.0.x.jar|`down2Hwpx` 서버코어모듈|
|poi-3.13, poi-ooxml-3.13, poi-ooxml-schemas-3.13 jar |엑셀 파일 생성/파싱 모듈|
|commons-codec-1.6.jar|엑셀 업로드 관련 인코딩 모듈, `down2Hwpx`시 필요|
|commons-logging-1.1.3.jar|로그 모듈|
|ib-itext.jar|pdf다운로드 모듈|
|batik-all-xml.jar|이미지 처리 관련 모듈, `down2Hwpx`시 필요|

- poi 4.1.2 이용시 필요 파일(JAVA)
!-->
|파일명|용도|
|---|---|
|ibsheet8-1.x.x.jar|엑셀 서버코어모듈|
|ibsheet8-hwpx-1.0.x.jar|`down2Hwpx` 서버코어모듈|
|poi-4.1.2, poi-ooxml-4.1.2, poi-ooxml-schemas-4.1.2|엑셀 파일 생성/파싱 모듈|
|commons-collections4-4.4.jar, commons-compress-1.19.jar
commons-math3-3.6.1.jar, curvesapi-1.06.jar, servlet-api.jar
SparseBitSet-1.2.jar, xmlbeans-3.1.0.jar |poi 이용시 필요 파일|
|commons-codec-1.13.jar|엑셀 업로드 관련 인코딩 모듈, `down2Hwpx`시 필요|
|commons-logging-1.1.3.jar|로그 모듈|
|ib-itext.jar|pdf 다운로드 모듈|
|batik-all-1.17.jar, commons-io-2.11.0.jar
xml-apis-ext-1.3.04.jar, xmlgraphics-commons-2.9.jar
|이미지 처리 관련 모듈, `down2Hwpx`시 필요|

- dotnet 4.0 이용시 필요 파일

|파일명|용도|
|---|---|
|IBSheet8-4.0.dll|엑셀 서버코어모듈|
|IBSheet8-4.0.resources.dll|엑셀 서버코어 서브모듈|
|Syncfusion.Compression.Base.dll, Syncfusion.Core.dll,
Syncfusion.XlsIO.Base.dll|엑셀 생성/파싱 모듈|
|wkhtmltopdf.exe|pdf생성 모듈|


### 서버모듈 확인 방법(엑셀 모듈)

서버에서 jar 파일이 정상적으로 로드되었는지 다음 구문을 통해 확인 할 수 있습니다.

```jsp
<%
System.out.println(com.ibleaders.ibsheet.util.Version.getVersion());
%>
```
위와 같이 jsp파일에 입력시 서버에 콘솔창에 다음과 같은 메세지가 나오면 정상입니다.

(각 jar 파일에 버젼 정보를 확인해 주세요.)
```console
********************************************************************************
# ibsheet8-1.1.X
# IBSheet(H) 8.0.0.0~
# IBChart(H) 7.3.0.1~
********************************************************************************
Class Info  : org.apache.poi.ss.usermodel.Workbook
jar path    : /D:/tomcat/tomcat-8.5_servertest/webapps/ibsheet8_demo_test/WEB-INF/lib/poi-4.1.2.jar
jar Version : Apache POI 4.1.2
Required Version : POI 3.8 beta3 or later
********************************************************************************
Class Info  : org.apache.poi.ooxml.POIXMLDocument
jar path    : /D:/tomcat/tomcat-8.5_servertest/webapps/ibsheet8_demo_test/WEB-INF/lib/poi-ooxml-4.1.2.jar
jar Version : Apache POI 4.1.2
Required Version : POI 3.8 beta3 or later
********************************************************************************
Class Info  : org.openxmlformats.schemas.spreadsheetml.x2006.main.CTWorkbookPr
jar path    : /D:/tomcat/tomcat-8.5_servertest/webapps/ibsheet8_demo_test/WEB-INF/lib/poi-ooxml-schemas-4.1.2.jar
jar Version : Apache POI 4.1.2
Required Version : POI 3.8 beta3 or later
********************************************************************************
Class Info  : org.openxmlformats.schemas.spreadsheetml.x2006.main.CTWorkbook
jar path    : /D:/tomcat/tomcat-8.5_servertest/webapps/ibsheet8_demo_test/WEB-INF/lib/poi-ooxml-schemas-4.1.2.jar
jar Version : Apache POI 4.1.2
Required Version : POI 3.8 beta3 or later
********************************************************************************
Class Info  : org.apache.xmlbeans.XmlBeans
jar path    : /D:/tomcat/tomcat-8.5_servertest/webapps/ibsheet8_demo_test/WEB-INF/lib/xmlbeans-3.1.0.jar
jar Version :
Required Version : XMLBeans 2.3.0 or later
********************************************************************************
POI Core Library file:/D:/tomcat/tomcat-8.5_servertest/webapps/ibsheet8_demo_test/WEB-INF/lib/poi-4.1.2.jar
POI OOXML Library file:/D:/tomcat/tomcat-8.5_servertest/webapps/ibsheet8_demo_test/WEB-INF/lib/poi-ooxml-4.1.2.jar
```

3. jsp,aspx 파일

|파일명|용도|
|---|---|
|DirectDown2Excel.jsp(aspx)|엑셀파일 다운로드|
|DirectLoadExcel.jsp(aspx)|엑셀파일 업로드|
|Down2Excel.jsp(aspx)|엑셀파일 다운로드|
|Down2Hwpx.jsp|한글(Hwpx) 파일 다운로드, 닷넷은 지원하지 않음|
|Down2Text.jsp(aspx)|텍스트파일 다운로드|
|Down2Pdf.jsp(aspx)|PDF파일 다운로드|
|LoadExcel.jsp(aspx)|엑셀파일 업로드|
|LoadText.jsp(aspx)|텍스트파일 업로드|


4. 플러그인 파일 include 파일

시트를 이용하여 다운로드/업로드 작업을 할 모든 페이지에는  `/plugins/ibsheet-excel.js` 파일이 인클루드 되어야 합니다.

## 준비 과정

### jsp 파일경로 설정
시트 생성시 Cfg 프로퍼티에 `Export.Url` 속성을 통해 jsp 파일이 위치한 경로를 설정해야 합니다.

```json
options.Cfg = {
    "Export":{
        "Url":"/assets/ibsheet/jsp"
    }
}
```

## 기능 구현
[down2Excel](/docs/funcs/excel/down-to-excel)이나 [loadText](/docs/funcs/excel/load-text)함수를 통해 시트의 내용을 다운로드/업로드 하실 수 있습니다.


```javascript
sheet.down2Excel({"fileName":"boardList.xlsx","sheetDesign":1,"merge":1});
```
![down2Excel](/assets/imgs/down2Excel.png)
<!-- IMAGE: 스크린샷/예시 이미지 - down2Excel -->


업로드/다운로드 함수에 대한 자세한 기능은 해당 함수에 대한 메뉴얼 파트를 참고해 주세요.

### Read More
- [Export cfg](/docs/props/cfg/export)
- [DirectDown2Excel method](/docs/funcs/excel/direct-down-to-excel)
- [DirectLoadExcel method](/docs/funcs/excel/direct-load-excel)
- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [Down2Hwpx method](/docs/funcs/excel/down-to-hwpx)
- [loadExcel method](/docs/funcs/excel/load-excel)
- [down2Text method](/docs/funcs/excel/down-to-text)
- [loadText method](/docs/funcs/excel/load-text)
- [down2Pdf method](/docs/funcs/excel/down-to-pdf)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.85|Down2Hwpx 기능 추가|
|excel|1.1.2|Down2Hwpx 기능 추가|
|jar|1.0.0|Down2Hwpx 기능 추가|
