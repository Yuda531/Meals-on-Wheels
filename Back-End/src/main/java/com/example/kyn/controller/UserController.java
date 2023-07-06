package com.example.kyn.controller;
import com.example.kyn.model.Role;
import com.example.kyn.model.User;
import com.example.kyn.service.JwtUtil;
import com.example.kyn.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    public UserService userService;

    @Autowired
    private JwtUtil jwtUtil;
    @PostMapping("/register")
    public User saveUser(@RequestBody User user) {
        String userRole = user.getRole();
        if (Role.MEMBER.equals(userRole) || Role.DONOR.equals(userRole)) {
            user.setActive(false);
        } else {
            user.setActive(true);
        }
        return userService.saveUser(user);
    }







}
