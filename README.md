# 업무시스템 Backend

SpringBoot 3 기반의 업무관리 시스템 백엔드입니다.

## 🚀 기술 스택

- **Framework**: Spring Boot 3.2.0
- **Security**: Spring Security 6 (세션 기반)
- **Template Engine**: Thymeleaf
- **Database**: MySQL 8.0
- **ORM**: MyBatis
- **Build Tool**: Gradle 8.5
- **Java Version**: 17

## 📁 프로젝트 구조

```
/
├── src/main/java/com/worksystem/
│   ├── WorkSystemApplication.java          # 메인 애플리케이션
│   ├── config/                            # 설정 클래스들
│   │   ├── SecurityConfig.java            # Spring Security 설정
│   │   ├── MyBatisConfig.java             # MyBatis 설정
│   │   ├── WebConfig.java                 # Web MVC 설정
│   │   ├── CustomAuthenticationSuccessHandler.java
│   │   └── CustomAuthenticationFailureHandler.java
│   ├── controller/                        # 컨트롤러
│   │   └── MainController.java
│   ├── service/                           # 서비스 레이어
│   │   └── UserService.java
│   ├── mapper/                            # MyBatis 매퍼 인터페이스
│   │   └── UserMapper.java
│   ├── entity/                            # 엔터티 클래스
│   │   └── User.java
│   └── dto/                               # DTO 클래스
│       └── UserDTO.java
├── src/main/resources/
│   ├── application.properties             # 애플리케이션 설정
│   ├── schema.sql                         # 데이터베이스 스키마
│   ├── static/                           # 정적 리소스 (프론트엔드)
│   ├── templates/                        # Thymeleaf 템플릿
│   └── mybatis/mapper/                   # MyBatis XML 매퍼
│       └── UserMapper.xml
└── build.gradle                          # Gradle 빌드 설정
```

## 🔧 설치 및 실행

### 1. 사전 요구사항
- Java 17 이상
- MySQL 8.0 이상
- Gradle 8.5 이상

### 2. 데이터베이스 설정

MySQL에 데이터베이스와 사용자를 생성합니다:

```sql
-- schema.sql 파일 실행
mysql -u root -p < src/main/resources/schema.sql
```

### 3. 애플리케이션 설정

`src/main/resources/application.properties` 파일에서 데이터베이스 연결 정보를 확인/수정합니다:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/worksystem?useSSL=false&useUnicode=true&characterEncoding=utf8&allowPublicKeyRetrieval=true&serverTimezone=Asia/Seoul
spring.datasource.username=worksystem
spring.datasource.password=worksystem123
```

### 4. 애플리케이션 실행

```bash
# Gradle로 실행
./gradlew bootRun

```

### 5. 접속 확인

브라우저에서 `http://localhost:8080`에 접속합니다.

## 👤 기본 계정

| 계정 | 비밀번호 | 역할 | 부서 |
|------|----------|------|------|
| admin | admin123 | 관리자 | 시스템관리부 |
| user1 | user123 | 사용자 | 영업부 |
| manager | manager123 | 팀장 | 기획부 |

## 🔐 보안 설정

- **인증 방식**: 세션 기반 인증
- **비밀번호 암호화**: BCrypt
- **세션 관리**: HttpSession 사용
- **CSRF 보호**: API 요청 제외하고 활성화
- **권한 관리**: 역할 기반 접근 제어 (RBAC)

## 📡 API 엔드포인트

### 인증 관련
- `POST /api/auth/login` - 로그인
- `POST /api/auth/logout` - 로그아웃

### 사용자 관련
- `GET /api/user/current` - 현재 사용자 정보 조회

### 시스템 관련
- `GET /api/system/status` - 시스템 상태 조회

## 🗄️ 데이터베이스 스키마

- \ui-template\src\main\resources\schema.sql 파일 참고

## 🛠️ 개발 환경

### 개발 도구
- **IDE**: VS Code
- **Database Tool**: MySQL Workbench

### 로깅
- 개발 환경에서는 DEBUG 레벨 로깅 활성화
- MyBatis SQL 쿼리 로깅 활성화
- Spring Security 디버그 모드 활성화

## 📝 추가 구현 예정

- [ ] JWT 토큰 기반 API 인증 (옵션)
- [ ] Redis 세션 스토어 연동
- [ ] 메뉴 관리 기능
- [ ] 사용자 관리 기능
- [ ] 업무/프로젝트 관리 기능
- [ ] 파일 업로드 기능
- [ ] 이메일 알림 기능

## 🔍 문제 해결

### 1. 데이터베이스 연결 오류
- MySQL 서비스가 실행 중인지 확인
- 데이터베이스와 사용자가 올바르게 생성되었는지 확인
- 방화벽 설정 확인

### 2. 로그인 실패
- 데이터베이스에 사용자 데이터가 올바르게 입력되었는지 확인
- 비밀번호가 BCrypt로 암호화되어 있는지 확인

### 3. 정적 리소스 로딩 실패
- 프론트엔드 파일들이 `src/main/resources/static/` 경로에 있는지 확인
- WebConfig 설정이 올바른지 확인

## 📞 지원

문제가 발생하거나 질문이 있으시면 개발팀에 문의해주세요.

---

© 2025 업무시스템. All rights reserved.
