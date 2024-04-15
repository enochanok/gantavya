package com.carRentalService.gantavya.database.repo;

import com.carRentalService.gantavya.database.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<Users, Integer> {
}