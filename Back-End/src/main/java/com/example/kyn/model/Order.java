package com.example.kyn.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;


    @Column()
    private String orderName;

    @Column()
    private String orderLocation;

    @Column()
    private String orderDestination;

    @Column()
    private double orderDistance;

    @Column()
    private String orderDescription;

    @Column()
    private boolean moreThanTenKm;

    @Column()
    private boolean isApproved;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId")
    private User userId;





}
