package com.example.kyn.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PartnerDTO {
    private Long partnerId;
    private double partnerLat;
    private double partnerLng;
}
