package com.example.kyn.DTO;

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
    private Order order;
    private Member member;
    private Partner partner;
}
