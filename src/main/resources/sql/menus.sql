-- 메뉴 테이블 생성
CREATE TABLE IF NOT EXISTS menus (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    menu_id VARCHAR(50) NOT NULL UNIQUE,
    title VARCHAR(100) NOT NULL,
    path VARCHAR(200),
    icon VARCHAR(50),
    parent_id BIGINT,
    sort_order INT NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    description VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_parent_id (parent_id),
    INDEX idx_sort_order (sort_order),
    INDEX idx_is_active (is_active)
);

-- 기존 메뉴 데이터 삽입
INSERT INTO menus (menu_id, title, path, icon, parent_id, sort_order, is_active, description) VALUES
-- 최상위 메뉴들
('dashboard', '대시보드', 'pages/dashboard.html', 'bx-tachometer', NULL, 1, TRUE, '시스템 전체 현황을 확인할 수 있는 대시보드'),
('project-group', '프로젝트 관리', NULL, 'bx-folder', NULL, 2, TRUE, '프로젝트 관련 모든 기능을 관리'),
('task-group', '업무 관리', NULL, 'bx-task', NULL, 3, TRUE, '업무 및 태스크 관련 기능을 관리'),
('reports', '보고서', 'pages/reports.html', 'bx-bar-chart-alt-2', NULL, 4, TRUE, '각종 보고서 및 통계 정보'),
('settings', '설정', 'pages/settings.html', 'bx-cog', NULL, 5, TRUE, '시스템 설정 및 환경 관리');

-- 프로젝트 관리 하위 메뉴들
INSERT INTO menus (menu_id, title, path, icon, parent_id, sort_order, is_active, description) VALUES
('projects', '프로젝트 목록', 'pages/projects.html', NULL, (SELECT id FROM (SELECT id FROM menus WHERE menu_id = 'project-group') AS temp), 1, TRUE, '모든 프로젝트 목록 조회'),
('project-new', '새 프로젝트', 'pages/project-new.html', NULL, (SELECT id FROM (SELECT id FROM menus WHERE menu_id = 'project-group') AS temp), 2, TRUE, '새로운 프로젝트 생성'),
('project-templates', '프로젝트 템플릿', 'pages/project-templates.html', NULL, (SELECT id FROM (SELECT id FROM menus WHERE menu_id = 'project-group') AS temp), 3, TRUE, '프로젝트 템플릿 관리'),
('project-archive', '보관된 프로젝트', 'pages/project-archive.html', NULL, (SELECT id FROM (SELECT id FROM menus WHERE menu_id = 'project-group') AS temp), 4, TRUE, '완료되거나 보관된 프로젝트');

-- 업무 관리 하위 메뉴들
INSERT INTO menus (menu_id, title, path, icon, parent_id, sort_order, is_active, description) VALUES
('tasks', '업무 보드', 'pages/tasks.html', NULL, (SELECT id FROM (SELECT id FROM menus WHERE menu_id = 'task-group') AS temp), 1, TRUE, '칸반 보드 스타일의 업무 관리'),
('task-calendar', '업무 달력', 'pages/task-calendar.html', NULL, (SELECT id FROM (SELECT id FROM menus WHERE menu_id = 'task-group') AS temp), 2, TRUE, '달력 형태의 업무 일정 관리'),
('task-timeline', '타임라인', 'pages/task-timeline.html', NULL, (SELECT id FROM (SELECT id FROM menus WHERE menu_id = 'task-group') AS temp), 3, TRUE, '업무 진행 상황 타임라인'),
('task-my', '내 업무', 'pages/task-my.html', NULL, (SELECT id FROM (SELECT id FROM menus WHERE menu_id = 'task-group') AS temp), 4, TRUE, '개인 업무 목록 및 관리');
