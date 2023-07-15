package com.example.kyn.controller;
import com.example.kyn.DTO.RegisDTO;
import com.example.kyn.DTO.UserDTO;
import com.example.kyn.model.Role;
import com.example.kyn.model.User;
import com.example.kyn.response.ResponseData;
import com.example.kyn.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    public UserService userService;

    @Autowired
    private CaregiverService caregiverService;

    @Autowired
    private PartnerService partnerService;

    @Autowired
    private DonorService donorService;



    @Autowired
    private JwtUtil jwtUtil;
    @PostMapping("/register")
    public ResponseEntity<ResponseData<RegisDTO>> saveUser(@RequestBody RegisDTO registerRequest) {

        ResponseData<RegisDTO> responseData = new ResponseData<>();
        User newUser = new User();
        Long roleId = registerRequest.getUserDTO().getRoleId();

        if (roleId >= 1 && roleId <= 6) {
            Role role = userService.findRoleById(roleId);
            newUser.setName(registerRequest.getUserDTO().getName());
            newUser.setPassword(registerRequest.getUserDTO().getPassword());
            newUser.setEmail(registerRequest.getUserDTO().getEmail());
            newUser.setRoleId(role);

            if (roleId == 2 || roleId == 5) {
                newUser.setActive(true);
            }
            if (roleId == 3 && registerRequest.getCaregiver() == null){
                throw new IllegalArgumentException("Role details not provided");
//

            }
            if (roleId == 5 && registerRequest.getDonor() == null){
                throw new IllegalArgumentException("Role details not provided");
            }
            userService.saveUser(newUser);

            if(roleId == 3){
                newUser.setActive(false);
//                boolean isLicensed = registerRequest.getCaregiver().isLicensed();
                if(registerRequest.getCaregiver().getLicenseNumber() == ""){
                    registerRequest.getCaregiver().setLicensed(false);
                } else {
                    registerRequest.getCaregiver().setLicensed(true);
                }
                registerRequest.getCaregiver().setUserId(newUser);
                caregiverService.save(registerRequest.getCaregiver());
            }
            if(roleId == 4){

//                METODE KHUSUS LAIN UNTUK ROLE PARTNER
                newUser.setActive(false);
                registerRequest.getPartner().setUserId(newUser);
                partnerService.savePartner(registerRequest.getPartner());
            }
            if(roleId == 5){
                registerRequest.getDonor().setUserId(newUser);
                donorService.saveDonor(registerRequest.getDonor());
            }
            responseData.setPayLoad(registerRequest);
        } else {
            throw new IllegalArgumentException("Invalid Role ID");
        }

        return ResponseEntity.ok(responseData);
    }












}
