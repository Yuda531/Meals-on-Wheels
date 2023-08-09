package com.example.kyn.controller;


import com.example.kyn.model.Donation;
import com.example.kyn.model.Meals;
import com.example.kyn.model.Member;
import com.example.kyn.model.User;
import com.example.kyn.repository.UserRepository;
import com.example.kyn.service.DonationService;
import com.example.kyn.service.MealsService;
import com.example.kyn.service.MemberService;
import com.example.kyn.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    public DonationService donateService;

    @Autowired
    public MemberService memberService;

    @Autowired
    private MealsService mealsService;

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

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

    @GetMapping("/all-members")
    public List<Member> findAllMember(){
        return memberService.findAllMember() ;
    }

    @DeleteMapping("/delete-members")
    public void deleteMemberById(@RequestParam(name = "memberId") Long memberId) {
        memberService.deleteMemberById(memberId);
    }


    @PutMapping("/approve-user/{userId}")
    public ResponseEntity<String> approveUser(@PathVariable Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setActive(true);
            userRepository.save(user); // Simpan perubahan pada user yang diaktifkan menggunakan userRepository
            return ResponseEntity.ok("User berhasil diapprove");
        } else {
            return ResponseEntity.badRequest().body("User tidak ditemukan");
        }

    }


    @DeleteMapping("/reject-user/{userId}")
    public ResponseEntity<String> rejectUser(@PathVariable Long userId) {
        // Lakukan logika untuk menolak akun user dan menghapus datanya berdasarkan userId
        User user = userService.findUserById(userId);

        if (user != null) {
            userService.deleteUser(user); // Hapus user dari database
            return ResponseEntity.ok("User berhasil direject dan dihapus");
        } else {
            return ResponseEntity.badRequest().body("User tidak ditemukan");
        }
    }



}
