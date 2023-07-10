package com.example.mow.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Donation {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long donate_id;
	private String donor_name;
	private String donor_address;
	private Integer donate_amount;
	
	public Donation () {
		
	}

	public Donation(Long donate_id, String donor_name, String donor_address, Integer donate_amount) {
		super();
		this.donate_id = donate_id;
		this.donor_name = donor_name;
		this.donor_address = donor_address;
		this.donate_amount = donate_amount;
	}

	public Long getDonate_id() {
		return donate_id;
	}

	public void setDonate_id(Long donate_id) {
		this.donate_id = donate_id;
	}

	public String getDonor_name() {
		return donor_name;
	}

	public void setDonor_name(String donor_name) {
		this.donor_name = donor_name;
	}

	public String getDonor_address() {
		return donor_address;
	}

	public void setDonor_address(String donor_address) {
		this.donor_address = donor_address;
	}

	public Integer getDonate_amount() {
		return donate_amount;
	}

	public void setDonate_amount(Integer donate_amount) {
		this.donate_amount = donate_amount;
	}
	
	
	
}
