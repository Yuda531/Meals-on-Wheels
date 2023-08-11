package com.example.kyn.DTO;

import lombok.Data;

@Data
public class OrderResponseDTO {
    private Long orderId;
    private String orderMaker;
    private String orderName;
    private double orderDistance;
}
