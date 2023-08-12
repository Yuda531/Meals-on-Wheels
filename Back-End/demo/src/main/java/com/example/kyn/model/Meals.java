package com.example.kyn.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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
