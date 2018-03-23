package com.zhuri.clientplan.service;

import com.github.pagehelper.PageHelper;
import com.zhuri.clientplan.DAO.TemplatePlanMapper;
import com.zhuri.clientplan.domain.ClientPlan;
import com.zhuri.clientplan.domain.DataTables;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class TemplatePlanService {
    @Autowired
    TemplatePlanMapper templatePlanMapper;

    public DataTables<ClientPlan> getTemplatePlansByUserId(int userId, Map<String,String> reqMap) {
        int draw, start,length;
        try {
            draw = Integer.parseInt(reqMap.get("draw"));
            start = Integer.parseInt(reqMap.get("start"));
            length = Integer.parseInt(reqMap.get("length"));
        }  catch (Exception e) {
            e.printStackTrace();
            return new DataTables<>(0, 0, 0, null, "Invalid parameters!");
        }

        PageHelper.startPage(start, length);
        List<ClientPlan> data = templatePlanMapper.getTemplatePlansByUserId(userId);
        int recordsTotal = templatePlanMapper.countTemplatePlansByUserId(userId);            //总记录数
        DataTables<ClientPlan> pageData = new DataTables<>(draw, recordsTotal, data.size(), data, null);
        return pageData;
    }

    public ClientPlan getTemplatePlansByTemplatePlanId(int templatePlanId) {
        ClientPlan clientPlan = templatePlanMapper.getTemplatePlansByTemplatePlanId(templatePlanId);
        return clientPlan;
    }

    @Transactional
    public int addTemplatePlan(ClientPlan clientPlan) {
        int result = 0;
        result = templatePlanMapper.addTemplatePlan(clientPlan);
        result += templatePlanMapper.addUserTemplatePlan(clientPlan.getCreator_id(), clientPlan.getId());
        result += templatePlanMapper.addUserTemplatePlan(clientPlan.getPartner_id(), clientPlan.getId());
        return result;
    }

    public int updateTemplatePlanText(ClientPlan clientPlan) {
        return templatePlanMapper.updateTemplatePlanText(clientPlan);
    }

    public int updateTemplatePlanTasksAndLinks(ClientPlan clientPlan) {
        return templatePlanMapper.updateTemplatePlanTasksAndLinks(clientPlan);
    }

    public int updateTemplatePlanStatus(ClientPlan clientPlan) {
        return templatePlanMapper.updateTemplatePlanStatus(clientPlan);
    }
}
