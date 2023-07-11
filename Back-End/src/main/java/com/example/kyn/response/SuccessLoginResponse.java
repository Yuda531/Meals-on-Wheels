package com.example.kyn.response;

import com.example.kyn.model.Role;

public class SuccessLoginResponse {
    private String token;
    private String name;
    private String email;
    private Role roleId;
    private Boolean isActive;

    private Long id;


    public SuccessLoginResponse(String token, String name, String email, Role roleId, Boolean isActive, Long id) {
        this.token = token;
        this.name = name;
        this.email = email;
        this.roleId = roleId;
        this.isActive = isActive;
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public Role getRoleId() {
        return roleId;
    }

    public Boolean getActive() {
        return isActive;
    }

    public Long getId() {
        return id;
    }
}
