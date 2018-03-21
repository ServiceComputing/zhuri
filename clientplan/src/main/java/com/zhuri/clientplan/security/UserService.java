package com.zhuri.clientplan.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class UserService {
    @Autowired
    UserDetailsMapper userDetailsMapper;

    public List<Map> getUsersByRole(String role) {
        return userDetailsMapper.getUsersByRole(role);
    }
}
