package com.example.mow.repository;

import com.example.mow.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email) ;
    Optional<User> findById(Long id);
}