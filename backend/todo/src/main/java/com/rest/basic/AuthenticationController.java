/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//package com.rest.webservices.todo.basic;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ashish
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AuthenticationController {

//    @GetMapping(path="/hello")
//    public String helloWord(){
//        return "Hello World!!!!!";
//    }
    @GetMapping(path = "/basicauth")
    public AuthenticationBean helloWordBean() {
        return new AuthenticationBean("You are authenticated");
    }

//    @GetMapping(path="/hello-bean/{name}")
//    public HelloWorldBean helloWordBeanWithParam(@PathVariable String name){
//        return new HelloWorldBean("Hello " + name + "!!!!");
//    }
}
