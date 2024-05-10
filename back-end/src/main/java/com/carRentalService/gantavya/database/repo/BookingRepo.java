package com.carRentalService.gantavya.database.repo;

import com.carRentalService.gantavya.database.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepo extends JpaRepository<Booking, Integer> {
}
