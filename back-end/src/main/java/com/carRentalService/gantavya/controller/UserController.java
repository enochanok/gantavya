package com.carRentalService.gantavya.controller;

import com.carRentalService.gantavya.constants.PathConstant;
import com.carRentalService.gantavya.request.user.UserCreateRequest;
import com.carRentalService.gantavya.response.ServerResponse;
import com.carRentalService.gantavya.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@Validated
@RequestMapping(PathConstant.GANTAVYA_ADMIN + PathConstant.USER)
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping(PathConstant.CREATE_USER)
    public ResponseEntity<ServerResponse> createUser(
            @RequestBody UserCreateRequest userCreateRequest) {
        return userService.createUser(userCreateRequest);
    }
}