package com.carRentalService.gantavya.exception;

import org.springframework.http.HttpStatus;

public class GantavyaException extends RuntimeException{

    public GantavyaException(String message) {
        super(message);
    }

    public HttpStatus getHttpStatus() {
        return HttpStatus.CONFLICT;
    }

}
