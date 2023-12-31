package com.example.kyn.service;

import com.example.kyn.DTO.MemberDTO;
import com.example.kyn.DTO.PartnerDTO;
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
        Member member = new Member();
        Partner partner = new Partner();
        MemberDTO memberDTO = new MemberDTO();
        PartnerDTO partnerDTO = new PartnerDTO();
        memberDTO.setMemberId(member.getMemberId());
        partnerDTO.setPartnerId(partner.getPartnerId());


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
    public double calculateDistanceBetweenOrders(MemberDTO memberDTO, PartnerDTO partnerDTO) {
        Member member = new Member();
        Partner partner = new Partner();

        memberDTO.setMemberLat(member.getLatitude());
        memberDTO.setMemberLong(member.getLongitude());
        partnerDTO.setPartnerLng(partner.getLongitude());
        partnerDTO.setPartnerLat(partner.getLatitude());

        double lat1 = memberDTO.getMemberLat();
        double lon1 = memberDTO.getMemberLong();
        double lat2 = partnerDTO.getPartnerLat();
        double lon2 = partnerDTO.getPartnerLng();

        return calculateDistance(lat1, lon1, lat2, lon2);
    }
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long orderId) {
        return orderRepository.findById(orderId);
    }

    public Optional<Order> getOrderByOrderName(String name) {
        return orderRepository.findByOrderName(name);
    }

    public List<Order> getOrdersByOrderMaker(String orderMaker) {
        return orderRepository.findByOrderMaker(orderMaker);
    }

}
