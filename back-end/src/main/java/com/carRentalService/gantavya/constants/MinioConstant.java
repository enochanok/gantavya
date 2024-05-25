package com.carRentalService.gantavya.constants;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MinioConstant {
    public static final List<String> IMAGE_MIME_CONSTANTS = Arrays.asList("image/jpg","image/jpeg","image/png");

    MinioConstant() {
    }

    public static Map<String, String> imageMap() {
        Map<String, String> imageMap = new HashMap<>();
        imageMap.put("image/png", "png");
        imageMap.put("image/jpeg", "jpeg");
        imageMap.put("image/jpg", "jpg");
        imageMap.put("application/xml", "svg");
        imageMap.put("image/svg+xml", "svg");
        imageMap.put("image/gif", "gif");
        imageMap.put("null", null);
        return imageMap;
    }
}
