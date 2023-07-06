package com.example.kyn.controller;
import com.example.kyn.model.SuccessLoginResponse;
import com.example.kyn.model.User;
import com.example.kyn.model.UserDTO;
import com.example.kyn.repository.UserRepository;
import com.example.kyn.service.JwtUtil;
import com.example.kyn.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    public UserService userService;
    @Autowired
    public UserRepository userRepository;
    @Autowired
    private JwtUtil jwtUtil;
    @PostMapping("/register")
    public User saveUser(@RequestBody User user) {
        user.setFb_login(false);
        return userService.saveUser(user);
    }




    @PostMapping("/login/facebook")
    public ResponseEntity<Object> loginWithFacebook(@RequestBody User facebookUser) {
        // Check if the Facebook user exists in the database

        Optional<User> userOptional = userRepository.findByEmail(facebookUser.getEmail());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            UserDTO userDTO = new UserDTO(user.getName(), user.getEmail());
            System.out.println("User found in database");

            String generatedToken = jwtUtil.generateToken(user.getEmail());
            SuccessLoginResponse tokenResponse = new SuccessLoginResponse(generatedToken, user.getName(), user.getEmail(), user.getRole());

            return ResponseEntity.ok(tokenResponse);
        } else {
            User newUser = new User();
            newUser.setName(facebookUser.getName());
            newUser.setEmail(facebookUser.getEmail());
            newUser.setFb_login(true);
            // Save the new user to the database
            User savedUser = userRepository.save(newUser);

            // Create a UserDTO with name and email
            UserDTO userDTO = new UserDTO(savedUser.getName(), savedUser.getEmail());
            System.out.println("user added");

            String generatedToken = jwtUtil.generateToken(savedUser.getEmail());
            SuccessLoginResponse tokenResponse = new SuccessLoginResponse(generatedToken, newUser.getName(), newUser.getEmail(), newUser.getRole());

            return ResponseEntity.ok(tokenResponse);
        }
    }
}
