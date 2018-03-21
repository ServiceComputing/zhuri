package com.zhuri.clientplan.DAO;

import com.zhuri.clientplan.domain.ClientPlan;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface TemplatePlanMapper {
    @Select("SELECT template_plan.id,text,create_date,creator_id,status " +
            " FROM template_plan INNER JOIN user_template_plan ON template_plan.id = user_template_plan.template_plan_id " +
            " WHERE user_template_plan.user_id = #{userId}")
    List<ClientPlan> getTemplatePlansByUserId(int userId);

    @Select("SELECT COUNT(*) " +
            " FROM template_plan INNER JOIN user_template_plan ON template_plan.id = user_template_plan.template_plan_id " +
            " WHERE user_template_plan.user_id = #{userId}")
    int countTemplatePlansByUserId(int userId);

    @Select("SELECT * FROM template_plan WHERE id=#{templatePlanId}")
    ClientPlan getTemplatePlansByTemplatePlanId(int templatePlanId);

    @Insert("INSERT INTO template_plan(text,create_date,creator_id,status,data,links) VALUES(#{text},#{create_date},#{creator_id},#{status},#{data},#{links})")
    @Options(useGeneratedKeys = true, keyProperty = "id", keyColumn = "id")
    int addTemplatePlan(ClientPlan clientPlan);

    @Insert("INSERT INTO user_template_plan(user_id, template_plan_id) VALUES(#{userId}, #{templatePlanId})")
    int addUserTemplatePlan(@Param("userId") int userId, @Param("templatePlanId") int templatePlanId);

    @Update("UPDATE template_plan SET text=#{text} WHERE id=#{id}")
    int updateTemplatePlanText(ClientPlan clientPlan);

    @Update("UPDATE template_plan SET data=#{data}, links=#{links} WHERE id=#{id}")
    int updateTemplatePlanTasksAndLinks(ClientPlan clientPlan);
}
