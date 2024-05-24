package com.carRentalService.gantavya.request.booking;

import lombok.Data;

import java.util.Date;

@Data
public class BookingCreateRequest {
    private Integer userId;
    private Integer vehicleId;
    private Date startDate;
    private Date endDate;
    private String bookingStatus;
    private String paymentStatus;
}
