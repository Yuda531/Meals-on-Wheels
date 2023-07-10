package com.example.mow.model;

import javax.persistence.*;

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

    @Column()
    private String orderMaker;

    public Order() {
    }

    public Order(Long orderId, String orderName, String orderLocation, double orderDistance, String orderDescription, boolean moreThanTenKm, boolean isApproved, String orderMaker, String orderDestination) {
        this.orderId = orderId;
        this.orderName = orderName;
        this.orderLocation = orderLocation;
        this.orderDistance = orderDistance;
        this.orderDescription = orderDescription;
        this.moreThanTenKm = moreThanTenKm;
        this.isApproved = isApproved;
        this.orderMaker = orderMaker;
        this.orderDestination = orderDestination;
    }

    public String getOrderDestination() {
        return orderDestination;
    }

    public void setOrderDestination(String orderDestination) {
        this.orderDestination = orderDestination;
    }


    public String getOrderMaker() {
        return orderMaker;
    }

    public void setOrderMaker(String orderMaker) {
        this.orderMaker = orderMaker;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public String getOrderName() {
        return orderName;
    }

    public void setOrderName(String orderName) {
        this.orderName = orderName;
    }

    public String getOrderLocation() {
        return orderLocation;
    }

    public void setOrderLocation(String orderLocation) {
        this.orderLocation = orderLocation;
    }

    public double getOrderDistance() {
        return orderDistance;
    }

    public void setOrderDistance(double orderDistance) {
        this.orderDistance = orderDistance;
    }

    public String getOrderDescription() {
        return orderDescription;
    }

    public void setOrderDescription(String orderDescription) {
        this.orderDescription = orderDescription;
    }

    public boolean isMoreThanTenKm() {
        return moreThanTenKm;
    }

    public void setMoreThanTenKm(boolean moreThanTenKm) {
        this.moreThanTenKm = moreThanTenKm;
    }

    public boolean isApproved() {
        return isApproved;
    }

    public void setApproved(boolean approved) {
        isApproved = approved;
    }




}
