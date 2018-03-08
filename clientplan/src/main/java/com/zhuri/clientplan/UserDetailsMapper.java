package com.zhuri.clientplan;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserDetailsMapper {
    @Select("SELECT id,username,password,enabled FROM user WHERE username=#{username};")
    CustomUserDetails loadUserByUsername(@Param("username") String username);

    @Select("SELECT role.name FROM user_role INNER JOIN role ON user_role.role_id=role.id WHERE user_role.user_id=#{id};")
    String[] getUserAuthorities(int id);
}
