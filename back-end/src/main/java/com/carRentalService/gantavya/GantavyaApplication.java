package com.carRentalService.gantavya;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class GantavyaApplication {

	public static void main(String[] args) {
		SpringApplication.run(GantavyaApplication.class, args);
	}
}
