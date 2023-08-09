package com.example.kyn.repository;

import com.example.kyn.model.Role;
import com.example.kyn.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email) ;

    List<User> findAllByIsActiveAndRoleId(boolean isActive, Role role);

    @Query("SELECT u, c FROM User u JOIN Caregiver c ON u.userId = c.userId WHERE u.isActive = :isActive AND u.roleId = :role")
    List<Object[]> findCaregiversAndUsersByIsActiveAndRoleId(@Param("isActive") boolean isActive, @Param("role") Role role);

    @Query("SELECT u, p FROM User u JOIN Partner p ON u = p.userId WHERE u.isActive = :isActive AND u.roleId = :role")
    List<Object[]> findPartnersAndUsersByIsActiveAndRoleId(@Param("isActive") boolean isActive, @Param("role") Role role);

}
