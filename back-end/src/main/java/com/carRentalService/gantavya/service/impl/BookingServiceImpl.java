package com.carRentalService.gantavya.service.impl;

import com.carRentalService.gantavya.database.entity.Booking;
import com.carRentalService.gantavya.database.entity.Vehicles;
import com.carRentalService.gantavya.database.repo.BookingRepo;
import com.carRentalService.gantavya.request.booking.BookingCreateRequest;
import com.carRentalService.gantavya.response.SearchResponse;
import com.carRentalService.gantavya.response.ServerResponse;
import com.carRentalService.gantavya.service.BookingService;
import org.hibernate.annotations.Array;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class BookingServiceImpl implements BookingService {


    @Autowired
    BookingRepo bookingRepo;

    @Override
    public ResponseEntity<SearchResponse> fetchAllBooking(Map<String, String> allRequestParams) {
        return null;
    }

    @Override
    public ResponseEntity<ServerResponse> creatingBooking(BookingCreateRequest bookingCreateRequest) {
        try {
            Booking booking = setterMethodOfBooking(bookingCreateRequest);
            bookingRepo.save(booking);
            return ServerResponse.successResponse("Booking has been created successfully");
        } catch(Exception e){
            return ServerResponse.failureResponse(e + "Error while creating");
        }
    }

    private Booking setterMethodOfBooking(BookingCreateRequest bookingCreateRequest) {
        Booking booking = new Booking();
        booking.setUserId(bookingCreateRequest.getUserId());
        booking.setVehicleID(bookingCreateRequest.getVehicleId());
        booking.setStartDate(bookingCreateRequest.getStartDate());
        booking.setEndDate(bookingCreateRequest.getEndDate());
        booking.setBookingStatus(bookingCreateRequest.getBookingStatus());
        booking.setPaymentStatus(bookingCreateRequest.getPaymentStatus());
        return booking;
    }


}

