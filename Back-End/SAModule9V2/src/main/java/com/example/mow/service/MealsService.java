package com.example.mow.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mow.model.Meals;
import com.example.mow.repository.MealsRepository;

@Service
@Transactional
public class MealsService {

    private final MealsRepository mealsRepo;

    @Autowired
    public MealsService(MealsRepository mealsRepo) {
        this.mealsRepo = mealsRepo;
    }

    public Meals saveMeals(Meals meals) {
        return mealsRepo.save(meals);
    }

    public Meals findMealsById(Long mealsId) {
        Optional<Meals> mealsOptional = mealsRepo.findById(mealsId);
        return mealsOptional.orElse(null);
    }

    public List<Meals> findAllMeals() {
        return mealsRepo.findAll();
    }

    public void deleteMealsById(Long mealsId) {
        mealsRepo.deleteById(mealsId);
    }

    public List<Meals> findMealsByMealsName(String mealsName) {
        return mealsRepo.findMealsByName(mealsName);
    }
}
