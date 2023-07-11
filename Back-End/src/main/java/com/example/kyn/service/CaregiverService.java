package com.example.kyn.service;

import com.example.kyn.model.Caregiver;
import com.example.kyn.model.User;
import com.example.kyn.repository.CaregiverRepository;
import com.example.kyn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CaregiverService {
    @Autowired
    private CaregiverRepository caregiverRepository;
    @Autowired
    private final UserRepository userRepository;


    public CaregiverService(CaregiverRepository caregiverRepository, UserRepository userRepository, UserService userService) {
        this.userRepository = userRepository;
        this.caregiverRepository = caregiverRepository;
    }


    public Caregiver save(Caregiver caregiver) {
        return caregiverRepository.save(caregiver);
    }

    public Caregiver findDriverByUserId(Long userId){
        return caregiverRepository.getDriverByUserId(userId);
    }

//    public Caregiver findDriverByName(User user){
//        return caregiverRepository.findDriverByName(user).get();
//    }



}
