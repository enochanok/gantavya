package com.carRentalService.gantavya.configuration;

import io.minio.MinioClient;
//import lombok.Value;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@Log4j2
public class MinioConfig {

    @Value("${minio.url}")
    private String url;


    @Value("${minio.access.name}")
    private String accessKey;

    @Value("${minio.access.secret}")
    private String accessSecret;

    @Bean
    public MinioClient minioClient() {
        if (url == null){
            log.error("Minio URL is null");
        }

        if (accessKey == null) {
            log.error("Minio accessKey is null");
        }

        if (accessSecret == null) {
            log.error("Minio secretKey is null");
        }


        MinioClient client = MinioClient
                .builder()
                .endpoint(url)
                .credentials(accessKey, accessSecret)
                .build();
        return client;


//        return MinioClient.builder()
//                .endpoint(url)
//                .credentials(accessKey, accessSecret)
//                .build();

    }


}
