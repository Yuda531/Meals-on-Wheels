package com.example.kyn.repository;

import com.example.kyn.model.Store;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StoreRepository extends JpaRepository<Store,Long> {

    List<Store> findByStoreName(String storeName);
    Optional<Store> findById(Long storeId);

    Store save(Store store);
}
