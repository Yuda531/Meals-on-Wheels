package com.example.kyn.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @Column(name = "order_maker")
    private String orderMaker;

    @Column()
    private String orderName;

    private LocalDateTime orderDate;

//ORDER LOCATION
    @Column()
    private double orderLocationLat;
    @Column()
    private double orderLocationLng;

//ORDER DESTINATION
    @Column()
    private double orderDestinationLat;
    @Column()
    private double orderDestinationLng;

//CALCULATED DISTANCE
    @Column()
    private double orderDistance;

    @Column()
    private String orderDescription;

    @Column()
    private boolean moreThanTenKm;

    @Column()
    private boolean isApproved;

    private boolean frozenFood;

    private Long mealsId;

//    @OneToOne(fetch = FetchType.EAGER)
//    @JoinColumn(name = "userId")
//    private User userId;





}