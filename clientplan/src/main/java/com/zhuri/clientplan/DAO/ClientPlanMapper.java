package com.zhuri.clientplan.DAO;

import com.zhuri.clientplan.domain.ClientPlan;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ClientPlanMapper {
    /*@Select("SELECT id,text,create_date,creator_id,status FROM client_plan")
    List<ClientPlan> getClientPlans();

    @Select("SELECT COUNT(*) FROM client_plan")
    int countClientPlans();*/

    @Select("SELECT client_plan.id,text,create_date,creator_id,status " +
            " FROM client_plan INNER JOIN user_client_plan ON client_plan.id = user_client_plan.client_plan_id " +
            " WHERE user_client_plan.user_id = #{userId}")
    List<ClientPlan> getClientPlansByUserId(int userId);

    @Select("SELECT COUNT(*) " +
            " FROM client_plan INNER JOIN user_client_plan ON client_plan.id = user_client_plan.client_plan_id " +
            " WHERE user_client_plan.user_id = #{userId}")
    int countClientPlansByUserId(int userId);

    @Select("SELECT * FROM client_plan WHERE id=#{clientPlanId}")
    ClientPlan getClientPlansByClientPlanId(int clientPlanId);

    @Insert("INSERT INTO client_plan(text,create_date,creator_id,status,data,links) VALUES(#{text},#{create_date},#{creator_id},#{status},#{data},#{links})")
    @Options(useGeneratedKeys = true, keyProperty = "id", keyColumn = "id")
    int addClientPlan(ClientPlan clientPlan);

    @Insert("INSERT INTO user_client_plan(user_id, client_plan_id) VALUES(#{userId}, #{clientPlanId})")
    int addUserClientPlan(@Param("userId") int userId, @Param("clientPlanId") int clientPlanId);

    @Update("UPDATE client_plan SET text=#{text} WHERE id=#{id}")
    int updateClientPlanText(ClientPlan clientPlan);

    @Update("UPDATE client_plan SET data=#{data}, links=#{links} WHERE id=#{id}")
    int updateClientPlanTasksAndLinks(ClientPlan clientPlan);

    @Update("UPDATE client_plan SET status=#{status} WHERE id=#{id}")
    int updateClientPlanStatus(ClientPlan clientPlan);
}
