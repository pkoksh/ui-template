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
-- 1. 사용자 테이블 (group_id 제거)
CREATE TABLE users (
    user_seq BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    department VARCHAR(50),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login_at TIMESTAMP NULL,
    INDEX idx_user_id (user_id)
);

-- 2. 그룹 테이블 (단순화)
CREATE TABLE user_groups (
    group_seq BIGINT AUTO_INCREMENT PRIMARY KEY,
    group_id VARCHAR(20) NOT NULL UNIQUE,
    group_name VARCHAR(50) NOT NULL,
    description VARCHAR(200),
    level INT DEFAULT 1,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_group_id (group_id)
);

-- 3. 메뉴 테이블 (단순화)
CREATE TABLE menus (
    menu_seq BIGINT AUTO_INCREMENT PRIMARY KEY,
    menu_id VARCHAR(50) NOT NULL UNIQUE,
    parent_id VARCHAR(50),
    title VARCHAR(100) NOT NULL,
    url VARCHAR(200),
    icon VARCHAR(50),
    sort_order INT DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_parent_id (parent_id),
    INDEX idx_sort_order (sort_order)
);

-- 4. 사용자-그룹 매핑 (M:N - 단순화)
CREATE TABLE user_group_mappings (
    user_id VARCHAR(20) NOT NULL,
    group_id VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    PRIMARY KEY (user_id, group_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (group_id) REFERENCES user_groups(group_id) ON DELETE CASCADE
);

-- 5. 그룹-메뉴 권한 (M:N - 세분화)
CREATE TABLE group_menu_permissions (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    group_id VARCHAR(20) NOT NULL,
    menu_id VARCHAR(50) NOT NULL,
    can_read BOOLEAN NOT NULL DEFAULT FALSE,
    can_write BOOLEAN NOT NULL DEFAULT FALSE,
    can_delete BOOLEAN NOT NULL DEFAULT FALSE,
    can_admin BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    UNIQUE KEY uk_group_menu (group_id, menu_id),
    FOREIGN KEY (group_id) REFERENCES user_groups(group_id) ON DELETE CASCADE,
    FOREIGN KEY (menu_id) REFERENCES menus(menu_id) ON DELETE CASCADE
);

-- 6. 기본 데이터 삽입
-- 사용자
INSERT INTO users (user_id, password, name, email, department) VALUES
('admin', '$2a$10$X1k9Cil3JAS/2rTo7AQY2ujmbf9hMlFp4yvIKxxgF1IpBftB/603K', '관리자', 'admin@worksystem.com', '시스템관리부'),
('user1', '$2a$10$CQCJQuzIytFGwGYoA19XuODNWuXBbZgVDMXdd3jow8AdDXdZAsrKq', '김직원', 'user1@worksystem.com', '영업부'),
('manager', '$2a$10$GUopFmBvZ0gCNQMLWTrTM.rtuIorSAdCVTXBCP3sDKiYsrCSCegXq', '이팀장', 'manager@worksystem.com', '기획부');

-- 그룹
INSERT INTO user_groups (group_id, group_name, description, level) VALUES
('ADMIN', '관리자', '시스템 관리 권한', 10),
('MANAGER', '매니저', '부서 관리 권한', 6),
('USER', '일반사용자', '기본 사용자 권한', 1);

-- 메뉴
INSERT INTO menus (menu_id, parent_id, title, url, icon, sort_order) VALUES
('dashboard', NULL, '대시보드', '/dashboard', 'bx-home', 1),
('system', NULL, '시스템 관리', NULL, 'bx-cog', 5),
('user-management', 'system', '사용자 관리', '/user-management', 'bx-user', 1),
('menu-management', 'system', '메뉴 관리', '/menu-management', 'bx-menu', 2),
('group-management', 'system', '그룹 관리', '/group-management', 'bx-group', 3);
-- 사용자-그룹 매핑
INSERT INTO user_group_mappings (user_id, group_id) VALUES
('admin', 'ADMIN'),
('user1', 'USER'),
('manager', 'MANAGER'),
('manager', 'USER');  -- manager는 MANAGER와 USER 권한 모두 보유

-- 그룹-메뉴 권한
INSERT INTO group_menu_permissions (group_id, menu_id, can_read, can_write, can_delete, can_admin) VALUES
-- ADMIN: 모든 메뉴 접근 (모든 권한)
('ADMIN', 'dashboard', TRUE, TRUE, TRUE, TRUE),
('ADMIN', 'system', TRUE, TRUE, TRUE, TRUE),
('ADMIN', 'user-management', TRUE, TRUE, TRUE, TRUE),
('ADMIN', 'menu-management', TRUE, TRUE, TRUE, TRUE),
('ADMIN', 'group-management', TRUE, TRUE, TRUE, TRUE),

-- MANAGER: 대시보드 접근 (읽기/쓰기만)
('MANAGER', 'dashboard', TRUE, TRUE, FALSE, FALSE),

-- USER: 대시보드만 접근 (읽기만)
('USER', 'dashboard', TRUE, FALSE, FALSE, FALSE);

-- 7. 사용자별 접근 가능한 메뉴 조회 뷰
CREATE VIEW v_user_menus AS
SELECT DISTINCT
    u.user_id,
    u.name as user_name,
    m.menu_id,
    m.title,
    m.url,
    m.parent_id,
    m.icon,
    m.sort_order
FROM users u
JOIN user_group_mappings ugm ON u.user_id = ugm.user_id
JOIN group_menu_permissions gmp ON ugm.group_id = gmp.group_id
JOIN menus m ON gmp.menu_id = m.menu_id
WHERE u.is_active = TRUE 
  AND m.is_active = TRUE
ORDER BY u.user_id, m.sort_order;

-- 8. 사용자별 그룹 조회 뷰
CREATE VIEW v_user_groups AS
SELECT 
    u.user_id,
    u.name as user_name,
    ug.group_id,
    ug.group_name
FROM users u
JOIN user_group_mappings ugm ON u.user_id = ugm.user_id
JOIN user_groups ug ON ugm.group_id = ug.group_id
WHERE u.is_active = TRUE 
  AND ug.is_active = TRUE;

-- 9. 사용 예제 쿼리들

-- 특정 사용자의 모든 그룹 조회
-- SELECT * FROM v_user_groups WHERE user_id = 'manager';

-- 특정 사용자가 접근 가능한 모든 메뉴 조회
-- SELECT * FROM v_user_menus WHERE user_id = 'manager';

-- 특정 사용자가 특정 메뉴에 접근 가능한지 확인
-- SELECT COUNT(*) as has_access 
-- FROM v_user_menus 
-- WHERE user_id = 'user1' AND menu_id = 'user-management';

-- 사용자에게 새 그룹 권한 부여
-- INSERT INTO user_group_mappings (user_id, group_id) VALUES ('user1', 'MANAGER');

-- 그룹에 새 메뉴 권한 부여
-- INSERT INTO group_menu_permissions (group_id, menu_id) VALUES ('USER', 'reports');











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
