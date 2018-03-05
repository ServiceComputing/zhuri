package com.zhuri.clientplan;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClientPlanController {
    @Autowired
    ClientPlanService clientPlanService;

    @RequestMapping(value = "/getClientPlansByUserId", method = RequestMethod.GET)
    public List<ClientPlan> getClientPlansByUserId() {
        return clientPlanService.getClientPlansByUserId(0);
    }

    @RequestMapping(value = "/getClientPlansByClientPlanId", method = RequestMethod.GET)
    public ClientPlan getClientPlansByClientPlanId(@RequestParam int ClientPlanId) {
        return clientPlanService.getClientPlansByClientPlanId(ClientPlanId);
    }

    @RequestMapping(value = "/addClientPlan", method = RequestMethod.POST)
    public boolean addClientPlan(@RequestBody ClientPlan clientPlan) {
        return clientPlanService.addClientPlan(clientPlan);
    }

    @RequestMapping(value = "/updateClientPlan", method = RequestMethod.POST)
    public boolean updateClientPlan(@RequestBody ClientPlan clientPlan) {
        return clientPlanService.updateClientPlan(clientPlan);
    }
}
