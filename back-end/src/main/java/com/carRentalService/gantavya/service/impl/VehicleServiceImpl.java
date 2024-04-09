package com.carRentalService.gantavya.service.impl;

import com.carRentalService.gantavya.database.dao.VehicleDAO;
import com.carRentalService.gantavya.database.entity.Vehicles;
import com.carRentalService.gantavya.database.repo.VehicleRepo;
import com.carRentalService.gantavya.dto.VehicleDto;
import com.carRentalService.gantavya.request.vehicle.VehicleCreateRequest;
import com.carRentalService.gantavya.request.vehicle.VehicleModifyRequest;
import com.carRentalService.gantavya.response.SearchResponse;
import com.carRentalService.gantavya.response.ServerResponse;
import com.carRentalService.gantavya.service.VehicleService;
import com.carRentalService.gantavya.utils.SearchResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
//@Log4j2
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    VehicleRepo vehicleRepo;

    @Autowired
    VehicleDAO vehicleDAO;


    @Override
    public ResponseEntity<SearchResponse> fetchAllVehicle(Map<String, String> allRequestParams) {
        List<VehicleDto>  vehicleDtos = vehicleDAO.getAllVehicle(allRequestParams);

        Long count = vehicleDAO.getTotalVehicleCount(allRequestParams);
        return SearchResponseUtil.getSearchResponseWithCount(vehicleDtos,count);
    }

    @Override
    public ResponseEntity<ServerResponse> createVehicle(VehicleCreateRequest vehicleCreateRequest) {
        try {
            Vehicles vehicle = setterMethodOfVehicle(vehicleCreateRequest);
            vehicleRepo.save(vehicle);
         return ServerResponse.successResponse("Vehicle has been created successfully");
        } catch(Exception e){
            return ServerResponse.failureResponse(e + "Error while creating");
        }
    }

    private Vehicles setterMethodOfVehicle(VehicleCreateRequest vehicleCreateRequest) {
        Vehicles vehicle = new Vehicles();
        vehicle.setModel_Name(vehicleCreateRequest.getModel_name());
        vehicle.setVehicle_type(vehicleCreateRequest.getVehicle_type());
        vehicle.setSeat(vehicleCreateRequest.getSeat());
        vehicle.setDoor(vehicleCreateRequest.getDoor());
        vehicle.setLuggage(vehicleCreateRequest.getLuggage());
        vehicle.setFuel_type(vehicleCreateRequest.getFuel_type());
        vehicle.setDay_price(vehicleCreateRequest.getDay_price());
        return vehicle;
    }

    @Override
    public ResponseEntity<ServerResponse> modifyVehicle(VehicleModifyRequest vehicleModifyRequest) {
        return null;
    }
}
