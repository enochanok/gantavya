package com.carRentalService.gantavya.service.impl;

import com.carRentalService.gantavya.database.dao.BookingDAO;
import com.carRentalService.gantavya.database.entity.Booking;
import com.carRentalService.gantavya.database.entity.Users;
import com.carRentalService.gantavya.database.entity.Vehicles;
import com.carRentalService.gantavya.database.repo.BookingRepo;
import com.carRentalService.gantavya.database.repo.UserRepo;
import com.carRentalService.gantavya.database.repo.VehicleRepo;
import com.carRentalService.gantavya.dto.BookingDto;
import com.carRentalService.gantavya.dto.VehicleDto;
import com.carRentalService.gantavya.request.booking.BookingCreateRequest;
import com.carRentalService.gantavya.response.SearchResponse;
import com.carRentalService.gantavya.response.ServerResponse;
import com.carRentalService.gantavya.service.BookingService;
import com.carRentalService.gantavya.utils.SearchResponseUtil;
import org.hibernate.annotations.Array;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class BookingServiceImpl implements BookingService {


    @Autowired
    BookingRepo bookingRepo;

    @Autowired
    BookingDAO bookingDAO;

    @Autowired
    UserRepo userRepo;

    @Autowired
    VehicleRepo vehicleRepo;



    @Override
    public ResponseEntity<SearchResponse> fetchAllBooking(Map<String, String> allRequestParams) {
        List<BookingDto> bookingDtos = bookingDAO.getAllBooking(allRequestParams);
        Long count = bookingDAO.getTotalBookingCount(allRequestParams);
        return SearchResponseUtil.getSearchResponseWithCount(bookingDtos, count);
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
//        if(bookingCreateRequest.getUserId()!=null){
//            Optional<Users> users = userRepo.findById(bookingCreateRequest.getUserId());
//            users.ifPresent(booking::setUserId);
//        }
//
//        if(bookingCreateRequest.getVehicleId()!=null){
//            Optional<Vehicles> vehicles = vehicleRepo.findById(bookingCreateRequest.getVehicleId());
//            vehicles.ifPresent(booking::setVehicle);
//        }
        booking.setUserId(bookingCreateRequest.getUserId());
        booking.setVehicleId(bookingCreateRequest.getVehicleId());
        booking.setStartDate(bookingCreateRequest.getStartDate());
        booking.setEndDate(bookingCreateRequest.getEndDate());
        booking.setBookingStatus(bookingCreateRequest.getBookingStatus());
        booking.setPaymentStatus(bookingCreateRequest.getPaymentStatus());
        return booking;
    }
}

