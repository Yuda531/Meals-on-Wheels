package com.example.kyn.controller;

import com.example.kyn.DTO.MemberDTO;
import com.example.kyn.DTO.OrderDTO;
import com.example.kyn.DTO.PartnerDTO;
import com.example.kyn.model.Meals;
import com.example.kyn.model.Member;
import com.example.kyn.model.Order;
import com.example.kyn.model.Partner;
import com.example.kyn.repository.MealsRepository;
import com.example.kyn.repository.MemberRepository;
import com.example.kyn.repository.OrderRepository;
import com.example.kyn.repository.PartnerRepository;
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


    @Autowired
    public OrderController(OrderService orderService, OrderRepository orderRepository, MemberRepository memberRepository, PartnerRepository partnerRepository, MealsRepository mealsRepo) {
        this.orderService = orderService;
        this.orderRepository = orderRepository;
        this.memberRepository = memberRepository;
        this.partnerRepository = partnerRepository;
        this.mealsRepo = mealsRepo;
    }

    @PostMapping("/new")
    public ResponseEntity<Order> saveOrder(@RequestBody OrderDTO orderDTO) {

        Optional<Member> idMember = memberRepository.findById(orderDTO.getMember().getMemberId());
        Optional<Partner> idPartner = partnerRepository.findById(orderDTO.getPartner().getPartnerId());

        Meals meals = new Meals();
        Optional<Meals> mealId = mealsRepo.findById(orderDTO.getMeals().getMeals_id());
        List<Meals> mealName = mealsRepo.findMealsByName(meals.getMeals_name());
        Meals mealFromdb = mealId.get();

        if (idMember.isEmpty() || idPartner.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        Member memberFromDb = idMember.get();
        Partner partnerFromDb = idPartner.get();

        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setMemberId(memberFromDb.getMemberId());
        memberDTO.setMemberLat(memberFromDb.getLatitude());
        memberDTO.setMemberLong(memberFromDb.getLongitude());

        PartnerDTO partnerDTO = new PartnerDTO();
        partnerDTO.setPartnerId(partnerFromDb.getPartnerId());
        partnerDTO.setPartnerLat(partnerFromDb.getLatitude());
        partnerDTO.setPartnerLng(partnerFromDb.getLongitude());

        // Calculate distance using coordinates
        double lat1 = memberFromDb.getLatitude();
        double lon1 = memberFromDb.getLongitude();
        double lat2 = partnerFromDb.getLatitude();
        double lon2 = partnerFromDb.getLongitude();

        double orderDistance = orderService.calculateDistance(lat1, lon1, lat2, lon2);

        Order order = new Order();
        order.setOrderName(mealFromdb.getMeals_name());
        order.setMealsId(mealFromdb.getMeals_id());
        order.setOrderDestinationLat(memberFromDb.getLatitude());
        order.setOrderDestinationLng(memberFromDb.getLongitude());
        order.setOrderLocationLat(partnerFromDb.getLatitude());
        order.setOrderLocationLng(partnerFromDb.getLongitude());
        order.setOrderDistance(orderDistance);
        order.setOrderMaker(memberFromDb.getUserId().getName());
        order.setOrderDescription(mealFromdb.getMeals_description());
        order.setOrderDate(LocalDateTime.now());
        order.setUserId(memberFromDb.getUserId());

        if (orderDistance > 10.00) {
            order.setMoreThanTenKm(true);
        }

        if (order.isMoreThanTenKm()) {
            order.setFrozenFood(true);
        }

        Order savedOrder = orderService.saveOrder(order);

        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }

}
