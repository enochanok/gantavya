package com.carRentalService.gantavya.dto;

import lombok.Data;

@Data
public class VehicleDto {

    private Integer id;
    private String modelName;
    private String vehicleType;
    private String numberPlate;
    private String image;
    private String seat;
    private String door;
    private String luggage;
    private String fuelType;
    private Integer dayPrice;
}
