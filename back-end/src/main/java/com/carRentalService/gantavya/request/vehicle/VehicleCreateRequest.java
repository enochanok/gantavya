package com.carRentalService.gantavya.request.vehicle;

import lombok.Data;

@Data
public class VehicleCreateRequest {
    private String model_name;
    private String vehicle_type;
    private String number_plate;
    private String seat;
    private String door;
    private String luggage;
    private String fuel_type;
    private Integer day_price;
}
