package com.example.kyn.controller;

import com.example.kyn.controller.AuthController;
import com.example.kyn.model.Role;
import com.example.kyn.model.User;
import com.example.kyn.repository.UserRepository;
import com.example.kyn.request.UserLoginRequestBody;
import com.example.kyn.response.SuccessLoginResponse;
import com.example.kyn.service.JwtUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
public class AuthControllerTest {

    @Mock
    private JwtUtil jwtUtil;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private AuthController authController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testLoginWithEmailAndPassword() {
        String email = "meku3@gmail.com";
        String password = "qwe";
        String hashedPassword = new BCryptPasswordEncoder().encode(password);

        Role role = new Role(2L, "Member"); // Role dengan roleId = 2 dan roleName = "Member"
        User user = new User(63L, "Member Name", email, role, hashedPassword, true, null, null, null, null);

        when(userRepository.findByEmail(email)).thenReturn(Optional.of(user));
        when(jwtUtil.generateToken(email)).thenReturn("sampleToken");

        UserLoginRequestBody loginRequestBody = new UserLoginRequestBody(email, password, 2L, true, 63L, null);
        ResponseEntity<Object> response = authController.loginEmailAndPassword(loginRequestBody);

        assertEquals(200, response.getStatusCodeValue());
        assertEquals(SuccessLoginResponse.class, response.getBody().getClass());

        SuccessLoginResponse loginResponse = (SuccessLoginResponse) response.getBody();
        assertEquals("sampleToken", loginResponse.getToken());
        assertEquals("Member Name", loginResponse.getName());
        assertEquals(email, loginResponse.getEmail());
        assertEquals(true, loginResponse.getIsActive());
        assertEquals(2L, loginResponse.getRoleId().getRoleId());
        assertEquals(63L, loginResponse.getId());
    }
}
