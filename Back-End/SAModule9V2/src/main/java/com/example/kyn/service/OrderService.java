package com.example.kyn.service;

import com.example.kyn.model.Order;
import com.example.kyn.repository.OrderRepository;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public Order saveOrder(Order order) {
        if (order.getOrderDistance() > 10.0){
            order.setMoreThanTenKm(true);
        }
        order.setApproved(false);
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Order getOrderById(Long id) {
        return orderRepository.findById(id).get();
    }

    public Optional<Order> getOrdersByName(String name) {
        return orderRepository.findByOrderName(name);
    }

    public List<Order> getOrderMaker(String orderMaker){
        return orderRepository.findByOrderMaker(orderMaker);
    }
}
