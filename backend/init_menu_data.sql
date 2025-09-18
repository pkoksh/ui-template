-- 메뉴 테이블 기본 데이터 삽입

-- 최상위 메뉴들
INSERT INTO menus (menu_id, title, parent_id, url, icon, sort_order, enabled, required_role, description) VALUES
('dashboard', '대시보드', NULL, '/dashboard', 'bx-tachometer', 1, true, 'USER', '시스템 대시보드'),
('projects', '프로젝트 관리', NULL, NULL, 'bx-folder', 2, true, 'USER', '프로젝트 관리 메뉴'),
('tasks', '업무 관리', NULL, NULL, 'bx-task', 3, true, 'USER', '업무 관리 메뉴'),
('reports', '보고서', NULL, '/reports', 'bx-line-chart', 4, true, 'USER', '보고서 메뉴'),
('system', '시스템 관리', NULL, NULL, 'bx-cog', 5, true, 'ADMIN', '시스템 관리 메뉴'),
('settings', '설정', NULL, '/settings', 'bx-cog', 6, true, 'USER', '설정 메뉴');

-- 프로젝트 관리 하위 메뉴
INSERT INTO menus (menu_id, title, parent_id, url, icon, sort_order, enabled, required_role, description) VALUES
('project-new', '새 프로젝트', 'projects', '/project-new', 'bx-plus', 21, true, 'USER', '새 프로젝트 생성'),
('project-templates', '프로젝트 템플릿', 'projects', '/project-templates', 'bx-bookmark', 22, true, 'USER', '프로젝트 템플릿 관리'),
('project-archive', '프로젝트 아카이브', 'projects', '/project-archive', 'bx-archive', 23, true, 'USER', '완료된 프로젝트 아카이브');

-- 업무 관리 하위 메뉴
INSERT INTO menus (menu_id, title, parent_id, url, icon, sort_order, enabled, required_role, description) VALUES
('task-my', '내 업무', 'tasks', '/task-my', 'bx-user', 31, true, 'USER', '내가 담당한 업무'),
('task-calendar', '업무 캘린더', 'tasks', '/task-calendar', 'bx-calendar', 32, true, 'USER', '업무 일정 캘린더'),
('task-timeline', '업무 타임라인', 'tasks', '/task-timeline', 'bx-time', 33, true, 'USER', '업무 진행 타임라인');

-- 시스템 관리 하위 메뉴
INSERT INTO menus (menu_id, title, parent_id, url, icon, sort_order, enabled, required_role, description) VALUES
('menu-management', '메뉴 관리', 'system', '/menu-management', 'bx-menu', 51, true, 'ADMIN', '시스템 메뉴 관리');
