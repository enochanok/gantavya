package com.carRentalService.gantavya.database.repo;

import com.carRentalService.gantavya.database.entity.Vehicles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepo extends JpaRepository<Vehicles, Integer> {
}
