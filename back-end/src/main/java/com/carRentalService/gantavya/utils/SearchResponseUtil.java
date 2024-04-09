package com.carRentalService.gantavya.utils;

import com.carRentalService.gantavya.response.SearchResponse;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class SearchResponseUtil {

    public static ResponseEntity<SearchResponse> getSearchResponse(Object searchedDataDtoList, Page page) {
        SearchResponse searchResponse = new SearchResponse();
        searchResponse.setSearchedDataList(searchedDataDtoList);
        if(page != null) {
            searchResponse.setTotalCount(page.getTotalElements());
            searchResponse.setTotalPages(page.getTotalPages());
        }
        return new ResponseEntity<>(searchResponse, HttpStatus.OK);
    }


    public static ResponseEntity<SearchResponse> getSearchResponseWithCount(Object searchedDataDtoList, Long count) {
        SearchResponse searchResponse = new SearchResponse();
        searchResponse.setSearchedDataList(searchedDataDtoList);
        searchResponse.setTotalCount(count);
        return new ResponseEntity<>(searchResponse, HttpStatus.OK);
    }


}
