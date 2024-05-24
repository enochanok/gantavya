package com.carRentalService.gantavya.response;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ServerResponse {

    private String message;
    private boolean isSuccess;
    private Object data;

    // Add a constructor with data
    public ServerResponse() {}


    public static ResponseEntity<ServerResponse> successResponse(String msg) {
        ServerResponse serverResponse = new ServerResponse();
        serverResponse.setMessage(msg);
        serverResponse.setIsSuccess(true);
        return new ResponseEntity<>(serverResponse, HttpStatus.ACCEPTED);
    }

    // Overloaded method to include data in success response
    public static ResponseEntity<ServerResponse> successResponse(Object data) {
        ServerResponse serverResponse = new ServerResponse();
        serverResponse.setMessage("Success");
        serverResponse.setIsSuccess(true);
        serverResponse.setData(data);
        return new ResponseEntity<>(serverResponse, HttpStatus.OK);
    }

    public static ResponseEntity<ServerResponse> failureResponse(String msg) {
        ServerResponse serverResponse = new ServerResponse();
        serverResponse.setMessage(msg);
        serverResponse.setIsSuccess(false);
        return new ResponseEntity<>(serverResponse, HttpStatus.CONFLICT);
    }

    public static ResponseEntity<Object> exceptionResponse(String msg, HttpStatus httpStatus) {
        ServerResponse serverResponse = new ServerResponse();
        serverResponse.setMessage(msg);
        serverResponse.setIsSuccess(false);
        return new ResponseEntity<>(serverResponse, httpStatus);
    }

    public static ResponseEntity<Object> exceptionResponse(String msg, HttpHeaders headers, HttpStatus httpStatus) {
        ServerResponse serverResponse = new ServerResponse();
        serverResponse.setMessage(msg);
        serverResponse.setIsSuccess(false);
        return new ResponseEntity<>(serverResponse, headers, httpStatus);
    }

    // Getters and Setters
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isIsSuccess() {
        return isSuccess;
    }

    public void setIsSuccess(boolean isSuccess) {
        this.isSuccess = isSuccess;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
