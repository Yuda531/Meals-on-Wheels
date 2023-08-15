package com.example.kyn.DTO;

import com.example.kyn.model.Meals;
import com.example.kyn.model.Member;
import com.example.kyn.model.Order;
import com.example.kyn.model.Partner;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Setter;

@Data
@AllArgsConstructor
@Setter
public class OrderDTO {
    private Long userId;
    private MemberDTO member;
    private PartnerDTO partner;
    private Meals meals;
}
