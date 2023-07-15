package com.example.kyn.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Meals {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long meals_id;
    private String meals_name;
    private String meals_description;
    private Integer stock;
}
