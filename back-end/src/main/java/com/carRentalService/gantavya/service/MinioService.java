package com.carRentalService.gantavya.service;

import io.minio.ObjectWriteResponse;
import io.minio.errors.*;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

public interface MinioService {

    ObjectWriteResponse uploadFile(byte[] file, String bucketName, String fileFullLocation, String contentType) throws ServerException, InsufficientDataException, ErrorResponseException, IOException, NoSuchAlgorithmException, InvalidKeyException, InvalidResponseException, XmlParserException, InternalException;

}
