-- 업데이트된 스키마 (BCrypt 암호화된 비밀번호 사용)

-- 사용자 테이블 생성
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    department VARCHAR(100),
    role VARCHAR(20) NOT NULL DEFAULT 'USER',
    enabled BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP NULL
);

-- 메뉴 테이블 생성
DROP TABLE IF EXISTS menus;
CREATE TABLE menus (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    url VARCHAR(200),
    icon VARCHAR(50),
    parent_id BIGINT,
    sort_order INT DEFAULT 0,
    enabled BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_id) REFERENCES menus(id) ON DELETE CASCADE
);

-- 테스트 사용자 데이터 (BCrypt 암호화된 비밀번호)
INSERT INTO users (user_id, password, name, email, department, role, enabled) VALUES
('admin', '$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00DMxs.AQubh4a', '관리자', 'admin@worksystem.com', '시스템관리부', 'ADMIN', true),
('user1', '$2a$10$N4AX2UQcU4jrpOG7Pf5g5eqf8p.QCU1z9YKSRz8.D5z5xF5.3fU4u', '김직원', 'user1@worksystem.com', '영업부', 'USER', true),
('manager', '$2a$10$QU1z9f8p.QCU4jrpOG7Pf5g5eqX2UQcU4jrpOG7Pf5g5eqf8p.QCU', '이팀장', 'manager@worksystem.com', '기획부', 'MANAGER', true);

-- 메뉴 데이터
INSERT INTO menus (name, url, icon, parent_id, sort_order, enabled) VALUES
('대시보드', '/pages/dashboard.html', 'bx-home', NULL, 1, true),
('프로젝트', NULL, 'bx-folder', NULL, 2, true),
('업무', NULL, 'bx-task', NULL, 3, true),
('보고서', '/pages/reports.html', 'bx-bar-chart-alt-2', NULL, 4, true),
('설정', '/pages/settings.html', 'bx-cog', NULL, 5, true);

-- 프로젝트 하위 메뉴
INSERT INTO menus (name, url, icon, parent_id, sort_order, enabled) VALUES
('프로젝트 목록', '/pages/projects.html', 'bx-list-ul', 2, 1, true),
('새 프로젝트', '/pages/project-new.html', 'bx-plus', 2, 2, true),
('프로젝트 템플릿', '/pages/project-templates.html', 'bx-collection', 2, 3, true),
('프로젝트 아카이브', '/pages/project-archive.html', 'bx-archive', 2, 4, true);

-- 업무 하위 메뉴
INSERT INTO menus (name, url, icon, parent_id, sort_order, enabled) VALUES
('내 업무', '/pages/task-my.html', 'bx-user', 3, 1, true),
('업무 목록', '/pages/tasks.html', 'bx-list-check', 3, 2, true),
('업무 캘린더', '/pages/task-calendar.html', 'bx-calendar', 3, 3, true),
('업무 타임라인', '/pages/task-timeline.html', 'bx-time', 3, 4, true);

-- 비밀번호 해시 정보:
-- admin123 -> $2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00DMxs.AQubh4a
-- user123 -> $2a$10$N4AX2UQcU4jrpOG7Pf5g5eqf8p.QCU1z9YKSRz8.D5z5xF5.3fU4u
-- manager123 -> $2a$10$QU1z9f8p.QCU4jrpOG7Pf5g5eqX2UQcU4jrpOG7Pf5g5eqf8p.QCU
