package com.carRentalService.gantavya.database.dao.impl;

import com.carRentalService.gantavya.database.dao.VehicleDAO;
import com.carRentalService.gantavya.dto.VehicleDto;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.hibernate.query.NativeQuery;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;

@Service
public class VehicleDAOImpl implements VehicleDAO {

    @PersistenceContext()
    private EntityManager em;
    private static final Logger logger = LoggerFactory.getLogger(VehicleDAOImpl.class);


    @Override
    public List<VehicleDto> getAllVehicle(Map<String, String> allRequestParams) {
        try{
            String  queryString = "SELECT"
                    + " v.id as id,"
                    + " v.model_name as modelName,"
                    + " v.vehicle_type as vehicleType,"
                    + " v.number_plate as numberPlate,"
                    + " v.image as image,"
                    + " v.seat as seat,"
                    + " v.door as door,"
                    + " v.luggage as luggage,"
                    + " v.fuel_type as fuelType,"
                    + " v.day_price as dayPrice"
                    + " FROM vehicle v";
            logger.info("Generated SQL Query: {}", queryString);
            queryString = getSearchCriteriaQuery(allRequestParams, queryString);
            queryString += " ORDER BY v.id";
            Query sqlQuery =  this.em.createNativeQuery(queryString);
            setQueryParameters(sqlQuery, allRequestParams);
            NativeQuery nativeQuery = sqlQuery.unwrap(NativeQuery.class);
            Query query = nativeQuery.setResultTransformer(Transformers.aliasToBean(VehicleDto.class));
            List<VehicleDto> vehicleDtoList = query.getResultList();
            return vehicleDtoList;
        }catch (Exception e) {
            logger.error("Error retrieving vehicles: {}", e.getMessage(), e);
            return new ArrayList<>();
        }
    }



    private String getSearchCriteriaQuery(Map<String, String> allRequestParams, String queryString) {
        boolean isFirst = true;
        if (allRequestParams.containsKey("name")) {
            queryString += queryBuilder(isFirst, " d.name LIKE :name");
            isFirst = false;
        }

        if (allRequestParams.containsKey("status")) {
            queryString += queryBuilder(isFirst, " d.status = :status");
            isFirst = false;
        }

        return queryString;
    }

    private String queryBuilder(boolean isFirst, String queryString) {
        String modifiedQueryString = "";
        if (isFirst) {
            modifiedQueryString += " WHERE";
        } else {
            modifiedQueryString += " AND";
        }
        return modifiedQueryString + queryString;
    }

    private Map<String, String> setQueryParameters(Query sqlQuery, Map<String, String> allRequestParams) {
        Map<String, String> parametersMap = new HashMap<>();
        if (allRequestParams.containsKey("vehicle_type")) {
            sqlQuery.setParameter("vehicle_type", allRequestParams.get("vehicle_type") + "%");
            parametersMap.put("vehicle_type", allRequestParams.get("vehicle_type") + "%");
        }
        return parametersMap;
    }


    @Override
    public Long getTotalVehicleCount(Map<String, String> allRequestParams) {
        try{
            String queryString = "SELECT"
                    + " count(v.id) as totalCount"
                    + " FROM vehicle v";
            queryString = getSearchCriteriaQuery(allRequestParams, queryString);
            Query sqlQuery = this.em.createNativeQuery(queryString);
            setQueryParameters(sqlQuery, allRequestParams);
            Object result = sqlQuery.getSingleResult();
            return Long.parseLong(String.valueOf(result));
        } catch (Exception e) {
//            log.error(e);
            return 0L;
        }
    }

}
