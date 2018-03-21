package com.zhuri.clientplan.controller;

import com.zhuri.clientplan.domain.ClientPlan;
import com.zhuri.clientplan.domain.DataTables;
import com.zhuri.clientplan.security.CustomUserDetails;
import com.zhuri.clientplan.service.TemplatePlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class TemplatePlanController {
    @Autowired
    TemplatePlanService templatePlanService;

    @RequestMapping(value = "/getTemplatePlansByUserId", method = RequestMethod.GET)
    public DataTables<ClientPlan> getTemplatePlansByUserId(@RequestParam Map<String,String> reqMap) {
        CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication() .getPrincipal();
        return templatePlanService.getTemplatePlansByUserId(userDetails.getId(),reqMap);
    }

    @RequestMapping(value = "/getTemplatePlansByTemplatePlanId", method = RequestMethod.GET)
    public ClientPlan getTemplatePlansByTemplatePlanId(@RequestParam int templatePlanId) {
        return templatePlanService.getTemplatePlansByTemplatePlanId(templatePlanId);
    }

    @RequestMapping(value = "/addTemplatePlan", method = RequestMethod.POST)
    public int addTemplatePlan(ClientPlan clientPlan) {
        clientPlan.setData(clientPlan.getData().replace("\n",""));
        clientPlan.setData(clientPlan.getData().replace(" ",""));
        clientPlan.setData(clientPlan.getData().replace("\t",""));
        clientPlan.setLinks(clientPlan.getLinks().replace("\n",""));
        clientPlan.setLinks(clientPlan.getLinks().replace(" ",""));
        clientPlan.setLinks(clientPlan.getLinks().replace("\t",""));

        CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication() .getPrincipal();
        clientPlan.setCreator_id(userDetails.getId());
        clientPlan.setStatus("Active");
        return templatePlanService.addTemplatePlan(clientPlan);
    }

    @RequestMapping(value = "/updateTemplatePlanText", method = RequestMethod.POST)
    public int updateTemplatePlanText(ClientPlan clientPlan) {
        return templatePlanService.updateTemplatePlanText(clientPlan);
    }

    @RequestMapping(value = "/updateTemplatePlanTasksAndLinks", method = RequestMethod.POST)
    public int updateTemplatePlanTasksAndLinks(ClientPlan clientPlan) {
        return templatePlanService.updateTemplatePlanTasksAndLinks(clientPlan);
    }
}
