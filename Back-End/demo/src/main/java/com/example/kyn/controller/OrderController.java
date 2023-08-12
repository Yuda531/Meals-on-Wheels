package com.example.kyn.controller;

import com.example.kyn.DTO.OrderDTO;
import com.example.kyn.model.Member;
import com.example.kyn.model.Order;
import com.example.kyn.model.Partner;
import com.example.kyn.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrderController {
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/new")
    public ResponseEntity<Order> saveOrder(@RequestBody OrderDTO orderDTO) {
        Order order = orderDTO.getOrder();
        Member member = orderDTO.getMember();
        Partner partner = orderDTO.getPartner();

        order.setOrderDestinationLat(member.getLatitude());
        order.setOrderDestinationLng(member.getLongitude());
        order.setOrderLocationLat(partner.getLatitude());
        order.setOrderLocationLng(partner.getLongitude());

        double lat1 = member.getLatitude();
        double lon1 = member.getLongitude();
        double lat2 = partner.getLatitude();
        double lon2 = partner.getLongitude();

        order.setOrderDistance(orderService.calculateDistance(lat1,lon1,lat2,lon2));

        double orderDistance = order.getOrderDistance();
        if (orderDistance > 10.00){
            order.setMoreThanTenKm(true);
        }
        if(order.isMoreThanTenKm()){
            order.setFrozenFood(true);
        }

        Order savedOrder = orderService.saveOrder(order);

        return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
    }
}
