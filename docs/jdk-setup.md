# JDK 설정 가이드

이 프로젝트(Spring Boot 3.2)는 **Java 17 이상**이 필요하다. 시스템 `JAVA_HOME`이 다른 버전(예: JDK 1.8)을 가리키고 있어도 별도 설정 없이 `.\gradlew.bat bootRun`이 동작하도록 프로젝트에 JDK 경로가 설정되어 있다.

## 적용된 설정

프로젝트 루트의 **`gradle.properties`**:

```properties
org.gradle.java.home=D:/dev/java/jdk-17.0.6
```

- Gradle이 빌드/실행(데몬)에 사용할 JDK를 고정하는 표준 설정이다.
- 시스템 `JAVA_HOME`·`PATH`와 무관하게 이 JDK로 컴파일/실행된다.
  (gradlew 런처 자체는 시스템 JVM으로 뜨지만, 실제 빌드를 수행하는 Gradle 데몬이 위 JDK로 기동됨 — Gradle 8.x 런처는 JVM 8 이상이면 동작)
- 경로 구분자는 Windows에서도 `/` 를 사용한다 (`\` 는 properties 파일에서 이스케이프 필요).

## 사용 방법

```powershell
# 프로젝트 루트에서 — JDK 관련 환경변수 설정 불필요
.\gradlew.bat bootRun
```

## 다른 PC에서 이 템플릿을 받았을 때

`gradle.properties`의 경로는 **개발 PC마다 다르다.** 본인 환경에 맞게 한 가지를 선택한다:

1. **경로 수정**: `org.gradle.java.home`을 본인 PC의 JDK 17 설치 경로로 변경
2. **줄 삭제**: 시스템 `JAVA_HOME`이 이미 JDK 17 이상이라면 해당 줄을 삭제해도 됨
3. **개인 설정으로 이동(권장)**: 저장소 파일을 건드리지 않으려면 `%USERPROFILE%\.gradle\gradle.properties`(사용자 전역 설정)에 같은 줄을 넣고 프로젝트 `gradle.properties`에서는 제거
   - 우선순위: 프로젝트 `gradle.properties` > 사용자 전역 `gradle.properties`

## 이 PC의 JDK 위치 (참고)

JDK는 `D:\dev\java\` 에 버전별로 설치되어 있다:

| 경로 | 버전 | 비고 |
|------|------|------|
| `D:\dev\java\jdk-17.0.6` | 17.0.6 | **현재 프로젝트 사용** |
| `D:\dev\java\jdk-17.0.5` | 17.0.5 | |
| `D:\dev\java\jdk-21.0.9+10` | 21 | Spring Boot 3.2와 호환 |
| `D:\dev\java\jdk1.8.0_202` | 1.8 | 시스템 `JAVA_HOME` (이 프로젝트에 사용 불가) |

## 설정 검증

```powershell
# 시스템 JAVA_HOME과 무관하게 BUILD SUCCESSFUL 이 나오면 정상
.\gradlew.bat clean compileJava
```

> 검증 이력: 시스템 `JAVA_HOME=D:\dev\java\jdk1.8.0_202` 상태에서 `clean compileJava` 성공 확인 (2026-06-07). Java 17 소스는 JDK 1.8로 컴파일이 불가능하므로 gradle.properties의 JDK가 사용되었음이 보장된다.
