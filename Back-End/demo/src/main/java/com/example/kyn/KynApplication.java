package com.example.kyn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.example.kyn"})
public class KynApplication {

    public static void main(String[] args) {
        SpringApplication.run(KynApplication.class, args);
    }

}
