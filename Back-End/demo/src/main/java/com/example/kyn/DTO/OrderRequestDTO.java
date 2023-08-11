package com.example.kyn.DTO;

import lombok.Data;

@Data
public class OrderRequestDTO {
    private String orderMaker;
    private String orderName;
    private Long memberId; // Assuming you pass the member's ID from the frontend
    private Long partnerId;
}
