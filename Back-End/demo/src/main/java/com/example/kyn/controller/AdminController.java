package com.example.kyn.controller;


import com.example.kyn.model.Donation;
import com.example.kyn.model.Meals;
import com.example.kyn.service.DonationService;
import com.example.kyn.service.MealsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    public DonationService donateService;

    @Autowired
    private MealsService mealsService;

    @PostMapping("add-donate")
    public Donation addDonate(@RequestBody Donation donate) {
        return donateService.saveDonation(donate);
    }

    @GetMapping("/all-donate")
    public List<Donation> findDonation(){
        return donateService.findAllDonation();
    }

    @GetMapping("/find-meals")
    public List<Meals> findMealsByName(@RequestParam(name = "mealsName") String mealsName){
        return mealsService.findMealsByMealsName(mealsName);

    }
    
	@GetMapping("/{mealsId}")
    public Meals findMealsById(@PathVariable Long mealsId) {
        return mealsService.findMealsById(mealsId);
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
