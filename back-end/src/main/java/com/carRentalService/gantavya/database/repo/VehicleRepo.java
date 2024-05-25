package com.carRentalService.gantavya.database.repo;

import com.carRentalService.gantavya.database.entity.Vehicles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface VehicleRepo extends JpaRepository<Vehicles, Integer> {

    @Query("SELECT v FROM Vehicles v WHERE v.id = :id")
    Vehicles getVehicleById(Integer id);
}
