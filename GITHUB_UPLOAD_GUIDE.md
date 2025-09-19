# 🚀 GitHub 업로드 가이드

## 현재 상태 확인
```bash
cd "d:\repository\ui-template"
git status
```

## 변경사항 추가
```bash
# 모든 변경사항 스테이징
git add .

# 또는 선택적으로 추가
git add .gitignore
git add /src/main/java/...
git add README.md
```

## 삭제된 파일들 정리
```bash
# 삭제된 파일들을 Git에서도 제거
git add -u
```

## 커밋 생성
```bash
git commit -m "feat: Full-stack business system with Spring Boot

- Add Spring Boot 3.2.0 with Spring Security 6
- Implement BCrypt password encryption
- Add MySQL integration with MyBatis
- Create session-based authentication with Remember-Me
- Add professional login UI with SweetAlert2
- Implement LRU cache and tab management
- Configure comprehensive .gitignore files
- Update README with installation guide"
```

## GitHub에 푸시
```bash
git push origin main
```

## 🎉 업로드 완료!

### 접속 방법:
1. **GitHub Repository**: https://github.com/pkoksh/ui-template
2. **Clone Command**: `git clone https://github.com/pkoksh/ui-template.git`

### 추천 다음 단계:
1. **GitHub Pages 설정** (프론트엔드만)
2. **Release 태그 생성** (v1.0.0)
3. **Issues/Discussions 활성화**
4. **CI/CD 파이프라인 구축**
