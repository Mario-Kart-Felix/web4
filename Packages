package com.web4.mishanin.Web4.controllers;


import com.web4.mishanin.Web4.data.CustomerUserDetailService;
import com.web4.mishanin.Web4.model.SecurityUser;
import com.web4.mishanin.Web4.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {
    @Autowired
    CustomerUserDetailService customerUserDetailService;


    @PostMapping("/auth")
    public String getLoginPage(@RequestBody User user){
        System.out.println(user.toString());
        System.out.println("****");
        UserDetails securityUser = customerUserDetailService.loadUserByUsername(user.getUsername());
        System.out.println("****");
        return "true";
////        if (securityUser != null) {
////            System.out.println(securityUser.getPassword() + " : " + user.getPassword());
////            if (securityUser.getPassword().equals(user.getPassword())) {
////                System.out.println("User exist");
////                return "true";
////            }
////            return "incorrectPassword";
////        }
////        else {
////            System.out.println("User doesn't exist");
////            System.out.println("POST request ... ");
////            return "false";
//        }


    }
    @PostMapping("/signUp")
    public String signUp(@RequestBody User user) {
        System.out.println(user.toString());
        System.out.println("sdsdsd");
        String hashPassword = new BCryptPasswordEncoder(12).encode(user.getPassword());
        user.setPassword(hashPassword);
        return customerUserDetailService.addUser(user);
    }
    @GetMapping("/auth")
    public String getAuth() {
        return "auth";
    }

}
