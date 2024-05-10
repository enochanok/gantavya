package com.carRentalService.gantavya.service;

import com.carRentalService.gantavya.request.booking.BookingCreateRequest;
import com.carRentalService.gantavya.response.SearchResponse;
import com.carRentalService.gantavya.response.ServerResponse;
import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface BookingService {
    
    ResponseEntity<SearchResponse> fetchAllBooking(Map<String, String> allRequestParams);

    ResponseEntity<ServerResponse> creatingBooking(BookingCreateRequest bookingCreateRequest);
}
