package com.carRentalService.gantavya.controller;

import com.carRentalService.gantavya.constants.PathConstant;
import com.carRentalService.gantavya.dto.VehicleDto;
import com.carRentalService.gantavya.request.vehicle.VehicleCreateRequest;
import com.carRentalService.gantavya.request.vehicle.VehicleModifyRequest;
import com.carRentalService.gantavya.request.vehicle.VehicleRequest;
import com.carRentalService.gantavya.response.SearchResponse;
import com.carRentalService.gantavya.response.ServerResponse;
import com.carRentalService.gantavya.service.VehicleService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@Validated
@RequestMapping(PathConstant.GANTAVYA_ADMIN + PathConstant.VEHICLE)
public class VehicleController {

    @Autowired
    VehicleService vehicleService;

    @GetMapping(PathConstant.FETCH_ALL_VEHICLES)
    public  ResponseEntity<SearchResponse> fetchAllVehicle(
            @RequestParam Map<String, String> allRequestParams,
            @RequestParam(required = false) String vehicleType
    ){
        return vehicleService.fetchAllVehicle(allRequestParams);
    }

    @PostMapping(PathConstant.CREATE_VEHICLE)
    public ResponseEntity<ServerResponse> createVehicle(
             @Valid @ModelAttribute VehicleCreateRequest vehicleCreateRequest) {
        return this.vehicleService.createVehicle(vehicleCreateRequest);
    }

    @PostMapping(PathConstant.MODIFY_VEHICLE)
    public ResponseEntity<ServerResponse> modifyVehicle(
            @Valid @ModelAttribute VehicleModifyRequest vehicleModifyRequest){
        return vehicleService.modifyVehicle(vehicleModifyRequest);
    }

    @PostMapping(PathConstant.DETAIL_VEHICLE)
    public ResponseEntity<VehicleDto> getVehicleById(
            @RequestBody @Valid VehicleRequest vehicleRequest){
        return vehicleService.getVehicleById(vehicleRequest.getId());
    }


}
