package com.example.kyn.model;
import javax.persistence.*;




@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column()
    private String role;

    @Column()
    private String password;

    @Column()
    private boolean fb_login;


    public User() {
        // Default constructor
    }

    public User(String name, String email, String password, boolean fb_login, String role) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.fb_login = fb_login;
        this.role = role;

    }




    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }


    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public boolean isFb_login() {
        return fb_login;
    }

    public void setFb_login(boolean fb_login) {
        this.fb_login = fb_login;
    }
}

