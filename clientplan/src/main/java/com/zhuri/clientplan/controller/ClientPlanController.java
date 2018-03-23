package com.zhuri.clientplan.controller;

import com.zhuri.clientplan.domain.ClientPlan;
import com.zhuri.clientplan.service.ClientPlanService;
import com.zhuri.clientplan.security.CustomUserDetails;
import com.zhuri.clientplan.domain.DataTables;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class ClientPlanController {
    @Autowired
    ClientPlanService clientPlanService;

    @RequestMapping(value = "/getClientPlansByUserId", method = RequestMethod.GET)
    public DataTables<ClientPlan> getClientPlansByUserId(@RequestParam Map<String,String> reqMap) {
        CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication() .getPrincipal();
        return clientPlanService.getClientPlansByUserId(userDetails.getId(),reqMap);
    }

    @RequestMapping(value = "/getClientPlansByClientPlanId", method = RequestMethod.GET)
    public ClientPlan getClientPlansByClientPlanId(@RequestParam int clientPlanId) {
        return clientPlanService.getClientPlansByClientPlanId(clientPlanId);
    }

    @RequestMapping(value = "/addClientPlan", method = RequestMethod.POST)
    public int addClientPlan(ClientPlan clientPlan) {
        clientPlan.setData(clientPlan.getData().replace("\n",""));
        clientPlan.setData(clientPlan.getData().replace(" ",""));
        clientPlan.setData(clientPlan.getData().replace("\t",""));
        clientPlan.setLinks(clientPlan.getLinks().replace("\n",""));
        clientPlan.setLinks(clientPlan.getLinks().replace(" ",""));
        clientPlan.setLinks(clientPlan.getLinks().replace("\t",""));

        CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication() .getPrincipal();
        clientPlan.setCreator_id(userDetails.getId());
        // clientPlan.setStatus("Active");
        return clientPlanService.addClientPlan(clientPlan);
    }

    @RequestMapping(value = "/updateClientPlanText", method = RequestMethod.POST)
    public int updateClientPlanText(ClientPlan clientPlan) {
        return clientPlanService.updateClientPlanText(clientPlan);
    }

    @RequestMapping(value = "/updateClientPlanTasksAndLinks", method = RequestMethod.POST)
    public int updateClientPlanTasksAndLinks(ClientPlan clientPlan) {
        return clientPlanService.updateClientPlanTasksAndLinks(clientPlan);
    }

    @RequestMapping(value = "/updateClientPlanStatus", method = RequestMethod.POST)
    public int updateClientPlanStatus(ClientPlan clientPlan) {
        return clientPlanService.updateClientPlanStatus(clientPlan);
    }
}
