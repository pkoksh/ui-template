package com.worksystem.repository;

import com.worksystem.entity.Menu;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface MenuRepository {

    List<Menu> findAllByOrderBySortOrderAsc();

    List<Menu> findByEnabledTrueOrderBySortOrderAsc();

    Optional<Menu> findById(@Param("id") Long id);

    Menu findByMenuId(@Param("menuId") String menuId);

    void insert(Menu menu);

    void update(Menu menu);

    void deleteById(@Param("id") Long id);
}
