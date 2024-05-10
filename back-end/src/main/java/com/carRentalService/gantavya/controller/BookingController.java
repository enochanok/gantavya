package com.carRentalService.gantavya.controller;

import com.carRentalService.gantavya.constants.PathConstant;
import com.carRentalService.gantavya.request.booking.BookingCreateRequest;
import com.carRentalService.gantavya.response.SearchResponse;
import com.carRentalService.gantavya.response.ServerResponse;
import com.carRentalService.gantavya.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@Validated
@RequestMapping(PathConstant.GANTAVYA_ADMIN + PathConstant.BOOKING)
public class BookingController {

    @Autowired
    BookingService bookingService;

    @GetMapping(PathConstant.FETCH_ALL_BOOKING)
    public ResponseEntity<SearchResponse> fetchAllBooking(
            @RequestParam Map<String, String> allRequestParams
//            @RequestParam(required = false) String vehicleType
    ){
        return bookingService.fetchAllBooking(allRequestParams);
    }

    @PostMapping(PathConstant.CREATE_BOOKING)
    public ResponseEntity<ServerResponse> createBooking(
            @RequestBody BookingCreateRequest bookingCreateRequest) {
        return bookingService.creatingBooking(bookingCreateRequest);
    }
}
