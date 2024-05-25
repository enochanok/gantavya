package com.carRentalService.gantavya.service.impl;

import com.carRentalService.gantavya.configuration.MinioConfig;
import com.carRentalService.gantavya.service.MinioService;
import io.minio.MinioClient;
import io.minio.ObjectWriteResponse;
import io.minio.PutObjectArgs;
import io.minio.errors.*;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;

@Service
@Log4j2
public class MinioServiceImpl implements MinioService {

    private final MinioClient minioClient;

    public MinioServiceImpl(@Autowired(required = false) MinioConfig minioConfig) {
        this.minioClient = minioConfig.minioClient();
    }

    @Override
    public ObjectWriteResponse uploadFile(byte[] file, String bucketName, String fileFullLocation, String contentType) throws ServerException, InsufficientDataException, ErrorResponseException, IOException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException {
        Map<String, String> bucketNameAndFileMap = initializeBucketAndFileName(bucketName, fileFullLocation);
        var uploadObject = minioClient.putObject(
                PutObjectArgs
                        .builder()
                        .bucket(bucketNameAndFileMap.get("bucketName"))
                        .object(bucketNameAndFileMap.get("fileName"))
                        .stream(new ByteArrayInputStream(file), file.length, -1)
                        .contentType(contentType)
                        .build());
        log.info(uploadObject.etag());
        return uploadObject;
    }

    private Map<String, String> initializeBucketAndFileName(String fileFullPath, String fileName) {
        String bucketName = fileFullPath;
        String paths[] = fileFullPath.split("\\/");
        if (paths.length > 1) {
            bucketName = paths[0];
            fileName = fileFullPath.substring(fileFullPath.indexOf("/") + 1, fileFullPath.length()) + "/" + fileName;
        }
        Map<String, String> map = new HashMap<>();
        map.put("bucketName", bucketName);
        map.put("fileName", fileName);
        return map;
    }
}
