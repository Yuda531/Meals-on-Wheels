package com.example.mow.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Meals {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long meals_id;
	private String meals_name;
	private String meals_description;
	private Integer stock;
	
	public Meals() {

	}

	public Meals(Long meals_id, String meals_name, String meals_description, Integer stock) {
		super();
		this.meals_id = meals_id;
		this.meals_name = meals_name;
		this.meals_description = meals_description;
		this.stock = stock;
	}

	public Long getMeals_id() {
		return meals_id;
	}

	public void setMeals_id(Long meals_id) {
		this.meals_id = meals_id;
	}

	public String getMeals_name() {
		return meals_name;
	}

	public void setMeals_name(String meals_name) {
		this.meals_name = meals_name;
	}

	public String getMeals_description() {
		return meals_description;
	}

	public void setMeals_description(String meals_description) {
		this.meals_description = meals_description;
	}

	public Integer getStock() {
		return stock;
	}

	public void setStock(Integer stock) {
		this.stock = stock;
	}
	
		
	
	
}
