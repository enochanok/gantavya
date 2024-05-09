package com.carRentalService.gantavya.exception;

import com.carRentalService.gantavya.response.ServerResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class GenericExceptionHandler {

    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<Object> genericException(Exception exception) {
//        log.error("genericException", exception);
        return ServerResponse.exceptionResponse("Error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
