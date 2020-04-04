package com.lawfirm.lawyer.controller;
import com.lawfirm.lawyer.model.Client;
import com.lawfirm.lawyer.services.LawyerInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/LawyerController")
public class LawyerController {

    @Autowired
    private LawyerInterface lawyerInterface;

    @PostMapping(value = "/addClient")
    public Client addCustomer(@RequestBody Client client){
        return lawyerInterface.addCustomer(client);
    }

}
