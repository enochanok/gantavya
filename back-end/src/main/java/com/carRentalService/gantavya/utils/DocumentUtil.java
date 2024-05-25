package com.carRentalService.gantavya.utils;

import com.carRentalService.gantavya.constants.MinioConstant;
import com.carRentalService.gantavya.exception.ProcessNotAllowedException;
import org.springframework.stereotype.Service;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.net.URLConnection;
import java.util.List;
import java.util.UUID;

@Service
public class DocumentUtil {
    DocumentUtil() {
    }

    public String getMimeTypeFromBytes(byte[] documentByte, List<String> mimeConstants) {
        try {
            InputStream inputStream = new ByteArrayInputStream(documentByte);
            String mimeType = URLConnection.guessContentTypeFromStream(inputStream);
            System.out.println(URLConnection.guessContentTypeFromStream(inputStream));
            if (mimeType == null) {
                throw new ProcessNotAllowedException("Invalid document.");
            }

            if (!mimeConstants.contains(mimeType)) {
                throw new ProcessNotAllowedException("Invalid document.");
            }

            return MinioConstant.imageMap().get(mimeType);

        } catch (Exception e) {
            throw new ProcessNotAllowedException("Invalid document.");
        }
    }

    public String generateVehicleFileName(String mimeType) {
        return "vehicle_" + UUID.randomUUID() + "." + mimeType;
    }

}
