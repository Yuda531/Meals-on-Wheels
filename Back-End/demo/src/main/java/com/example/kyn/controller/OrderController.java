package com.example.kyn.controller;

import com.example.kyn.DTO.OrderRequestDTO;
import com.example.kyn.DTO.OrderResponseDTO;
import com.example.kyn.model.Order;
import com.example.kyn.service.LocationUtils;
import com.example.kyn.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping("/create")
    public ResponseEntity<OrderResponseDTO> createOrder(@RequestBody OrderRequestDTO orderRequest) {
        OrderResponseDTO createdOrder = orderService.createOrder(orderRequest);
        return ResponseEntity.ok(createdOrder);
    }

    @GetMapping("/all")
    public ResponseEntity<List<OrderResponseDTO>> getAllOrders() {
        List<OrderResponseDTO> orders = orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderResponseDTO> getOrderById(@PathVariable Long id) {
        Optional<OrderResponseDTO> order = orderService.getOrderById(id);
        return order.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/byName/{name}")
    public ResponseEntity<OrderResponseDTO> getOrdersByName(@PathVariable String name) {
        Optional<OrderResponseDTO> order = orderService.getOrdersByName(name);
        return order.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
    @GetMapping("/byMaker/{orderMaker}")
    public ResponseEntity<List<OrderResponseDTO>> getOrdersByOrderMaker(@PathVariable String orderMaker) {
        List<OrderResponseDTO> orders = orderService.getOrdersByMaker(orderMaker);
        return ResponseEntity.ok(orders);
    }

    // Add more endpoints and methods as needed
}

