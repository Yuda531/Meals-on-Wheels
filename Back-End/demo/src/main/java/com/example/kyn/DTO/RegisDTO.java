package com.example.kyn.DTO;

import com.example.kyn.model.Caregiver;
import com.example.kyn.model.Donor;
import com.example.kyn.model.Partner;
import lombok.Data;

@Data
public class RegisDTO {
    private UserDTO userDTO;
    private Caregiver caregiver;
    private Partner partner;
    private Donor donor;


}
