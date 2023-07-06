package com.example.kyn.model;

public class SuccessLoginResponse {
    private String token;
    private String name;
    private String email;
    private String role;

    public SuccessLoginResponse(String token, String name, String email, String role) {
        this.token = token;
        this.name = name;
        this.email = email;
        this.role = role;
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

    public String getRole() {
        return role;
    }
}
