package com.carRentalService.gantavya.converter;

import com.carRentalService.gantavya.database.entity.Vehicles;
import com.carRentalService.gantavya.database.repo.VehicleRepo;
import com.carRentalService.gantavya.dto.VehicleDto;
import com.carRentalService.gantavya.service.VehicleService;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

@Service
public class VehicleDtoConverter {

    @Autowired
            @Lazy
    VehicleService vehicleService;

    @Autowired
    VehicleRepo vehicleRepo;


    public VehicleDto getVehicleDto(Vehicles vehicles) {
        VehicleDto vehicleDto = new VehicleDto();

        vehicleDto.setId(vehicles.getId());
        vehicleDto.setModelName(vehicles.getModel_Name());
        vehicleDto.setVehicleType(vehicles.getVehicle_type());
        vehicleDto.setNumberPlate(vehicles.getNumber_plate());
        vehicleDto.setImage(vehicles.getImage());
        vehicleDto.setDoor(vehicles.getDoor());
        vehicleDto.setSeat(vehicles.getSeat());
        vehicleDto.setLuggage(vehicles.getLuggage());
        vehicleDto.setFuelType(vehicles.getFuel_type());
        vehicleDto.setDayPrice(vehicles.getDay_price());
        return vehicleDto;
    }
}
