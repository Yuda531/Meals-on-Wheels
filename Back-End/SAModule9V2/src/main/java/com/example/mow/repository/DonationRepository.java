package com.example.mow.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mow.model.Donation;

public interface DonationRepository extends JpaRepository<Donation, Long> {
	
	
	
}
