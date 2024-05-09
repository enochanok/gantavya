package com.carRentalService.gantavya.service.impl;

import com.carRentalService.gantavya.database.entity.Users;
import com.carRentalService.gantavya.database.repo.UserRepo;
import com.carRentalService.gantavya.exception.ValidationException;
import com.carRentalService.gantavya.request.user.UserCreateRequest;
import com.carRentalService.gantavya.request.user.UserUpdateRequest;
import com.carRentalService.gantavya.response.ServerResponse;
import com.carRentalService.gantavya.service.UserService;
import com.carRentalService.gantavya.utils.PasswordEncrypt;
import com.carRentalService.gantavya.utils.Validation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

    @Override
    public ResponseEntity<ServerResponse> updateUser(Integer id, UserUpdateRequest userUpdateRequest) {
        try {
            // Find user by id
            Users user = userRepo.findById(id).orElseThrow(() -> new Exception("User not found"));

            // Update user details with request data (if provided)
            if (userUpdateRequest.getFull_name() != null) {
                user.setFull_name(userUpdateRequest.getFull_name());
            }
            if (userUpdateRequest.getEmail() != null) {
                user.setEmail(userUpdateRequest.getEmail());
            }
            if (userUpdateRequest.getPhone_number() != null) {
                user.setPhone_number(userUpdateRequest.getPhone_number());
            }
            // Save updated user to database
            userRepo.save(user);
            return ServerResponse.successResponse("User has been updated successfully");
        } catch (Exception e) {
            return ServerResponse.failureResponse(e + "Error while updating user");
        }
    }

    @Override
    public ResponseEntity<ServerResponse> getUserById(Integer id) {
        try {
            // Find user by id
            Optional<Users> userOptional = userRepo.findById(id);
            if (userOptional.isEmpty()) {
                throw new Exception("User not found");
            }
            Users user = userOptional.get();
            return ServerResponse.successResponse(user.toString()); // Modify response as needed
        } catch (Exception e) {
            return ServerResponse.failureResponse(e + "Error while fetching user");
        }
    }

    @Override
    public ResponseEntity<ServerResponse> getAllUsers() {
        try {
            // Get all users from database
            Iterable<Users> users = userRepo.findAll();
            // You can iterate through users and build a response object
            StringBuilder userList = new StringBuilder();
            for (Users user : users) {
                userList.append(user.toString()).append("\n"); // Modify response as needed
            }
            return ServerResponse.successResponse(userList.toString());
        } catch (Exception e) {
            return ServerResponse.failureResponse(e + "Error while fetching all users");
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