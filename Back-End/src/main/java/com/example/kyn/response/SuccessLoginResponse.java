package com.example.kyn.response;

import com.example.kyn.model.Caregiver;
import com.example.kyn.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SuccessLoginResponse {
    private String token;
    private String name;
    private String email;
    private Role roleId;
    private Boolean isActive;
    private Long id;
    private Caregiver caregiver;
}
