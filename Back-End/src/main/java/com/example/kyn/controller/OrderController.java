package com.example.kyn.controller;

import com.example.kyn.model.Order;
import com.example.kyn.repository.OrderRepository;
import com.example.kyn.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class OrderController {

    @Autowired
    public OrderService orderService;

    @Autowired
    public OrderRepository orderRepository;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/order")
    public Order saveOrder(@RequestBody Order order) {
        return orderService.saveOrder(order);
    }

}
