package com.example.kyn.service;


import com.example.kyn.model.Donor;
import com.example.kyn.repository.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class DonorService {

    private final DonorRepository donorRepo;

    @Autowired
    public DonorService(DonorRepository donorRepo) {
        this.donorRepo = donorRepo;
    }

    public Donor saveDonor(Donor donor){
        return donorRepo.save(donor);
    }


}
