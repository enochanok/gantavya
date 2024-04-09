package com.carRentalService.gantavya.response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ServerResponse {

    private String message;
    private boolean isSuccess;

    public static ResponseEntity<ServerResponse> successResponse(String msg) {
        ServerResponse serverResponse = new ServerResponse();
        serverResponse.setMessage(msg);
        serverResponse.setIsSuccess(true);
        return new ResponseEntity<>(serverResponse, HttpStatus.ACCEPTED);
    }

    public static ResponseEntity<ServerResponse> failureResponse(String msg) {
        ServerResponse serverResponse = new ServerResponse();
        serverResponse.setMessage(msg);
        serverResponse.setIsSuccess(false);
        return new ResponseEntity<>(serverResponse, HttpStatus.CONFLICT);
    }

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

}
