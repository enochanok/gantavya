package com.carRentalService.gantavya.service;

import com.carRentalService.gantavya.dto.VehicleDto;
import com.carRentalService.gantavya.request.vehicle.VehicleCreateRequest;
import com.carRentalService.gantavya.request.vehicle.VehicleModifyRequest;
import com.carRentalService.gantavya.response.SearchResponse;
import com.carRentalService.gantavya.response.ServerResponse;
import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface VehicleService {

    /**
     * @param vehicleCreateRequest
     * @return
     */
    ResponseEntity<ServerResponse> createVehicle(VehicleCreateRequest vehicleCreateRequest);

    ResponseEntity<SearchResponse> fetchAllVehicle(Map<String, String> allRequestParams);

    ResponseEntity<ServerResponse> modifyVehicle(VehicleModifyRequest vehicleModifyRequest);

    ResponseEntity<VehicleDto> getVehicleById(Integer id);
}
