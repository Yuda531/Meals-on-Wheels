package com.example.kyn.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "caregivers")
public class Caregiver {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long driverId;

    @Column()
    private String driverName;

    @Column()
    private String driverPlate;

    @Column(nullable = true)
    private String licenseNumber;

    @Column()
    private boolean isLicensed;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userId")
    private User userId;



}