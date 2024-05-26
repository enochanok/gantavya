package com.carRentalService.gantavya.database.dao.impl;

import com.carRentalService.gantavya.database.dao.BookingDAO;
import com.carRentalService.gantavya.dto.BookingDto;
import com.carRentalService.gantavya.dto.VehicleDto;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.hibernate.query.NativeQuery;
import org.hibernate.transform.Transformers;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BookingDAOImpl implements BookingDAO {

    @PersistenceContext()
    private EntityManager em;
    private static final Logger logger = LoggerFactory.getLogger(BookingDAOImpl.class);

    @Override
    public List<BookingDto> getAllBooking(Map<String, String> allRequestParams) {
        try {
            String queryString = "SELECT"
                    + " b.id as id,"
                    + " b.user_id as userId,"
                    + " b.vehicle_id as vehicleId,"
                    + " b.start_date as startDate,"
                    + " b.end_date as endDate,"
                    + " b.booking_status as bookingStatus,"
                    + " b.payment_status as paymentStatus"
                    + " FROM booking b"
                    + " LEFT JOIN user u ON(b.user_id = u.id)"
                    + " LEFT JOIN vehicle v ON(b.vehicle_id = v.id)";
            logger.info("Generated SQL Query: {}", queryString);
            queryString = getSearchCriteriaQuery(allRequestParams, queryString);
            queryString += " ORDER BY b.id";
            Query sqlQuery = this.em.createNativeQuery(queryString);
            setQueryParameters(sqlQuery, allRequestParams);
            NativeQuery nativeQuery = sqlQuery.unwrap(NativeQuery.class);
            Query query = nativeQuery.setResultTransformer(Transformers.aliasToBean(BookingDto.class));
            List<BookingDto> bookingDtoList = query.getResultList();
            return bookingDtoList;
        } catch (Exception e) {
            logger.error("Error retrieving booking: {}", e.getMessage(), e);
            return new ArrayList<>();
        }
    }

    private String getSearchCriteriaQuery(Map<String, String> allRequestParams, String queryString) {
        return queryString;
    }

    private void setQueryParameters(Query sqlQuery, Map<String, String> allRequestParams) {
        // Implement your parameter setting logic here
    }

    @Override
    public Long getTotalBookingCount(Map<String, String> allRequestParams) {
        try {
            String queryString = "SELECT"
                    + " count(b.id) as totalCount"
                    + " FROM booking b";
            queryString = getSearchCriteriaQuery(allRequestParams, queryString);
            Query sqlQuery = this.em.createNativeQuery(queryString);
            setQueryParameters(sqlQuery, allRequestParams);
            Object result = sqlQuery.getSingleResult();
            return Long.parseLong(String.valueOf(result));
        } catch (Exception e) {
            logger.error("Error retrieving booking count: {}", e.getMessage(), e);
            return 0L;
        }
    }
}
