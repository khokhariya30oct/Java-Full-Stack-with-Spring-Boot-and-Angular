/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.webservices.helloWorld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ashish
 */

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {
    
    @GetMapping(path="/hello")
    public String helloWord(){
        return "Hello World!!!!!";
    }
    
    @GetMapping(path="/hello-bean")
    public HelloWorldBean helloWordBean(){
        return new HelloWorldBean("Hello !!!!");
    }
    
    @GetMapping(path="/hello-bean/{name}")
    public HelloWorldBean helloWordBeanWithParam(@PathVariable String name){
        return new HelloWorldBean("Hello " + name + "!!!!");
    }
    
    
}
