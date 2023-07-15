package com.example.kyn.repository;

import com.example.kyn.model.Meals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MealsRepository extends JpaRepository<Meals, Long> {


    @Query("SELECT u FROM Meals u WHERE u.meals_name LIKE %:mealsName% OR u.meals_description LIKE %:mealsName%")
    List<Meals> findMealsByName(String mealsName);
}
