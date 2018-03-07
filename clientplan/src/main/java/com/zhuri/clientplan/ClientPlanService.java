package com.zhuri.clientplan;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClientPlanService {
    @Autowired
    ClientPlanMapper clientPlanMapper;

    public List<ClientPlan> getClientPlansByUserId(int userId) {
        return clientPlanMapper.getClientPlansByUserId(userId);
    }

    public ClientPlan getClientPlansByClientPlanId(int clientPlanId) {
        ClientPlan clientPlan = clientPlanMapper.getClientPlansByClientPlanId(clientPlanId);
        //clientPlan.setTasks(clientPlanMapper.getTasksByClientPlanId(clientPlanId));
        //clientPlan.setLinks(clientPlanMapper.getLinksByClientPlanId(clientPlanId));
        return clientPlan;
    }

    public int addClientPlan(ClientPlan clientPlan) {
        return clientPlanMapper.addClientPlan(clientPlan);
    }

    public int updateClientPlanText(ClientPlan clientPlan) {
        return clientPlanMapper.updateClientPlanText(clientPlan);
    }

    public int updateClientPlanTasksAndLinks(ClientPlan clientPlan) {
        return clientPlanMapper.updateClientPlanTasksAndLinks(clientPlan);
    }
}
