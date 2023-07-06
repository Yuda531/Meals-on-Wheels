package com.example.kyn.model;

import javax.persistence.*;

@Entity
@Table(name="stores")
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long storeId;

    @Column
    private String storeName;


    @Column
    private String storeEmail;

    @Column
    private Integer contact;

    @Column
    private String description;

    public Store(Long storeId, String storeName, String storeEmail, Integer contact, String description) {
        this.storeId = storeId;
        this.storeName = storeName;
        this.storeEmail = storeEmail;
        this.contact = contact;
        this.description = description;
    }

    public Store() {

    }

    public Long getStoreId() {
        return storeId;
    }

    public String getStoreName() {
        return storeName;
    }

    public void setStoreName(String storeName) {
        this.storeName = storeName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStoreEmail() {
        return storeEmail;
    }

    public void setStoreEmail(String storeEmail) {
       this.storeEmail = storeEmail;
    }

    public Integer getContact() {
        return contact;
    }

    public void setContact(Integer contact) {
        this.contact = contact;
    }
}
