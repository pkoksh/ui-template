-- 업무시스템 데이터베이스 생성 스크립트
drop database if exists worksystem;
drop user if exists 'worksystem'@'localhost';
-- 데이터베이스 생성
CREATE DATABASE IF NOT EXISTS worksystem 
DEFAULT CHARACTER SET utf8mb4 
DEFAULT COLLATE utf8mb4_unicode_ci;

-- 사용자 생성
CREATE USER IF NOT EXISTS 'worksystem'@'localhost' IDENTIFIED BY 'worksystem123';
GRANT ALL PRIVILEGES ON worksystem.* TO 'worksystem'@'localhost';
FLUSH PRIVILEGES;

-- 데이터베이스 선택
USE worksystem;

-- 사용자 테이블
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    department VARCHAR(50),
    group_id VARCHAR(20) NOT NULL DEFAULT 'USER',
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP NULL,
    INDEX idx_user_id (user_id),
    INDEX idx_department (department),
    INDEX idx_group_id (group_id)
);

-- 초기 사용자 데이터 (BCrypt 암호화된 비밀번호)
-- admin123 -> $2a$10$X1k9Cil3JAS/2rTo7AQY2ujmbf9hMlFp4yvIKxxgF1IpBftB/603K
-- user123 -> $2a$10$CQCJQuzIytFGwGYoA19XuODNWuXBbZgVDMXdd3jow8AdDXdZAsrKq  
-- manager123 -> $2a$10$GUopFmBvZ0gCNQMLWTrTM.rtuIorSAdCVTXBCP3sDKiYsrCSCegXq
INSERT INTO users (user_id, password, name, email, department, group_id, is_active) VALUES
('admin', '$2a$10$X1k9Cil3JAS/2rTo7AQY2ujmbf9hMlFp4yvIKxxgF1IpBftB/603K', '관리자', 'admin@worksystem.com', '시스템관리부', 'ADMIN', TRUE),
('user1', '$2a$10$CQCJQuzIytFGwGYoA19XuODNWuXBbZgVDMXdd3jow8AdDXdZAsrKq', '김직원', 'user1@worksystem.com', '영업부', 'USER', TRUE),
('manager', '$2a$10$GUopFmBvZ0gCNQMLWTrTM.rtuIorSAdCVTXBCP3sDKiYsrCSCegXq', '이팀장', 'manager@worksystem.com', '기획부', 'MANAGER', TRUE);

-- 메뉴 테이블
CREATE TABLE menus (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    menu_id VARCHAR(50) NOT NULL UNIQUE,
    parent_id VARCHAR(50),
    title VARCHAR(100) NOT NULL,
    url VARCHAR(200),
    icon VARCHAR(50),
    sort_order INT DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    required_group VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_parent_id (parent_id),
    INDEX idx_sort_order (sort_order)
);


-- 메뉴 데이터
INSERT INTO menus (menu_id, parent_id, title, url, icon, sort_order, required_group) VALUES
-- 대시보드
('dashboard', NULL, '대시보드', '/dashboard', 'bx-home', 1, NULL),

-- 업무 관리
('work', NULL, '업무 관리', NULL, 'bx-briefcase', 2, NULL),
('tasks', 'work', '업무 목록', '/tasks', 'bx-task', 1, NULL),
('task-my', 'work', '내 업무', '/task-my', 'bx-user-check', 2, NULL),
('task-calendar', 'work', '업무 캘린더', '/task-calendar', 'bx-calendar', 3, NULL),
('task-timeline', 'work', '타임라인', '/task-timeline', 'bx-time', 4, NULL),

-- 프로젝트 관리
('project', NULL, '프로젝트 관리', NULL, 'bx-folder', 3, NULL),
('projects', 'project', '프로젝트 목록', '/projects', 'bx-folder-open', 1, NULL),
('project-new', 'project', '새 프로젝트', '/project-new', 'bx-plus-circle', 2, 'MANAGER'),
('project-templates', 'project', '프로젝트 템플릿', '/project-templates', 'bx-copy', 3, 'MANAGER'),
('project-archive', 'project', '완료된 프로젝트', '/project-archive', 'bx-archive', 4, NULL),

-- 보고서
('reports', NULL, '보고서', '/reports', 'bx-bar-chart', 4, NULL),

-- 시스템 관리
('system', NULL, '시스템 관리', NULL, 'bx-cog', 5, 'ADMIN'),
('menu-management', 'system', '메뉴 관리', '/menu-management', 'bx-menu', 1, 'ADMIN'),
('user-management', 'system', '사용자 관리', '/user-management', 'bx-user', 1, 'ADMIN'),
('group-management', 'system', '그룹 관리', '/group-management', 'bx-group', 1, 'ADMIN'),

-- 설정
('settings', NULL, '설정', '/settings', 'bx-cog', 6, 'ADMIN');



-- 그룹 테이블
CREATE TABLE user_groups (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    group_id VARCHAR(20) NOT NULL UNIQUE,
    group_name VARCHAR(100) NOT NULL,
    description TEXT,
    level INT NOT NULL DEFAULT 1 COMMENT '권한 레벨 (1: 낮음, 10: 높음)',
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_group_id (group_id),
    INDEX idx_level (level)
) COMMENT='사용자 그룹 정보';

-- 그룹-메뉴 권한 매핑 테이블
CREATE TABLE group_menu_permissions (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    group_id VARCHAR(20) NOT NULL,
    menu_id VARCHAR(50) NOT NULL,
    can_read BOOLEAN NOT NULL DEFAULT TRUE,
    can_write BOOLEAN NOT NULL DEFAULT FALSE,
    can_delete BOOLEAN NOT NULL DEFAULT FALSE,
    can_admin BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uk_group_menu (group_id, menu_id),
    INDEX idx_group_id (group_id),
    INDEX idx_menu_id (menu_id),
    FOREIGN KEY (group_id) REFERENCES user_groups(group_id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (menu_id) REFERENCES menus(menu_id) ON UPDATE CASCADE ON DELETE CASCADE
) COMMENT='그룹별 메뉴 접근 권한';

-- 기본 그룹 데이터 삽입
INSERT INTO user_groups (group_id, group_name, description, level) VALUES
('SUPER_ADMIN', '슈퍼관리자', '시스템 전체 관리 권한', 10),
('ADMIN', '관리자', '시스템 관리 권한', 8),
('MANAGER', '매니저', '부서 관리 권한', 6),
('LEADER', '팀장', '팀 관리 권한', 4),
('USER', '일반사용자', '기본 사용자 권한', 1),
('GUEST', '게스트', '제한적 조회 권한', 0);



-- 기존 users 테이블에 외래키 제약조건 추가 (선택사항)
ALTER TABLE users 
ADD CONSTRAINT fk_users_group 
FOREIGN KEY (group_id) REFERENCES user_groups(group_id) ON UPDATE CASCADE;
-- 기존 menus 테이블의 required_group을 그룹 시스템에 맞게 수정하는 경우 (선택사항)
ALTER TABLE menus 
ADD CONSTRAINT fk_menus_required_group 
FOREIGN KEY (required_group) REFERENCES user_groups(group_id) ON UPDATE CASCADE;





-- 세션 테이블 (Spring Session 사용시)
CREATE TABLE SPRING_SESSION (
    PRIMARY_ID CHAR(36) NOT NULL,
    SESSION_ID CHAR(36) NOT NULL,
    CREATION_TIME BIGINT NOT NULL,
    LAST_ACCESS_TIME BIGINT NOT NULL,
    MAX_INACTIVE_INTERVAL INT NOT NULL,
    EXPIRY_TIME BIGINT NOT NULL,
    PRINCIPAL_NAME VARCHAR(100),
    CONSTRAINT SPRING_SESSION_PK PRIMARY KEY (PRIMARY_ID)
);

CREATE UNIQUE INDEX SPRING_SESSION_IX1 ON SPRING_SESSION (SESSION_ID);
CREATE INDEX SPRING_SESSION_IX2 ON SPRING_SESSION (EXPIRY_TIME);
CREATE INDEX SPRING_SESSION_IX3 ON SPRING_SESSION (PRINCIPAL_NAME);

CREATE TABLE SPRING_SESSION_ATTRIBUTES (
    SESSION_PRIMARY_ID CHAR(36) NOT NULL,
    ATTRIBUTE_NAME VARCHAR(200) NOT NULL,
    ATTRIBUTE_BYTES BLOB NOT NULL,
    CONSTRAINT SPRING_SESSION_ATTRIBUTES_PK PRIMARY KEY (SESSION_PRIMARY_ID, ATTRIBUTE_NAME),
    CONSTRAINT SPRING_SESSION_ATTRIBUTES_FK FOREIGN KEY (SESSION_PRIMARY_ID) REFERENCES SPRING_SESSION(PRIMARY_ID) ON DELETE CASCADE
);
