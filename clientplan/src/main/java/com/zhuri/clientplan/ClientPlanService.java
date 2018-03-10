package com.zhuri.clientplan;

import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class ClientPlanService {
    @Autowired
    ClientPlanMapper clientPlanMapper;

    /*public PageBean<ClientPlan> getClientPlans(int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        List<ClientPlan> allRows = clientPlanMapper.getClientPlans();
        int total = clientPlanMapper.countClientPlans();            //总记录数
        PageBean<ClientPlan> pageData = new PageBean<>(pageNum, pageSize, total);
        pageData.setRows(allRows);
        return pageData;
    }*/

    public DataTables<ClientPlan> getClientPlansByUserId(int userId, Map<String,String> reqMap) {
        int draw, start,length;
        try {
            draw = Integer.parseInt(reqMap.get("draw"));
            start = Integer.parseInt(reqMap.get("start"));
            length = Integer.parseInt(reqMap.get("length"));
        }  catch (Exception e) {
            e.printStackTrace();
            return null;
        }

        PageHelper.startPage(start, length);
        List<ClientPlan> data = clientPlanMapper.getClientPlansByUserId(userId);
        int recordsTotal = clientPlanMapper.countClientPlansByUserId(userId);            //总记录数
        //PageBean<ClientPlan> pageData = new PageBean<>(pageNum, pageSize, total);
        //pageData.setRows(dataTotal);
        //return pageData;
        DataTables<ClientPlan> pageData = new DataTables<>(draw, recordsTotal, data.size(), data, null);
        return pageData;
    }

    public ClientPlan getClientPlansByClientPlanId(int clientPlanId) {
        ClientPlan clientPlan = clientPlanMapper.getClientPlansByClientPlanId(clientPlanId);
        //clientPlan.setTasks(clientPlanMapper.getTasksByClientPlanId(clientPlanId));
        //clientPlan.setLinks(clientPlanMapper.getLinksByClientPlanId(clientPlanId));
        return clientPlan;
    }

    @Transactional
    public int addClientPlan(ClientPlan clientPlan) {
        int result = 0;
        result = clientPlanMapper.addClientPlan(clientPlan);
        result += clientPlanMapper.addUserClientPlan(clientPlan.getCreator_id(), clientPlan.getId());
        //result += clientPlanMapper.addUserClientPlan(clientPlan.getPartner_id(), clientPlan.getId());
        return result;
    }

    public int updateClientPlanText(ClientPlan clientPlan) {
        return clientPlanMapper.updateClientPlanText(clientPlan);
    }

    public int updateClientPlanTasksAndLinks(ClientPlan clientPlan) {
        return clientPlanMapper.updateClientPlanTasksAndLinks(clientPlan);
    }
}
