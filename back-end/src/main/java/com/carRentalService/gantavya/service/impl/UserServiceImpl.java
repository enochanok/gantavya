package com.carRentalService.gantavya.service.impl;

import com.carRentalService.gantavya.database.entity.Users;
import com.carRentalService.gantavya.database.repo.UserRepo;
import com.carRentalService.gantavya.exception.ValidationException;
import com.carRentalService.gantavya.request.user.UserCreateRequest;
import com.carRentalService.gantavya.response.ServerResponse;
import com.carRentalService.gantavya.service.UserService;
import com.carRentalService.gantavya.utils.PasswordEncrypt;
import com.carRentalService.gantavya.utils.Validation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    // injecting userRepo dependency
    @Autowired
    UserRepo userRepo;

    // Method to create new user
    @Override
    public ResponseEntity<ServerResponse> createUser(UserCreateRequest userCreateRequest) {
        try {
            validateRequest(userCreateRequest);
            //saving user to database
            Users user = setterMethodOfUser(userCreateRequest);
            userRepo.save(user);
            return ServerResponse.successResponse("User has been created successfully");
        } catch(Exception e){
            // In case of failure to create user object and set in database
            return ServerResponse.failureResponse(e + "Error while creating");
        }
    }


    // method to getting user details when creating new user
    private Users setterMethodOfUser(UserCreateRequest userCreateRequest) {
        Users user = new Users();
        user.setFull_name(userCreateRequest.getFull_name());
        user.setEmail(userCreateRequest.getEmail());
        user.setPhone_number(userCreateRequest.getPhone_number());
        user.setPassword(PasswordEncrypt.encodePassword( userCreateRequest.getPassword()));
        return user;
    }

    public static void validateRequest(UserCreateRequest userCreateRequest){
        if (!Validation.isNameValid(userCreateRequest.getFull_name()) ||
                !Validation.isEmailValid(userCreateRequest.getEmail()) ||
                !Validation.isPasswordValid(userCreateRequest.getPassword())) {
            throw new ValidationException("Validation error");
        }
    }


}