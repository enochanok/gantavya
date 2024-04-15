package com.carRentalService.gantavya.service.impl;

import com.carRentalService.gantavya.database.entity.Users;
import com.carRentalService.gantavya.database.repo.UserRepo;
import com.carRentalService.gantavya.request.user.UserCreateRequest;
import com.carRentalService.gantavya.response.ServerResponse;
import com.carRentalService.gantavya.service.UserService;
import com.carRentalService.gantavya.utils.PasswordEncrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepo userRepo;


    @Override
    public ResponseEntity<ServerResponse> createUser(UserCreateRequest userCreateRequest) {
        try {
            Users user = setterMethodOfUser(userCreateRequest);
            userRepo.save(user);
            return ServerResponse.successResponse("User has been created successfully");
        } catch(Exception e){
            return ServerResponse.failureResponse(e + "Error while creating");
        }
    }

    private Users setterMethodOfUser(UserCreateRequest userCreateRequest) {
        Users user = new Users();
        user.setFull_name(userCreateRequest.getFull_name());
        user.setEmail(userCreateRequest.getEmail());
        user.setPhone_number(userCreateRequest.getPhone_number());
        user.setPassword(PasswordEncrypt.encodePassword( userCreateRequest.getPassword()));
        return user;
    }


}