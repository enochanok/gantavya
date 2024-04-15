package com.carRentalService.gantavya.request.user;

import lombok.Data;
import com.carRentalService.gantavya.utils.PasswordEncrypt;

@Data
public class UserCreateRequest {
    private String full_name;
    private String email;
    private String phone_number;
    private String password;
}