package com.example.mow.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mow.model.Donation;
import com.example.mow.service.DonationService;

@RestController
@RequestMapping("/donation")
@CrossOrigin(origins = "http://localhost:3000")
public class DonationController {
	
	@Autowired
	public DonationService donateService;
	
	@PostMapping("add-donate")
	public Donation addDonate(@RequestBody Donation donate) {
		return donateService.saveDonation(donate);
	}
	
	@GetMapping("/all-donate")
	public List<Donation> findDonation(){
		return donateService.findAllDonation();
	}
}
