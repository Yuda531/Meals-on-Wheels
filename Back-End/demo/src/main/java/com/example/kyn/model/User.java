package com.example.kyn.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.aspectj.weaver.ast.Or;

import javax.persistence.*;



@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {

//    @JsonIgnore
//    @OneToOne(mappedBy = "userId")
//    private Order order;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long userId;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "roleId")
    private Role roleId;

    @Column()
    private String password;

    @Column()
    private boolean isActive;

    @JsonIgnore
    @OneToOne(mappedBy = "userId")
    private Caregiver caregiver;

    @JsonIgnore
    @OneToOne(mappedBy = "userId")
    private Member member;
    
    @JsonIgnore
    @OneToOne(mappedBy = "userId")
    private Partner partner;



}