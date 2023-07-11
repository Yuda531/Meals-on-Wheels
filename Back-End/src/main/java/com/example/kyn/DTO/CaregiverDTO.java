package com.example.kyn.DTO;

import lombok.Data;

@Data
public class CaregiverDTO {
    private Long driverId;
    private String driverName;
    private String driverPlate;
    private boolean isLicensed;
    private Long userId;


}
