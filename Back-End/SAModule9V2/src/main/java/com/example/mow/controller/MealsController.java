package com.example.mow.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.mow.model.Meals;
import com.example.mow.service.MealsService;

@RestController
@RequestMapping("/meals")
@CrossOrigin(origins = "http://localhost:3000")
public class MealsController {
	
	
	@Autowired
	private MealsService mealsService;
	
	
	@GetMapping("/find-meals")
	public List<Meals> findMealsByName(@RequestParam(name = "mealsName") String mealsName){
		return mealsService.findMealsByMealsName(mealsName);
		
	}
	
	@GetMapping("/all-meals")
	public List<Meals> findMealsByName(){
		return mealsService.findAllMeals();
		
	}
	
	@PostMapping("/add-meals")
	public Meals addMeals(@RequestBody Meals meals){
		return mealsService.saveMeals(meals);
		
	}
	
	
	@DeleteMapping("/delete-meals")
    public void deleteMealsById(@RequestParam(name = "mealsId") Long mealsId) {
        mealsService.deleteMealsById(mealsId);
    }
	
	@PutMapping("/edit-meals/{mealsId}")
    public Meals editMeals(@PathVariable Long mealsId, @RequestBody Meals updatedMeals) {
        Meals existingMeals = mealsService.findMealsById(mealsId);
        if (existingMeals == null) {
            // Return appropriate response or throw exception for not found
        }

        existingMeals.setMeals_name(updatedMeals.getMeals_name());
        existingMeals.setMeals_description(updatedMeals.getMeals_description());
        existingMeals.setStock(updatedMeals.getStock());
        // Set other fields as needed

        return mealsService.saveMeals(existingMeals);
    }
	

}
