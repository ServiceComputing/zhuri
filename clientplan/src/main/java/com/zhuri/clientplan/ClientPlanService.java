package com.zhuri.clientplan;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClientPlanService {
    //for test
    private List<ClientPlan> clientPlans = new ArrayList<ClientPlan>();

    public List<ClientPlan> getClientPlansByUserId(int userId) {
        return clientPlans;
    }

    public boolean addClientPlan(ClientPlan clientPlan) {
        clientPlan.setId(clientPlans.size());
        clientPlans.add(clientPlan);
        return true;
    }

    public boolean updateClientPlan(ClientPlan clientPlan) {
        for(ClientPlan cp: clientPlans) {
            if(cp.getId()==clientPlan.getId()) {
                clientPlans.remove(cp);
                clientPlans.add(clientPlan);
                return true;
            }
        }
        return false;
    }
}
