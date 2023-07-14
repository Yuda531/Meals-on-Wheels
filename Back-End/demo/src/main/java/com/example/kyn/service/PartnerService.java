package com.example.kyn.service;

import com.example.kyn.model.Partner;
import com.example.kyn.repository.PartnerRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PartnerService {
    @Autowired
    private final PartnerRepository partnerRepository;

    public Partner savePartner(Partner partner){
        return partnerRepository.save(partner);
    }
}
