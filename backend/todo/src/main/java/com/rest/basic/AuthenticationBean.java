/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//package com.rest.webservices.todo.basic;

/**
 *
 * @author ashish
 */
public class AuthenticationBean {

    private final String message;

    public AuthenticationBean(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
    
    

    @Override
    public String toString() {
        return "HelloWorldBean{" + "message=" + message + '}';
    }
    
    
}
