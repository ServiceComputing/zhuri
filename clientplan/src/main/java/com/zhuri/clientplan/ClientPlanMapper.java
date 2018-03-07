package com.zhuri.clientplan;

import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ClientPlanMapper {
    @Select("SELECT id,text,create_date,creator_id,status FROM client_plan WHERE creator_id=#{userId}")
    List<ClientPlan> getClientPlansByUserId(int userId);

    @Select("SELECT * FROM client_plan WHERE id=#{clientPlanId}")
    ClientPlan getClientPlansByClientPlanId(int clientPlanId);

    @Insert("INSERT INTO client_plan(text,create_date,creator_id,status,data,links) VALUES(#{text},#{create_date},#{creator_id},#{status},#{data},#{links})")
    int addClientPlan(ClientPlan clientPlan);

    @Update("UPDATE client_plan SET data=#{data}, links=#{links} WHERE id=#{id}")
    int updateClientPlanTasksAndLinks(ClientPlan clientPlan);
}
