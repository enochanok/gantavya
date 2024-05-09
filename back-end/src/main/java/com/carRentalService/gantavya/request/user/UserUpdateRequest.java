package com.carRentalService.gantavya.request.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserUpdateRequest {
    private String full_name;
    private String email;
    private String phone_number;
    private String password;
}