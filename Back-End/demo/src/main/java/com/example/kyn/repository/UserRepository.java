package com.example.kyn.repository;

import com.example.kyn.model.Role;
import com.example.kyn.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email) ;

    List<User> findAllByIsActiveAndRoleId(boolean isActive, Role role);

}
