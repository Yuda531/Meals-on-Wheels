package com.example.kyn.controller;

import com.example.kyn.model.Store;
import com.example.kyn.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/store")
public class StoreController {
    @Autowired
    StoreService storeService;

    @PostMapping("/register")
    public Store saveStore(@RequestBody Store store){
        return storeService.saveStore(store);
    }

    @GetMapping("/all_store")
    public List<Store> getAllStore(){
        return storeService.getAllStore();
    }

    @GetMapping("/store_detail/{storeId}")
    public Store getStoreById(@PathVariable("storeId") Long storeId){
        return storeService.getStoreById(storeId);
    }

    @GetMapping("/search/carname")
    public List<Store> searchStoreByStoreName(@RequestParam ("storename")String storeName) {
        return storeService.searchStoreByStorename(storeName);
    }

    @PutMapping("/{storeId}")
    public ResponseEntity<Store> updateCar(
            @PathVariable("storeId") Long storeId,
            @RequestBody Store updatedStore)
    {
        Store store = storeService.updateStore(storeId, updatedStore);
        if (store != null) {
            return ResponseEntity.ok(store);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}