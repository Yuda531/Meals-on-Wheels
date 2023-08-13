package com.example.kyn.repository;

import com.example.kyn.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.kyn.model.Member;

import java.util.List;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member ,Long>{

    @Query("SELECT m from Member m WHERE m.userId.userId = :userId")
    Member findByUserId(Long userId);
}
