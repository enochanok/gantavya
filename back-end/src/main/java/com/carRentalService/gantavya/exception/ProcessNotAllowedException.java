package com.carRentalService.gantavya.exception;

import org.springframework.http.HttpStatus;

public class ProcessNotAllowedException extends GantavyaException {

    public ProcessNotAllowedException(String message) {
        super(message);
    }

    @Override
    public HttpStatus getHttpStatus() {
        return HttpStatus.CONFLICT;
    }
}
