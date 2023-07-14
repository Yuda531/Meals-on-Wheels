package com.example.kyn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.kyn.model.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {


}
