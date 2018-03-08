package com.zhuri.clientplan;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserDetailsMapper {
    @Select("SELECT id,username,password,enabled FROM user WHERE username=#{username};")
    CustomUserDetails loadUserByUsername(@Param("username") String username);

    @Select("SELECT role.name FROM user_role INNER JOIN role ON user_role.roleId=role.id WHERE user_role.userId=#{id};")
    String[] getUserAuthorities(int id);
}
