package com.example.kyn.controller;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.example.kyn.controller.AdminController;
import com.example.kyn.model.Meals;

@SpringBootTest
public class DeleteMealsTest {

    @Autowired
    private AdminController adminController;

    @Test
    public void testDeleteMealsById() {
        // Assume mealsId exists in the database
        Long mealsId = 11L;

        // Make sure to handle the response type according to your implementation
        adminController.deleteMealsById(mealsId);

        // Verify that meals with mealsId is deleted
        Meals deletedMeals = adminController.findMealsById(mealsId);
        assertNull(deletedMeals);
    }
}
