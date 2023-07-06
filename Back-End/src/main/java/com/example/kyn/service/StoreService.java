package com.example.kyn.service;

import com.example.kyn.model.Store;
import com.example.kyn.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class StoreService {

    @Autowired
    StoreRepository storeRepository;

    public Store saveStore(Store store){
        System.out.println("store added successfully");
        return storeRepository.save(store);
    }

    public List<Store> getAllStore(){
        return storeRepository.findAll();
    }

    public Store getStoreById(Long storeId){
        return storeRepository.findById(storeId).get();
    }

    public List<Store> searchStoreByStorename(String storeName) {
        return storeRepository.findByStoreName(storeName);
    }

    public Store updateStore(Long storeId, Store updatedStore) {
        Optional<Store> optionalStore = storeRepository.findById(storeId);
        if (optionalStore.isPresent()) {
            Store store = optionalStore.get();

            store.setStoreName(updatedStore.getStoreName());
            store.setDescription(updatedStore.getDescription());
            store.setStoreEmail(updatedStore.getStoreEmail());
            store.setContact(updatedStore.getContact());


            return storeRepository.save(store);
        } else {
            return null;
        }
    }
}
