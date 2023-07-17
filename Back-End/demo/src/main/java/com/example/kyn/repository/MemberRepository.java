package com.example.kyn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.kyn.model.Member;

public interface MemberRepository extends JpaRepository<Member ,Long>{
	 @Query("SELECT p FROM Caregiver p JOIN p.userId u WHERE u.userId = :userId")
	    Member getMemberByUserId(@Param("userId")Long userId);
}
