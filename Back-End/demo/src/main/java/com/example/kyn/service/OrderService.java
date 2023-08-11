package com.example.kyn.service;

import com.example.kyn.DTO.OrderRequestDTO;
import com.example.kyn.DTO.OrderResponseDTO;
import com.example.kyn.model.Member;
import com.example.kyn.model.Order;
import com.example.kyn.model.Partner;
import com.example.kyn.repository.MemberRepository;
import com.example.kyn.repository.OrderMapper;
import com.example.kyn.repository.OrderRepository;
import com.example.kyn.repository.PartnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class OrderService {

    private final OrderRepository orderRepository;
    private final MemberRepository memberRepository;
    private final PartnerRepository partnerRepository;
    private final OrderMapper orderMapper;


    @Autowired
    public OrderService(OrderRepository orderRepository, MemberRepository memberRepository, PartnerRepository partnerRepository, OrderMapper orderMapper) {
        this.orderRepository = orderRepository;
        this.memberRepository = memberRepository;
        this.partnerRepository = partnerRepository;
        this.orderMapper = orderMapper;
    }

    public OrderResponseDTO createOrder(OrderRequestDTO orderRequest) {
        Member member = memberRepository.findById(orderRequest.getMemberId())
                .orElseThrow(() -> new EntityNotFoundException("Member not found"));

        Partner partner = partnerRepository.findById(orderRequest.getPartnerId())
                .orElseThrow(() -> new EntityNotFoundException("Partner not found"));

        Order order = orderMapper.toEntity(orderRequest);
        order.setOrderDestinationLat(member.getLatitude());
        order.setOrderDestinationLng(member.getLongitude());
        order.setOrderLocationLat(partner.getLatitude());
        order.setOrderLocationLng(partner.getLongitude());

        // Calculate and set distance
        double distance = calculateDistance(
                partner.getLatitude(), partner.getLongitude(),
                member.getLatitude(), member.getLongitude()
        );
        order.setOrderDistance(distance);

        // Set other fields, save, and return the result
        order.setApproved(false);
        Order savedOrder = orderRepository.save(order);
        return orderMapper.toResponseDto(savedOrder);
    }



    private double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
        final int R = 6371; // Radius of the Earth in kilometers

        double latDistance = Math.toRadians(lat2 - lat1);
        double lonDistance = Math.toRadians(lon2 - lon1);

        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);

        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c; // Distance in kilometers
    }


    public List<OrderResponseDTO> getAllOrders() {
        List<Order> orders = orderRepository.findAll();
        return orders.stream().map(orderMapper::toResponseDto).collect(Collectors.toList());
    }

    public Optional<OrderResponseDTO> getOrderById(Long id) {
        return orderRepository.findById(id).map(orderMapper::toResponseDto);
    }

    public Optional<OrderResponseDTO> getOrdersByName(String name) {
        Optional<Order> order = orderRepository.findByOrderName(name);
        return order.map(orderMapper::toResponseDto);
    }

    public List<OrderResponseDTO> getOrdersByMaker(String orderMaker) {
        List<Order> orders = orderRepository.findByOrderMaker(orderMaker);
        return orders.stream().map(orderMapper::toResponseDto).collect(Collectors.toList());
    }

    // Add more methods as needed
}

