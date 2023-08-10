package com.example.kyn.controller;

import com.example.kyn.model.Order;
import com.example.kyn.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/order")
    public ResponseEntity<Order> saveOrder(@RequestBody Order order) {
<<<<<<< HEAD
        // ... (other parts of the method)

        Double orderLocationLat = order.getMember().getLatitude();
        Double orderLocationLng = order.getMember().getLongitude();

        Double orderDestinationLat = order.getPartner().getLatitude();
        Double orderDestinationLng = order.getPartner().getLongitude();

        double distance = LocationUtils.calculateDistance(orderLocationLat, orderLocationLng,
                orderDestinationLat, orderDestinationLng);

        order.setOrderDistance(distance);

=======
>>>>>>> 9caa3eae4414c0d5c05decfb556d7e7101fa0e38
        Order savedOrder = orderService.saveOrder(order);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedOrder);
    }
}