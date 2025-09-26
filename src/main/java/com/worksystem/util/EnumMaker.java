package com.worksystem.util;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.worksystem.entity.Group;
import com.worksystem.service.GroupService;

@Component
public class EnumMaker {

    @Autowired
    private GroupService groupService;

    public Map<String, Object> getGroupEnum() {
        List<Group> groupList = groupService.getAllGroups();
        
        return Map.of(
            "code", groupList.stream().map(Group::getGroupId).collect(Collectors.toList()),
            "text", groupList.stream().map(Group::getGroupName).collect(Collectors.toList())
        );
    }
}
