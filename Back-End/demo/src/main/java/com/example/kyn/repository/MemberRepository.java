package com.example.kyn.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.kyn.model.Member;

import java.util.List;

public interface MemberRepository extends JpaRepository<Member ,Long>{

}
