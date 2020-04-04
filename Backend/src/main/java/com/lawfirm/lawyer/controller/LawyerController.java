package com.lawfirm.lawyer.controller;
import com.lawfirm.lawyer.model.Client;
import com.lawfirm.lawyer.services.LawyerInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/LawyerController")
public class LawyerController {

    @Autowired
    private LawyerInterface lawyerInterFace;

    @PostMapping(value = "/addClient")
    public Client addCustomer(@RequestBody Client client){
        return lawyerInterFace.addCustomer(client);
    }

}
