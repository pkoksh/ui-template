package com.worksystem.repository;

import com.worksystem.entity.Menu;
import org.apache.ibatis.annotations.*;

import java.util.List;
import java.util.Optional;

@Mapper
public interface MenuRepository {

    @Select("SELECT * FROM menus ORDER BY sort_order ASC")
    @Results({
        @Result(property = "id", column = "id"),
        @Result(property = "menuId", column = "menu_id"),
        @Result(property = "parentId", column = "parent_id"),
        @Result(property = "title", column = "title"),
        @Result(property = "url", column = "url"),
        @Result(property = "icon", column = "icon"),
        @Result(property = "sortOrder", column = "sort_order"),
        @Result(property = "enabled", column = "enabled"),
        @Result(property = "requiredRole", column = "required_role"),
        @Result(property = "description", column = "description")
    })
    List<Menu> findAllByOrderBySortOrderAsc();

    @Select("SELECT * FROM menus WHERE enabled = true ORDER BY sort_order ASC")
    @Results({
        @Result(property = "id", column = "id"),
        @Result(property = "menuId", column = "menu_id"),
        @Result(property = "parentId", column = "parent_id"),
        @Result(property = "title", column = "title"),
        @Result(property = "url", column = "url"),
        @Result(property = "icon", column = "icon"),
        @Result(property = "sortOrder", column = "sort_order"),
        @Result(property = "enabled", column = "enabled"),
        @Result(property = "requiredRole", column = "required_role"),
        @Result(property = "description", column = "description")
    })
    List<Menu> findByEnabledTrueOrderBySortOrderAsc();

    @Select("SELECT * FROM menus WHERE id = #{id}")
    @Results({
        @Result(property = "id", column = "id"),
        @Result(property = "menuId", column = "menu_id"),
        @Result(property = "parentId", column = "parent_id"),
        @Result(property = "title", column = "title"),
        @Result(property = "url", column = "url"),
        @Result(property = "icon", column = "icon"),
        @Result(property = "sortOrder", column = "sort_order"),
        @Result(property = "enabled", column = "enabled"),
        @Result(property = "requiredRole", column = "required_role"),
        @Result(property = "description", column = "description")
    })
    Optional<Menu> findById(@Param("id") Long id);

    @Select("SELECT * FROM menus WHERE menu_id = #{menuId}")
    @Results({
        @Result(property = "id", column = "id"),
        @Result(property = "menuId", column = "menu_id"),
        @Result(property = "parentId", column = "parent_id"),
        @Result(property = "title", column = "title"),
        @Result(property = "url", column = "url"),
        @Result(property = "icon", column = "icon"),
        @Result(property = "sortOrder", column = "sort_order"),
        @Result(property = "enabled", column = "enabled"),
        @Result(property = "requiredRole", column = "required_role"),
        @Result(property = "description", column = "description")
    })
    Menu findByMenuId(@Param("menuId") String menuId);

    @Insert("INSERT INTO menus (menu_id, parent_id, title, url, icon, sort_order, enabled, required_role, description) " +
            "VALUES (#{menuId}, #{parentId}, #{title}, #{url}, #{icon}, #{sortOrder}, #{enabled}, #{requiredRole}, #{description})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insert(Menu menu);

    @Update("UPDATE menus SET title = #{title}, url = #{url}, icon = #{icon}, " +
            "parent_id = #{parentId}, sort_order = #{sortOrder}, enabled = #{enabled}, " +
            "required_role = #{requiredRole}, description = #{description} WHERE id = #{id}")
    void update(Menu menu);

    @Delete("DELETE FROM menus WHERE id = #{id}")
    void deleteById(@Param("id") Long id);
}
