package com.carRentalService.gantavya.exception.handler;

import com.carRentalService.gantavya.response.ServerResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.List;

@ControllerAdvice
public class ApiGlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        String errorMsg;
        List<FieldError> fieldErrors = ex.getBindingResult().getFieldErrors();

        if (fieldErrors != null && !fieldErrors.isEmpty() && fieldErrors.get(0) != null) {
            errorMsg = fieldErrors.get(0).getDefaultMessage();
        } else {
            errorMsg = "Invalid Request";
        }
        return ServerResponse.exceptionResponse(errorMsg, headers, (HttpStatus) status);
    }
}
