package com.zhuri.clientplan;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClientPlanService {
    //for test
    private List<ClientPlan> clientPlans = new ArrayList<>();
    public ClientPlanService() {
        ArrayList<Task> tasks = new ArrayList<>();
        ArrayList<Link> links = new ArrayList<>();

        tasks.add(new Task());
        tasks.add(new Task());
        tasks.add(new Task());
        links.add(new Link());
        links.add(new Link());

        ClientPlan clientPlan = new ClientPlan();
        clientPlan.setId(0);
        clientPlan.setTasks(tasks);
        clientPlan.setLinks(links);

        clientPlans.add(clientPlan);
    }

    public List<ClientPlan> getClientPlansByUserId(int userId) {
        return clientPlans;
    }

    public ClientPlan getClientPlansByClientPlanId(int ClientPlanId) {
        for(ClientPlan cp: clientPlans) {
            if(cp.getId() == ClientPlanId) {
                return cp;
            }
        }
        return null;
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
