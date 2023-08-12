package com.example.kyn.mapper;

import com.example.kyn.DTO.OrderRequestDTO;
import com.example.kyn.DTO.OrderResponseDTO;
import com.example.kyn.model.Order;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
@Component
public interface OrderMapper {
    OrderMapper INSTANCE = Mappers.getMapper(OrderMapper.class);

    @Mapping(target = "orderDistance", expression = "java(calculateDistance(source.getOrderLocationLat(), source.getOrderLocationLng(), source.getOrderDestinationLat(), source.getOrderDestinationLng()))")
    OrderResponseDTO toDto(Order source);

    @Mapping(target = "orderLocationLat", source = "dto.orderLocationLat")
    @Mapping(target = "orderLocationLng", source = "dto.orderLocationLng")
    @Mapping(target = "orderDestinationLat", source = "dto.orderDestinationLat")
    @Mapping(target = "orderDestinationLng", source = "dto.orderDestinationLng")
    Order toEntity(OrderRequestDTO dto);

    OrderResponseDTO toResponseDto(Order entity);

    default double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
        final int R = 6371; // Radius of the earth in kilometers

        double latDistance = Math.toRadians(lat2 - lat1);
        double lonDistance = Math.toRadians(lon2 - lon1);
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        double distance = R * c; // Distance in kilometers

        return distance;
    }
}
