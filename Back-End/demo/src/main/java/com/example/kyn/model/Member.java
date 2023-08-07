package com.example.kyn.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Member {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long memberId;

	private Integer age;
	private String reason;

	private Double latitude;
	private Double longitude;
	private String road;
	private String village;
	private String subdistrict;
	private String city;
	private String state;
	private String country;
	private String postcode;


	@OneToOne
	@JoinColumn(name = "userId")
	private User userId;

}
