package com.carRentalService.gantavya.service.impl;

import com.carRentalService.gantavya.constants.MinioConstant;
import com.carRentalService.gantavya.converter.VehicleDtoConverter;
import com.carRentalService.gantavya.database.dao.VehicleDAO;
import com.carRentalService.gantavya.database.entity.Vehicles;
import com.carRentalService.gantavya.database.repo.VehicleRepo;
import com.carRentalService.gantavya.dto.VehicleDto;
import com.carRentalService.gantavya.exception.ProcessNotAllowedException;
import com.carRentalService.gantavya.request.vehicle.VehicleCreateRequest;
import com.carRentalService.gantavya.request.vehicle.VehicleModifyRequest;
import com.carRentalService.gantavya.response.SearchResponse;
import com.carRentalService.gantavya.response.ServerResponse;
import com.carRentalService.gantavya.service.MinioService;
import com.carRentalService.gantavya.service.VehicleService;
import com.carRentalService.gantavya.utils.DocumentUtil;
import com.carRentalService.gantavya.utils.SearchResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;

@Service
//@Log4j2
public class  VehicleServiceImpl implements VehicleService {

    @Autowired
    VehicleRepo vehicleRepo;

    @Autowired
    VehicleDAO vehicleDAO;

    @Autowired
    DocumentUtil documentUtil;

    @Autowired
    MinioService minioService;

    @Autowired
            @Lazy
    VehicleDtoConverter vehicleDtoConverter;


    @Override
    public ResponseEntity<SearchResponse> fetchAllVehicle(Map<String, String> allRequestParams) {
        List<VehicleDto> vehicleDtos = vehicleDAO.getAllVehicle(allRequestParams);
        for (VehicleDto vehicleDto : vehicleDtos) {
            if (vehicleDto.getImage() != null) {
                vehicleDto.setImage("http://localhost:9000" + "/" + "gantavya" +  "/" +
                        vehicleDto.getImage());
            }
        }
        Long count = vehicleDAO.getTotalVehicleCount(allRequestParams);
        return SearchResponseUtil.getSearchResponseWithCount(vehicleDtos, count);
    }

    @Override
    public ResponseEntity<ServerResponse> createVehicle(VehicleCreateRequest vehicleCreateRequest) {
        try {
            Vehicles vehicle = setterMethodOfVehicle(vehicleCreateRequest);
            vehicleRepo.save(vehicle);
            return ServerResponse.successResponse("Vehicle has been created successfully");
        } catch (Exception e) {
            return ServerResponse.failureResponse(e + "Error while creating");
        }
    }

    private Vehicles setterMethodOfVehicle(VehicleCreateRequest vehicleCreateRequest) {
        String imageURL = null;
        Vehicles vehicle = new Vehicles();
        if (!(vehicleCreateRequest.getImage() == null || vehicleCreateRequest.getImage().isEmpty())) {
            imageURL = this.uploadImage(vehicleCreateRequest);
        }
        vehicle.setModel_Name(vehicleCreateRequest.getModel_name());
        vehicle.setVehicle_type(vehicleCreateRequest.getVehicle_type());
        vehicle.setNumber_plate(vehicleCreateRequest.getNumber_plate());
        vehicle.setSeat(vehicleCreateRequest.getSeat());
        vehicle.setImage(imageURL);
        vehicle.setDoor(vehicleCreateRequest.getDoor());
        vehicle.setLuggage(vehicleCreateRequest.getLuggage());
        vehicle.setFuel_type(vehicleCreateRequest.getFuel_type());
        vehicle.setDay_price(vehicleCreateRequest.getDay_price());
        return vehicle;
    }

    private String uploadImage(VehicleCreateRequest vehicleImage) {
        byte[] fileInStream = new byte[0];
        try {
            fileInStream = vehicleImage.getImage().getBytes();
        } catch (IOException e) {
            throw new ProcessNotAllowedException("Unable to Upload image");
        }
        String fileSize = "1000";
        long fileSizeInBytes = Long.parseLong(fileSize) * 1024;
        if (fileInStream.length > fileSizeInBytes) {
            throw new ProcessNotAllowedException("Please enter valid file, Max Size is " + fileSize + " KB. ");
        }
        //MIME - Multi-purpose Internet Mail Extensions
        String mimeType = documentUtil.getMimeTypeFromBytes(fileInStream, MinioConstant.IMAGE_MIME_CONSTANTS);
        String generatedFileName = null;

        try {
            generatedFileName = documentUtil.generateVehicleFileName(mimeType);
            minioService.uploadFile(
                    fileInStream,
                    "gantavya",
                    generatedFileName,
                    mimeType
            );
        } catch (Exception e) {
            throw new ProcessNotAllowedException("Unable to upload Image");
        }

        return generatedFileName;
    }

    @Override
    public ResponseEntity<ServerResponse> modifyVehicle(VehicleModifyRequest vehicleModifyRequest) {
        Optional<Vehicles> vehicleDetail = vehicleRepo.findById(vehicleModifyRequest.getId());
        if (vehicleDetail.isEmpty()) {
            throw new ProcessNotAllowedException("Unable to modify the vehicle. Vehicle does not exist.");
        }

        vehicleDetail = Optional.of(modifyVehicleSetterProcess(vehicleDetail.get(), vehicleModifyRequest));
        try {
            System.out.println(vehicleDetail);
            vehicleRepo.save(vehicleDetail.get());
            return ServerResponse.successResponse("Vehicle has been modified successfully");
        } catch (Exception e) {
//            log.error("error", e);
            return ServerResponse.failureResponse("Unable to modify vehicle.");
        }
    }



    private Vehicles modifyVehicleSetterProcess(Vehicles vehicleDetails, VehicleModifyRequest vehicleModifyRequest) {
        String imageURL = null;
//        Vehicles vehicles = new Vehicles();
        if (!(vehicleModifyRequest.getImage() == null || vehicleModifyRequest.getImage().isEmpty())) {
            imageURL = this.uploadImages(vehicleModifyRequest);
        }
        vehicleDetails.setModel_Name(vehicleModifyRequest.getModel_name());
        vehicleDetails.setVehicle_type(vehicleModifyRequest.getVehicle_type());
        vehicleDetails.setNumber_plate(vehicleModifyRequest.getNumber_plate());
        vehicleDetails.setSeat(vehicleModifyRequest.getSeat());
        vehicleDetails.setDoor(vehicleModifyRequest.getDoor());
        vehicleDetails.setImage(imageURL);
        vehicleDetails.setLuggage(vehicleModifyRequest.getLuggage());
        vehicleDetails.setFuel_type(vehicleModifyRequest.getFuel_type());
        vehicleDetails.setDay_price(vehicleModifyRequest.getDay_price());
        return vehicleDetails;
    }


    private String uploadImages(VehicleModifyRequest vehicleImage) {
        byte[] fileInStream = new byte[0];
        try {
            fileInStream = vehicleImage.getImage().getBytes();
        } catch (IOException e) {
            throw new ProcessNotAllowedException("Unable to Upload image");
        }
        String fileSize = "1000";
        long fileSizeInBytes = Long.parseLong(fileSize) * 1024;
        if (fileInStream.length > fileSizeInBytes) {
            throw new ProcessNotAllowedException("Please enter valid file, Max Size is " + fileSize + " kb. ");
        }
        //MIME - Multi-purpose Internet Mail Extensions
        String mimeType = documentUtil.getMimeTypeFromBytes(fileInStream, MinioConstant.IMAGE_MIME_CONSTANTS);
        String generatedFileName = null;

        try {
            generatedFileName = documentUtil.generateVehicleFileName(mimeType);
            minioService.uploadFile(
                    fileInStream,
                    "gantavya",
                    generatedFileName,
                    mimeType
            );
        } catch (Exception e) {
            throw new ProcessNotAllowedException("Unable to upload Image");
        }

        return generatedFileName;
    }

    @Override
    public ResponseEntity<VehicleDto> getVehicleById(Integer id) {
        Vehicles vehicles = vehicleRepo.getVehicleById(id);
        
        if (vehicles == null) {
            throw new ProcessNotAllowedException("Vehicle not found");
        }

        VehicleDto vehicleDto = vehicleDtoConverter.getVehicleDto(vehicles);
        return new ResponseEntity<>(vehicleDto, HttpStatus.ACCEPTED);
    }

}
