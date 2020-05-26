/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.rest.webservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 *
 * @author ashish
 */
public class BcryptEncodeTest {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        for (int i = 0; i< 10; i++) {
            String encodedString = encoder.encode("5123");
            System.out.println("=> " + encodedString);
        }
        
        
        // TODO code application logic here
    }
    
}
