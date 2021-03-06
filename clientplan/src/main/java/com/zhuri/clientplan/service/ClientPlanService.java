package com.zhuri.clientplan.service;

import com.github.pagehelper.PageHelper;
import com.zhuri.clientplan.DAO.ClientPlanMapper;
import com.zhuri.clientplan.domain.ClientPlan;
import com.zhuri.clientplan.domain.DataTables;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
public class ClientPlanService {
    @Autowired
    ClientPlanMapper clientPlanMapper;

    public DataTables<ClientPlan> getClientPlansByUserId(int userId, Map<String,String> reqMap) {
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
        List<ClientPlan> data = clientPlanMapper.getClientPlansByUserId(userId);
        int recordsTotal = clientPlanMapper.countClientPlansByUserId(userId);            //总记录数
        DataTables<ClientPlan> pageData = new DataTables<>(draw, recordsTotal, data.size(), data, null);
        return pageData;
    }

    public ClientPlan getClientPlansByClientPlanId(int clientPlanId) {
        ClientPlan clientPlan = clientPlanMapper.getClientPlansByClientPlanId(clientPlanId);
        return clientPlan;
    }

    @Transactional
    public int addClientPlan(ClientPlan clientPlan) {
        int result = 0;
        result = clientPlanMapper.addClientPlan(clientPlan);
        result += clientPlanMapper.addUserClientPlan(clientPlan.getCreator_id(), clientPlan.getId());
        result += clientPlanMapper.addUserClientPlan(clientPlan.getPartner_id(), clientPlan.getId());
        return result;
    }

    public int updateClientPlanText(ClientPlan clientPlan) {
        return clientPlanMapper.updateClientPlanText(clientPlan);
    }

    public int updateClientPlanTasksAndLinks(ClientPlan clientPlan) {
        return clientPlanMapper.updateClientPlanTasksAndLinks(clientPlan);
    }

    public int updateClientPlanStatus(ClientPlan clientPlan) {
        return clientPlanMapper.updateClientPlanStatus(clientPlan);
    }
}
