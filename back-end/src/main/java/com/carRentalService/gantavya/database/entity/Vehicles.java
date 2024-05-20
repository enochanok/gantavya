package com.carRentalService.gantavya.database.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "vehicle")
@Data
public class Vehicles {
//
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "model_name")
    private String model_Name;

    @Column(name = "vehicle_type")
    private String vehicle_type;

    @Column(name = "number_plate")
    private String number_plate;


    @Column(name = "seat")
    private String seat;

    @Column(name = "door")
    private String door;

    @Column(name = "luggage")
    private String luggage;

    @Column(name = "fuel_type")
    private String fuel_type;

    @Column(name = "day_price")
    private Integer day_price;

}
