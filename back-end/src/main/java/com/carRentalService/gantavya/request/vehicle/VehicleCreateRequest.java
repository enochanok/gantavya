package com.carRentalService.gantavya.request.vehicle;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class VehicleCreateRequest {
    private String model_name;
    private String vehicle_type;
    private String number_plate;
    @JsonIgnore
    private MultipartFile image;
    private String seat;
    private String door;
    private String luggage;
    private String fuel_type;
    private Integer day_price;
}
