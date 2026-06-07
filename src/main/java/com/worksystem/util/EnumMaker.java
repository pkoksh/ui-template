package com.worksystem.util;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.worksystem.entity.Group;
import com.worksystem.service.CommonCodeService;
import com.worksystem.service.GroupService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class EnumMaker {

    @Autowired
    private GroupService groupService;

    @Autowired
    private CommonCodeService commonCodeService;

    public Map<String, Object> getGroupEnum() {
        List<Group> groupList = groupService.getAllGroups();

        return Map.of(
            "code", groupList.stream().map(Group::getGroupId).collect(Collectors.toList()),
            "text", groupList.stream().map(Group::getGroupName).collect(Collectors.toList())
        );
    }

    /**
     * 공통코드 그룹의 활성 코드를 IBSheet Enum 형식({code:[], text:[]})으로 반환.
     * MainController에서 model.addAttribute(...)로 화면에 주입하는 용도 (getGroupEnum과 동일 경로).
     *
     * 그룹이 없어도 빈 enum으로 폴백한다 — 페이지 컨트롤러(@Controller)는 GlobalExceptionHandler
     * 대상이 아니라서 예외가 그대로 500 에러 페이지가 되기 때문 (선택지만 비는 소프트 저하가 옳다).
     */
    public Map<String, Object> getCommonCodeEnum(String groupCode) {
        try {
            return commonCodeService.getEnum(groupCode);
        } catch (Exception e) {
            log.warn("공통코드 그룹 조회 실패 — 빈 enum으로 폴백: {} ({})", groupCode, e.getMessage());
            return Map.of("code", List.of(), "text", List.of());
        }
    }
}
