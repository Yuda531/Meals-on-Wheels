package com.example.kyn.controller;


import com.example.kyn.DTO.OrderDTO;
import com.example.kyn.DTO.PartnerDTO;
import com.example.kyn.model.*;
import com.example.kyn.repository.*;
import com.example.kyn.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    private OrderService orderService;
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private MealsRepository mealsRepository;

    @Autowired
    private PartnerRepository partnerRepository;

    @Autowired
    private MemberRepository memberRepository;


    @PostMapping("/assign-order/{orderId}")
    public ResponseEntity<Order> assignOrder(@PathVariable Long orderId, @RequestBody OrderDTO orderDTO) {
        Optional<Order> selectedOrder = orderService.getOrderById(orderId);
        Optional<Partner> partnerOptional = partnerRepository.findById(orderDTO.getPartner().getPartnerId());

        if (selectedOrder.isEmpty() || partnerOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        Order selectedOrderDetails = selectedOrder.get();
        Partner partnerFromDb = partnerOptional.get();

        selectedOrderDetails.setOrderLocationLat(partnerFromDb.getLatitude());
        selectedOrderDetails.setOrderLocationLng(partnerFromDb.getLongitude());

        double partnerLat = partnerFromDb.getLatitude();
        double partnerLng = partnerFromDb.getLongitude();
        double memberLat = selectedOrderDetails.getOrderDestinationLat();
        double memberLng = selectedOrderDetails.getOrderDestinationLng();

        double orderDistance = orderService.calculateDistance(partnerLat, partnerLng, memberLat, memberLng);
        selectedOrderDetails.setOrderDistance(orderDistance);

        if (orderDistance > 10.00) {
            selectedOrderDetails.setMoreThanTenKm(true);
            selectedOrderDetails.setFrozenFood(true);
        } else {
            selectedOrderDetails.setMoreThanTenKm(false);
            selectedOrderDetails.setFrozenFood(false);
        }

        Order updatedOrder = orderRepository.save(selectedOrderDetails);
        return ResponseEntity.ok(updatedOrder);
    }


    @PostMapping("/add-donate")
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

    @GetMapping("/orderDetails/{orderId}")
    public Optional<Order> getOrderById(@PathVariable Long orderId){
        return orderService.getOrderById(orderId);
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

    @GetMapping("/caregivers/not-active")
    public List<Object[]> getNotActiveCaregivers() {
        Role caregiverRole = userService.findRoleById(3L);
        return userRepository.findCaregiversAndUsersByIsActiveAndRoleId(false, caregiverRole);
    }

    @GetMapping("/caregivers/active")
    public List<Object[]> getActiveCaregivers() {
        Role caregiverRole = userService.findRoleById(3L);
        return userRepository.findCaregiversAndUsersByIsActiveAndRoleId(true, caregiverRole);
    }

    @GetMapping("/partners/not-active")
    public List<Object[]> getNotActivePartners() {
        Role partnerRole = userService.findRoleById(4L);
        return userRepository.findPartnersAndUsersByIsActiveAndRoleId(false, partnerRole);
    }

    @GetMapping("/partners/active")
    public List<Object[]> getActivePartners() {
        Role partnerRole = userService.findRoleById(4L);
        return userRepository.findPartnersAndUsersByIsActiveAndRoleId(true, partnerRole);
    }



}
