package com.carRentalService.gantavya.database.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "booking")
@Data
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "vehicle_id")
    private Integer vehicleId;

    @Column(name = "user_id")
    private Integer userId;

//    @ManyToOne(fetch = FetchType.LAZY)
//    private Users user;
//
//    @ManyToOne(fetch = FetchType.LAZY)
//    private Vehicles vehicle;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "booking_status")
    private String bookingStatus;

    @Column(name = "payment_status")
    private String paymentStatus;

}
