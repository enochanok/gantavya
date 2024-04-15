package com.carRentalService.gantavya.service;

import com.carRentalService.gantavya.request.user.UserCreateRequest;
import com.carRentalService.gantavya.response.ServerResponse;
import org.springframework.http.ResponseEntity;

public interface UserService {
    ResponseEntity<ServerResponse> createUser(UserCreateRequest userCreateRequest);
}