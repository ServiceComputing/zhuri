package com.zhuri.clientplan;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.xml.ws.RequestWrapper;

@Controller
public class UIController {
    @RequestMapping(value = "/planModify", method = RequestMethod.GET)
    public String planModify() {
        return "planModify";
    }
}
