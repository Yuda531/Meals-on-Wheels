package com.example.kyn.repository;

import com.example.kyn.model.Caregiver;
import com.example.kyn.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CaregiverRepository extends JpaRepository<Caregiver,Long> {

    @Query("SELECT p FROM Caregiver p JOIN p.userId u WHERE u.userId = :userId")
    Caregiver getDriverByUserId(@Param("userId")Long userId);

//    Optional<Caregiver> findDriverByName(User user);

//    @Query("SELECT *\n" +
//            "FROM users\n" +
//            "JOIN caregivers ON users.id = caregivers.userId\n" +
//            "WHERE users.isActive = true\n")
//    List<Caregiver> getAllActiveDrivers();

}
