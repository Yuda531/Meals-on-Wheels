package com.example.mow.controller;
import com.example.mow.model.Role;
import com.example.mow.model.User;
import com.example.mow.service.JwtUtil;
import com.example.mow.service.UserService;
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
        if (Role.MEMBER.equals(userRole) || Role.DONOR.equals(userRole) || Role.ADMIN.equals(userRole)) {
            user.setActive(false);
        } else {
            user.setActive(true);
        }
        return userService.saveUser(user);
    }







}
