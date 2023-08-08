package com.example.kyn.controller;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.example.kyn.controller.AdminController;
import com.example.kyn.model.Meals;


@SpringBootTest
public class AddMealsTest {
    @Autowired
    private AdminController adminController;

    @Test
    public void testAddMeals() {
        Meals meals = new Meals();
        meals.setMeals_name("Wedang Jahe");
        meals.setMeals_description("Delicious Rempah");
        meals.setStock(32);

        Meals addedMeals = adminController.addMeals(meals);

        assertNotNull(addedMeals);
        assertNotNull(addedMeals.getMeals_id());
        assertEquals(meals.getMeals_name(), addedMeals.getMeals_name());
        // Add more assertions as needed
    }
}
