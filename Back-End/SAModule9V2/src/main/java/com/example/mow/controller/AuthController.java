package com.example.mow.controller;
import com.example.mow.interceptor.InvalidPasswordException;
import com.example.mow.model.CustomErrorResponse;
import com.example.mow.model.SuccessLoginResponse;
import com.example.mow.model.User;
import com.example.mow.model.UserLoginRequestBody;
import com.example.mow.repository.UserRepository;
import com.example.mow.service.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    ResponseEntity<Object> loginEmailAndPassword(@RequestBody UserLoginRequestBody user) {

        Optional<User> findByEmail = userRepository.findByEmail(user.getEmail());


        if (!findByEmail.isPresent()) {
            CustomErrorResponse error = new CustomErrorResponse("Email not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
        } else {
            User userFromDb = findByEmail.get();


            PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            if (!passwordEncoder.matches(user.getPassword(), userFromDb.getPassword())) {
                CustomErrorResponse error = new CustomErrorResponse("email and password don't match");
                throw new InvalidPasswordException("Email and password don't match");
            }



            String generatedToken = jwtUtil.generateToken(userFromDb.getEmail());
            SuccessLoginResponse tokenResponse = new SuccessLoginResponse(generatedToken, userFromDb.getName(), userFromDb.getEmail(), userFromDb.getRole(), userFromDb.getActive());

            return ResponseEntity.ok(tokenResponse);
        }
    }



    @GetMapping("/needAuth")
    public String needAuth() {
        return "Hello Wah";
    }

    @GetMapping("/createToken")
    public String createToken() {
        return jwtUtil.generateToken("iniEmail@email.com");
    }

    @GetMapping("/whoAmI")
    public ResponseEntity<Object> whoAmI(@RequestParam("token") String token) {

        if (jwtUtil.validateToken(token)) {
            String email = jwtUtil.getUsernameFromToken(token);

            Optional<User> findByEmail = userRepository.findByEmail(email);
            if(findByEmail.isPresent()) {
                return ResponseEntity.ok(findByEmail.get());
            } else {
                CustomErrorResponse error = new CustomErrorResponse("Email not found");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
            }
        } else {
            CustomErrorResponse error = new CustomErrorResponse("Token is not valid");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
        }
    }
}