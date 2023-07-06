package com.example.kyn.model;

public class UserDTO {
    private final String name;
    private final String email;

    public UserDTO(String name, String email) {
        this.name = name;
        this.email = email;
    }

    // Getters for name and email

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }
}