package com.example.kyn.service;

import com.example.kyn.model.Donation;
import com.example.kyn.repository.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
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
