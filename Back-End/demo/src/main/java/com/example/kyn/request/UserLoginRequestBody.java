package com.example.kyn.request;


import com.example.kyn.model.Caregiver;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserLoginRequestBody {
    private String email;
    private String password;
    private Long roleId;
    private Boolean isActive;
    private Long id;
    private Caregiver caregiver;
}