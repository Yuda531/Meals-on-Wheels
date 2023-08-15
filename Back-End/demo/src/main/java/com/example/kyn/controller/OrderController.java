package com.example.kyn.controller;

import com.example.kyn.DTO.MemberDTO;
import com.example.kyn.DTO.OrderDTO;
import com.example.kyn.model.Meals;
import com.example.kyn.model.Member;
import com.example.kyn.model.Order;
import com.example.kyn.model.User;
import com.example.kyn.repository.*;
import com.example.kyn.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrderController {
    private final OrderService orderService;
    private final OrderRepository orderRepository;
    private final MemberRepository memberRepository;
    private final PartnerRepository partnerRepository;
    private final MealsRepository mealsRepo;
    private final UserRepository userRepository;


    @Autowired
    public OrderController(OrderService orderService, OrderRepository orderRepository, MemberRepository memberRepository, PartnerRepository partnerRepository, MealsRepository mealsRepo, UserRepository userRepository) {
        this.orderService = orderService;
        this.orderRepository = orderRepository;
        this.memberRepository = memberRepository;
        this.partnerRepository = partnerRepository;
        this.mealsRepo = mealsRepo;
        this.userRepository = userRepository;
    }

    @PostMapping("/new")
    public ResponseEntity<Order> saveOrder(@RequestBody OrderDTO orderDTO) {
        Optional<Member> idMember = memberRepository.findById(orderDTO.getMember().getMemberId());
        Optional<User> idUser = userRepository.findById(orderDTO.getUserId());
        User orderedUser = idUser.get();

        Meals meals = new Meals();
        Optional<Meals> mealId = mealsRepo.findById(orderDTO.getMeals().getMeals_id());
        List<Meals> mealName = mealsRepo.findMealsByName(meals.getMeals_name());
        Meals mealFromdb = mealId.get();

        if (idMember.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        Member memberFromDb = idMember.get();
        if (idMember == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }


        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setMemberLat(memberFromDb.getLatitude());
        memberDTO.setMemberLong(memberFromDb.getLongitude());


        double lat1 = memberFromDb.getLatitude();
        double lon1 = memberFromDb.getLongitude();

        Order order = new Order();
        order.setUserId(orderedUser.getUserId());
        order.setOrderName(mealFromdb.getMeals_name());
        order.setMealsId(mealFromdb.getMeals_id());
        order.setOrderDestinationLat(memberFromDb.getLatitude());
        order.setOrderDestinationLng(memberFromDb.getLongitude());
        order.setOrderLocationLng(0.00);
        order.setOrderLocationLat(0.00);
        order.setOrderMaker(orderedUser.getName());
        order.setOrderDescription(mealFromdb.getMeals_description());
        order.setOrderDate(LocalDateTime.now());



        Order savedOrder = orderService.saveOrder(order);

        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }

}
