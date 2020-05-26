/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.webservices.helloWorld;

/**
 *
 * @author ashish
 */
public class HelloWorldBean {

    private final String message;

    public HelloWorldBean(String message) {
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
