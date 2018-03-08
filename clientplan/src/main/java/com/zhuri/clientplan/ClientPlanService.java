package com.zhuri.clientplan;

import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClientPlanService {
    @Autowired
    ClientPlanMapper clientPlanMapper;

    public PageBean<ClientPlan> getClientPlansByUserId(int userId, int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        List<ClientPlan> allRows = clientPlanMapper.getClientPlansByUserId(userId);
        int total = clientPlanMapper.countClientPlansByUserId(userId);            //总记录数
        PageBean<ClientPlan> pageData = new PageBean<>(pageNum, pageSize, total);
        pageData.setRows(allRows);
        return pageData;
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
