package com.zhuri.clientplan;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestWrapper;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;

@RestController
public class ClientPlanController {
    @Autowired
    ClientPlanService clientPlanService;

    @RequestMapping(value = "/getClientPlansByUserId", method = RequestMethod.GET)
    public PageBean<ClientPlan> getClientPlansByUserId( int pageNum, int pageSize) {
        CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication() .getPrincipal();
        return clientPlanService.getClientPlansByUserId(userDetails.getId(),pageNum, pageSize);
        /*if(request.isUserInRole("ROLE_MANAGER")) {
            return clientPlanService.getClientPlans(pageNum, pageSize);
        } else if(request.isUserInRole("ROLE_CLIENT")){
            CustomUserDetails userDetails = (CustomUserDetails)request.getUserPrincipal();
            //System.out.println(userDetails.getUsername());
            return clientPlanService.getClientPlansByUserId(userDetails.getId(),pageNum, pageSize);
        } else {
            return null;
        }*/
    }

    @RequestMapping(value = "/getClientPlansByClientPlanId", method = RequestMethod.GET)
    public ClientPlan getClientPlansByClientPlanId(@RequestParam int clientPlanId) {
        return clientPlanService.getClientPlansByClientPlanId(clientPlanId);
    }

    @RequestMapping(value = "/addClientPlan", method = RequestMethod.POST)
    public int addClientPlan(ClientPlan clientPlan) {
        clientPlan.setData(clientPlan.getLinks().replace("\n",""));
        clientPlan.setData(clientPlan.getLinks().replace(" ",""));
        clientPlan.setData(clientPlan.getLinks().replace("\t",""));
        clientPlan.setLinks(clientPlan.getLinks().replace("\n",""));
        clientPlan.setLinks(clientPlan.getLinks().replace(" ",""));
        clientPlan.setLinks(clientPlan.getLinks().replace("\t",""));

        CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication() .getPrincipal();
        clientPlan.setCreator_id(userDetails.getId());
        clientPlan.setStatus("Active");
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
}
