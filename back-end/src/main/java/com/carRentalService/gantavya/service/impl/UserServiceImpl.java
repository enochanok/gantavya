package com.carRentalService.gantavya.service.impl;

import com.carRentalService.gantavya.database.entity.Users;
import com.carRentalService.gantavya.database.repo.UserRepo;
import com.carRentalService.gantavya.exception.ValidationException;
import com.carRentalService.gantavya.request.user.LoginRequest;
import com.carRentalService.gantavya.request.user.UserCreateRequest;
import com.carRentalService.gantavya.request.user.UserUpdateRequest;
import com.carRentalService.gantavya.response.ServerResponse;
import com.carRentalService.gantavya.service.UserService;
import com.carRentalService.gantavya.utils.PasswordEncrypt;
import com.carRentalService.gantavya.utils.Validation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepo userRepo;

    @Override
    public ResponseEntity<ServerResponse> createUser(UserCreateRequest userCreateRequest) {
        try {
            validateRequest(userCreateRequest);
            Users user = setterMethodOfUser(userCreateRequest);
            userRepo.save(user);
            return ServerResponse.successResponse("User has been created successfully");
        } catch (Exception e) {
            return ServerResponse.failureResponse("Error while creating user: " + e.getMessage());
        }
    }

    @Override
    public ResponseEntity<ServerResponse> updateUser(Integer id, UserUpdateRequest userUpdateRequest) {
        try {
            Users user = userRepo.findById(id).orElseThrow(() -> new Exception("User not found"));
            if (userUpdateRequest.getFull_name() != null) {
                user.setFull_name(userUpdateRequest.getFull_name());
            }
            if (userUpdateRequest.getEmail() != null) {
                user.setEmail(userUpdateRequest.getEmail());
            }
            if (userUpdateRequest.getPhone_number() != null) {
                user.setPhone_number(userUpdateRequest.getPhone_number());
            }
            userRepo.save(user);
            return ServerResponse.successResponse("User has been updated successfully");
        } catch (Exception e) {
            return ServerResponse.failureResponse("Error while updating user: " + e.getMessage());
        }
    }

    @Override
    public ResponseEntity<ServerResponse> getUserById(Integer id) {
        try {
            Optional<Users> userOptional = userRepo.findById(id);
            if (userOptional.isEmpty()) {
                throw new Exception("User not found");
            }
            Users user = userOptional.get();
            return ServerResponse.successResponse(user);
        } catch (Exception e) {
            return ServerResponse.failureResponse("Error while fetching user: " + e.getMessage());
        }
    }

    @Override
    public ResponseEntity<ServerResponse> getAllUsers() {
        try {
            Iterable<Users> usersIterable = userRepo.findAll();
            List<Users> usersList = new ArrayList<>();
            usersIterable.forEach(usersList::add);
            return ServerResponse.successResponse(usersList);
        } catch (Exception e) {
            return ServerResponse.failureResponse("Error while fetching all users: " + e.getMessage());
        }
    }

    @Override
    public ResponseEntity<ServerResponse> loginUser(LoginRequest loginRequest) {
        try {
            if (!Validation.isEmailValid(loginRequest.getEmail()) ||
                    !Validation.isPasswordValid(loginRequest.getPassword())) {
                throw new ValidationException("Invalid email or password");
            }
            Optional<Users> userOptional = userRepo.findByEmail(loginRequest.getEmail());
            if (userOptional.isEmpty()) {
                throw new Exception("User not found");
            }
            Users user = userOptional.get();
            String hashedInputPassword = PasswordEncrypt.encodePassword(loginRequest.getPassword());
            if (hashedInputPassword != null && !hashedInputPassword.equals(user.getPassword())) {
                return ServerResponse.failureResponse("Incorrect password");
            }
            return ServerResponse.successResponse("Login successful");
        } catch (Exception e) {
            return ServerResponse.failureResponse(e.getMessage());
        }
    }

    private Users setterMethodOfUser(UserCreateRequest userCreateRequest) {
        Users user = new Users();
        user.setFull_name(userCreateRequest.getFull_name());
        user.setEmail(userCreateRequest.getEmail());
        user.setPhone_number(userCreateRequest.getPhone_number());
        user.setPassword(PasswordEncrypt.encodePassword(userCreateRequest.getPassword()));
        return user;
    }

    public static void validateRequest(UserCreateRequest userCreateRequest) {
        if (!Validation.isNameValid(userCreateRequest.getFull_name()) ||
                !Validation.isEmailValid(userCreateRequest.getEmail()) ||
                !Validation.isPasswordValid(userCreateRequest.getPassword())) {
            throw new ValidationException("Validation error");
        }
    }
}
