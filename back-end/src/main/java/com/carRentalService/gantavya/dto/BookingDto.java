package com.carRentalService.gantavya.dto;

import lombok.Data;

import java.util.Date;

@Data
public class BookingDto {
    private Integer id;
    private Integer userId;
    private Integer vehicleId;
    private Date startDate;
    private Date endDate;
    private String bookingStatus;
    private String paymentStatus;
}
