package com.example.mow.repository;

import com.example.mow.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findAll();
    Optional<Order> findByOrderName(String name);

    List<Order> findByOrderMaker(String orderMaker);
}
