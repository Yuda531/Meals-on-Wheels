package com.example.mow.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mow.model.Donation;
import com.example.mow.repository.DonationRepository;

@Service
@Transactional
public class DonationService {
	
	private final DonationRepository donateRepo;
	
	@Autowired
	public DonationService(DonationRepository donateRepo) {
		this.donateRepo = donateRepo;
	}
	
	public Donation saveDonation(Donation donate) {
		return donateRepo.save(donate);
	}
	
	public List<Donation> findAllDonation(){
		return donateRepo.findAll();
	}

}
