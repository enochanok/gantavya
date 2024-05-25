package com.carRentalService.gantavya.request.vehicle;
import com.carRentalService.gantavya.constants.ValidationConstant;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class VehicleModifyRequest {
//    @NotEmpty(message = "Please enter vehicle id.")
//    @Pattern(regexp = ValidationConstant.ID_PATTERN, message = "Please enter valid vehicle id.")
    private Integer id;

    @NotEmpty(message ="{vehicleModelName.not.empty}")
    @Size(min = 2 , max = 15, message = "{vehicle.length}")
    @Pattern(regexp = ValidationConstant.ALPHA_REGEX_ONLY_ONE_WORD_WITHOUT_SPACE, message = "{vehicle.pattern}")
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
