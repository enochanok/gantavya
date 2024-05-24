package com.carRentalService.gantavya.controller;

import com.carRentalService.gantavya.constants.PathConstant;
import com.carRentalService.gantavya.request.user.LoginRequest;
import com.carRentalService.gantavya.request.user.UserCreateRequest;
import com.carRentalService.gantavya.request.user.UserUpdateRequest;
import com.carRentalService.gantavya.response.ServerResponse;
import com.carRentalService.gantavya.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    // Update user endpoint
    @PutMapping(PathConstant.MODIFY_USER + "/{id}")
    public ResponseEntity<ServerResponse> updateUser(
            @PathVariable Integer id,
            @RequestBody UserUpdateRequest userUpdateRequest) {
        return userService.updateUser(id, userUpdateRequest);
    }

    // Get user by ID endpoint
    @GetMapping(PathConstant.FETCH_USER_BY_ID + "/{id}")
    public ResponseEntity<ServerResponse> getUserById(@PathVariable Integer id) {
        return userService.getUserById(id);
    }

    // Get all users endpoint
    @GetMapping(PathConstant.FETCH_ALL_USER)
    public ResponseEntity<ServerResponse> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping(PathConstant.LOGIN_USER)
    public ResponseEntity<ServerResponse> loginUser(@RequestBody LoginRequest loginRequest) {
        return userService.loginUser(loginRequest);
    }
}