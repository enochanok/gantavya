package com.carRentalService.gantavya.database.dao;

import com.carRentalService.gantavya.dto.VehicleDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface VehicleDAO {
    List<VehicleDto> getAllVehicle(Map<String, String> allRequestParams);

    Long getTotalVehicleCount(Map<String, String> allRequestParams);
}
