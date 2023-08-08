package com.example.kyn.controller;

import static org.junit.jupiter.api.Assertions.*;

import com.example.kyn.model.Member;
import com.example.kyn.response.ResponseData;
import com.example.kyn.service.MemberService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.example.kyn.DTO.RegisDTO;
import com.example.kyn.DTO.UserDTO;
import com.example.kyn.controller.UserController;
import com.example.kyn.model.Role;


@SpringBootTest
public class UserMemberRegisTest {

    @Autowired
    private UserController userController;

    @Autowired
    private MemberService memberService;

    @Test
    public void testRegisterMember() {
        RegisDTO regisDTO = new RegisDTO();
        UserDTO userDTO = new UserDTO();
        userDTO.setName("Meja Kursi 3");
        userDTO.setPassword("qwe");
        userDTO.setEmail("meku3@gmail.com");
        userDTO.setRoleId(2L); // Role ID for Member
        regisDTO.setUserDTO(userDTO);

        // Add member details
        Member member = new Member();
        member.setAge(55);
        member.setReason("To be a good");

        regisDTO.setMember(member);

        ResponseEntity<ResponseData<RegisDTO>> response = userController.saveUser(regisDTO);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals(userDTO.getName(), response.getBody().getPayLoad().getUserDTO().getName());

        // Verify member details in the database
        Member savedMember = memberService.save(member);
        assertNotNull(savedMember);
        assertEquals(member.getAge(), savedMember.getAge());
        assertEquals(member.getReason(), savedMember.getReason());
    }
}
