package com.carRentalService.gantavya.response;

import lombok.Data;

import java.io.Serializable;

@Data
public class SearchResponse implements Serializable {

    private Object searchedDataList;
    private Long totalCount;
    private Integer totalPages;
}
