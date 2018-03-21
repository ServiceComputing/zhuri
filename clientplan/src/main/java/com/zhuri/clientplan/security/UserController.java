package com.zhuri.clientplan.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.servletapi.SecurityContextHolderAwareRequestWrapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping(value = "/getCurrentUser", method = RequestMethod.GET)
    public UserDetails getCurrentUser() {
        CustomUserDetails userDetails = (CustomUserDetails) SecurityContextHolder.getContext().getAuthentication() .getPrincipal();
        userDetails.setPassword(null);
        return userDetails;
    }

    @RequestMapping(value = "/getUsersByRole", method = RequestMethod.GET)
    public List<Map> getUsersByRole(SecurityContextHolderAwareRequestWrapper request) {
        if(request.isUserInRole("ROLE_MANAGER")) {
            return userService.getUsersByRole("CLIENT");
        } else if(request.isUserInRole("ROLE_CLIENT")){
            return userService.getUsersByRole("MANAGER");
        } else {
            return null;
        }
    }
}
