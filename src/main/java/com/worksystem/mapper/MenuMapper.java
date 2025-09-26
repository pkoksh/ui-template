package com.worksystem.mapper;

import com.worksystem.dto.MenuDTO;
import com.worksystem.entity.Menu;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface MenuMapper {

    List<Menu> findAllByOrderBySortOrderAsc();
    
    List<Menu> findByNameOrUrl(@Param("name") String name, @Param("url") String url);

    List<Menu> findByEnabledTrueOrderBySortOrderAsc();

    Optional<Menu> findById(@Param("id") Long id);

    Menu findByMenuId(@Param("menuId") String menuId);

    void insert(Menu menu);

    void update(Menu menu);

    void deleteById(@Param("id") Long id);

    /**
     * 사용자 권한에 따른 접근 가능한 메뉴 조회
     */
    List<Menu> findAccessibleMenusByUserId(@Param("userId") String userId);

    /**
     * 특정 메뉴에 대한 사용자 접근 권한 확인
     */
    int checkUserMenuAccess(@Param("userId") String userId, @Param("menuId") String menuId);

    /**
     * 사용자의 특정 메뉴 권한 상세 조회
     */
    MenuDTO findMenuPermissionsByUserAndMenu(@Param("userId") String userId, @Param("menuId") String menuId);
}