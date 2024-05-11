package com.carRentalService.gantavya.service;

import com.carRentalService.gantavya.request.user.LoginRequest;
import com.carRentalService.gantavya.request.user.UserCreateRequest;
import com.carRentalService.gantavya.request.user.UserUpdateRequest;
import com.carRentalService.gantavya.response.ServerResponse;
import org.springframework.http.ResponseEntity;

public interface UserService {
    ResponseEntity<ServerResponse> createUser(UserCreateRequest userCreateRequest);
    ResponseEntity<ServerResponse> updateUser(Integer id, UserUpdateRequest userUpdateRequest);
    ResponseEntity<ServerResponse> getUserById(Integer id);
    ResponseEntity<ServerResponse> getAllUsers();
    ResponseEntity<ServerResponse> loginUser(LoginRequest loginRequest);

}