package com.example.kyn.exception;

public class UserNotActiveException extends RuntimeException{
    public UserNotActiveException(String message){
        super(message);
    }
}
