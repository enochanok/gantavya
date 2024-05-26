package com.carRentalService.gantavya.database.dao;

import com.carRentalService.gantavya.dto.BookingDto;

import java.util.List;
import java.util.Map;

public interface BookingDAO {
    List<BookingDto> getAllBooking(Map<String, String> allRequestParams);

    Long getTotalBookingCount(Map<String, String> allRequestParams);
}
