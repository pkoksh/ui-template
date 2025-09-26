package com.worksystem.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 그룹 메뉴 권한 DTO
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GroupMenuPermissionDTO {
    
    private Long id;
    private String groupId;
    private String menuId;
    private String title;
    private String url;
    
    @Builder.Default
    private Boolean canRead = false;
    
    @Builder.Default
    private Boolean canWrite = false;
    
    @Builder.Default
    private Boolean canDelete = false;
    
    @Builder.Default
    private Boolean canAdmin = false;
}
