package com.worksystem.util;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.worksystem.entity.Group;
import com.worksystem.service.CommonCodeService;
import com.worksystem.service.GroupService;

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
     */
    public Map<String, Object> getCommonCodeEnum(String groupCode) {
        return commonCodeService.getEnum(groupCode);
    }
}
