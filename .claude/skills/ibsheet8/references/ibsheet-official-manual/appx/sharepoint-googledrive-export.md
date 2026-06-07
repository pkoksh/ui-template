---
KEY: sharepointGoogledriveExport
KIND: appendix
PATH: appx/sharepoint-googledrive-export
ALIAS: 로, 파일, 다운로드하기, 파일을, 다운로드하는
ALIAS_EN: sharepoint, googledrive, export
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/sharepoint-googledrive-export
---
# !Google Drive, SharePoint로 파일 다운로드하기  ***(appendix)***
> Google Drive와 SharePoint로 파일을 다운로드하는 방법을 알아봅니다. 

> **제약사항: 해당 기능을 사용하시려면 반드시 JDK 1.8보다 높은 버전의 자바를 사용하셔야 됩니다.** 


## Google Drive로 파일 다운로드하기

### 1. 필수 의존성 설정

Google Drive 파일 다운로드 기능을 사용하실 경우 `google-api-client`, `google-oauth-client-jetty`, `google-api-services-drive` 라이브러리를 추가해주셔야 됩니다. 

**주의사항: 의존성 설정시 반드시 라이브러리 버전을 아래 명시한 버전에 맞춰주셔야 됩니다.**

- 빌드 도구로 Maven을 사용하고 있는 경우

```xml
<!-- Maven 의존성 설정 -->
<dependency>
  <groupId>com.google.api-client</groupId>
  <artifactId>google-api-client</artifactId>
  <version>2.0.0</version>
</dependency>

<dependency>
  <groupId>com.google.oauth-client</groupId>
  <artifactId>google-oauth-client-jetty</artifactId>
  <version>1.34.1</version>
</dependency>

<dependency>
  <groupId>com.google.apis</groupId>
  <artifactId>google-api-services-drive</artifactId>
  <version>v3-rev20220815-2.0.0</version>
</dependency>
```

- 빌드 도구로 Gradle을 사용하고 있는 경우 

```groovy
// Gradle 의존성 설정
implementation 'com.google.api-client:google-api-client:2.0.0'
implementation 'com.google.oauth-client:google-oauth-client-jetty:1.34.1'
implementation 'com.google.apis:google-api-services-drive:v3-rev20220815-2.0.0'
```

### 2. Google Drive API 세팅 절차

**1)** 다음 링크로 들어가 Google Cloud 프로젝트에 접속해주세요 (접속 url: https://console.cloud.google.com/projectselector2/apis) 




[Google Cloud 프로젝트 생성]



<img src="../../assets/imgs/googleDriveExportSetting1.png" alt="구글 드라이브 API 설정 절차1" width="375" height="292">




**2)** 새로운 프로젝트를 생성해주세요.



[라이브러리에서 Google Drive API 검색]



<img src="../../assets/imgs/googleDriveExportSetting2.png" alt="구글 드라이브 API 설정 절차2" width="446" height="162">






[Google Drive API 사용 설정]



<img src="../../assets/imgs/googleDriveExportSetting3.png" alt="구글 드라이브 API 설정 절차3" width="408" height="240">




**3)** API 및 서비스 > 라이브러리로 들어가 검색창에 `Google Drive API`를 검색한 뒤, `Google Drive API`를 사용 설정해주세요.



[OAuth 동의 화면에서 어플리케이션 정보 등록]



<img src="../../assets/imgs/googleDriveExportSetting4.png" alt="구글 드라이브 API 설정 절차4" width="352" height="293">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="../../assets/imgs/googleDriveExportSetting5.png" alt="구글 드라이브 API 설정 절차5" width="279" height="485">




**4)** API 및 서비스 > OAuth 동의 화면으로 들어가 User Type을 External로 설정한 뒤, 절차에 따라 어플리케이션 정보를 등록해주세요.



[사용자 인증 정보 생성]



<img src="../../assets/imgs/googleDriveExportSetting6.png" alt="구글 드라이브 API 설정 절차6" width="466" height="320">




**5)** API 및 서비스 > 사용자 인증 정보 페이지에서 `사용자 인증 정보 만들기` 버튼을 클릭한 뒤, 뒤이어 나오는 옵션 중 `OAuth 클라이언트 ID`를 클릭하여 절차에 따라 사용자 인증 정보를 생성해주세요.



[credentials.json 파일 저장]



<img src="../../assets/imgs/googleDriveExportSetting7.png" alt="구글 드라이브 API 설정 절차7" width="341" height="343">




**6)** 절차에 따라 사용자 인증 정보를 생성하셨다면 OAuth 클라이언트 생성 팝업창이 나타날 겁니다. 

해당 팝업창 좌측 아래 JSON 다운로드 버튼 클릭해서 JSON 파일을 다운로드한 뒤, credentials.json로 파일 이름을 변경하여 서버 내 파일을 저장해주세요.






**7)** 다운로드받은 credentials.json 파일 위치를 down 객체의 `setGDriveCertificationPath` 메서드로 잡아준 뒤, `downToGDrive` 메서드를 이용해 파일을 구글 드라이브로 다운로드하세요.

```java
// Google Drive 다운로드
down.setGDriveCertificationPath("Credentials.json 파일 위치"); // 서버 내 credentials.json 파일 위치를 설정해주세요.
down.setGDriveTokenPath("인증 후 받아온 토큰을 저장할 폴더 위치"); // 인증이 완료된 후 인증 완료 토큰을 받아올 폴더 위치를 설정해주세요.
		
down.downToGDrive();
```

## SharePoint로 파일 다운로드하기

### 1. 필수 의존성 설정

SharePoint 파일 다운로드 기능을 사용하실 경우 `microsoft-graph`, `azure-identity` 라이브러리를 추가해주셔야 됩니다. 

**주의사항: 의존성 설정시 반드시 라이브러리 버전을 아래 명시한 버전에 맞춰주셔야 됩니다.**

- 빌드 도구로 Maven을 사용하고 있는 경우

```xml
<!-- Maven 의존성 설정 -->
<dependency>
  <groupId>com.microsoft.graph</groupId>
  <artifactId>microsoft-graph</artifactId>
  <version>5.75.0</version>
</dependency>

<dependency>
  <groupId>com.azure</groupId>
  <artifactId>azure-identity</artifactId>
  <version>1.2.5</version>
</dependency>
```

- 빌드 도구로 Gradle을 사용하고 있는 경우 

```groovy
// Gradle 의존성 설정
implementation 'com.microsoft.graph:microsoft-graph:5.75.0' 
implementation 'com.azure:azure-identity:1.2.5' 
```

### 2. SharePoint API 세팅 절차

**1)** SharePoint 사이트 접근 권한이 있는 관리자 계정으로 Microsoft Entra ID 센터에 접속해주세요 (접속 url: https://entra.microsoft.com/#home)



[Microsoft Entra ID 센터에 어플리케이션 등록]



<img src="../../assets/imgs/SharePointExportSetting1.png" alt="SharePoint API 설정 절차1" width="448" height="367">




**2)** 좌측 메뉴의 애플리케이션 > 앱 등록으로 들어간 뒤, `새 등록` 버튼을 클릭하여 어플리케이션을 등록해주세요. 



[어플리케이션의 클라이언트 ID, 테넌트 ID 확인]



<img src="../../assets/imgs/SharePointExportSetting2.png" alt="SharePoint API 설정 절차2" width="493" height="279">




**3)** 어플리케이션을 등록 한 뒤, 다시 애플리케이션 > 앱 등록으로 들어가 '모든 애플리케이션' 탭에서 등록하신 어플리케이션을 클릭하신 후 나오는 기본 정보에서 클라리언트 ID와 테넌트 ID를 확인해주세요. 



[클라이언트 시크릿 값 생성]



<img src="../../assets/imgs/SharePointExportSetting3.png" alt="SharePoint API 설정 절차3" width="590" height="150">




**4)** 어플리케이션 개요 정보가 표시된 상태에서 좌측 메뉴의 인증서 및 암호로 들어간 뒤, 클라이언트 비밀 탭에서 '새 클라이언트 암호' 버튼을 클릭하여 새로운 클라이언트 시크릿 암호를 생성해주세요. 

**암호 생성 직후 반드시 클라이언트 시크릿 ID가 아닌 클라이언트 시크릿 값을 기억해주세요.(일정 시간이 지난 이후, 값이 마스킹 처리되어 내용을 확인할 수 없게 됩니다.)** 



[SharePoint 사이트 접근 권한 설정]



<img src="../../assets/imgs/SharePointExportSetting4.png" alt="SharePoint API 설정 절차4" width="581" height="219">






<img src="../../assets/imgs/SharePointExportSetting5.png" alt="SharePoint API 설정 절차5" width="605" height="194">




**5)** 좌측 메뉴의 API 사용 권한으로 들어가 `+ 권한 추가 버튼`을 클릭해주세요. 

클릭 후 'API 사용 권한 요청'이라는 우측 메뉴가 생성될 텐데, 여기에서 차례로 Microsoft Graph > 애플리케이션 사용 권한 > Sites로 들어가 Sites.Read.All, Sites.ReadWrite.All 체크박스를 체크한 뒤, 하단에 권한 추가 버튼을 클릭해주세요. 
 앞선 작업이 완료된 후, '테스트에 대한 관리자 동의 허용' 버튼을 클릭해주세요. 






**6)** 앞서 기억해주신 클라이언트 ID, 테넌트 ID, 클라이언트 시크릿 값을 down 객체의 `setSharePointClientId`, `setSharePointTenantId`, `setSharePointClientSecret`, `setSharePointUrl` 메서드 각각에 변수로 설정해주세요. 
 변수 설정이 완료되셨다면 `downToSharePoint` 메서드를 이용해 파일을 SharePoint 사이트 드라이브로 다운로드하실 수 있습니다.

```java
// SharePoint 다운로드
down.setSharePointClientId("클라이언트 아이디"); // 클라이언트 ID를 설정해주세요.
down.setSharePointTenantId("테넌트 아이디"); // 테넌트 ID를 설정해주세요.
down.setSharePointClientSecret("클라이언트 시크릿 값"); // 클라이언트 시크릿 값을 설정해주세요.
down.setSharePointUrl("SharePoint 사이트 url"); // SharePoint 사이트 Url
		
down.downToSharePoint();
```

### Read More

- [Export cfg](/docs/props/cfg/export)
- [DirectDown2Excel method](/docs/funcs/excel/direct-down-to-excel)
- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [down2Text method](/docs/funcs/excel/down-to-text)
- [down2Pdf method](/docs/funcs/excel/down-to-pdf)
- [파일업로드/다운로드](/docs/appx/import-export)

### Since

|product|version|desc|
|---|---|---|
|jar|1.1.27|downToGDrive, downToSharePoint 기능 추가|
