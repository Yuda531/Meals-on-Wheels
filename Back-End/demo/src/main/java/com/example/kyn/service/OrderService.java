package com.example.kyn.service;

import com.example.kyn.model.Member;
import com.example.kyn.model.Order;
import com.example.kyn.model.Partner;
import com.example.kyn.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class OrderService {
    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order saveOrder(Order order){
        return orderRepository.save(order);
    }

    public double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
        final double EARTH_RADIUS = 6371;

        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);

        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2)) *
                        Math.sin(dLon / 2) * Math.sin(dLon / 2);

        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return EARTH_RADIUS * c; // Distance in kilometers
    }

    // You can also use this method to calculate distance between two orders
    public double calculateDistanceBetweenOrders(Member member, Partner partner) {
        double lat1 = member.getLatitude();
        double lon1 = member.getLongitude();
        double lat2 = partner.getLatitude();
        double lon2 = partner.getLongitude();

        return calculateDistance(lat1, lon1, lat2, lon2);
    }
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }

    public Optional<Order> getOrderByOrderName(String name) {
        return orderRepository.findByOrderName(name);
    }

    public List<Order> getOrdersByOrderMaker(String orderMaker) {
        return orderRepository.findByOrderMaker(orderMaker);
    }

}
