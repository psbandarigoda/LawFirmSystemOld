package com.lawfirm.lawyer.controller;
import com.lawfirm.lawyer.model.Client;
import com.lawfirm.lawyer.repository.LawyerRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/LawyerController")
@CrossOrigin(origins = "http://localhost:4200")
public class LawyerController {

    @Autowired
    private LawyerRepository lawyerRepository;

    @PostMapping(value = "/addClient")
    public Map<String, Object> saveUser(@RequestBody Client client) {
        Client savedUser = lawyerRepository.save(client);
        Map<String, Object> responseMap = new HashMap<>();

        responseMap.put("client", savedUser);
        responseMap.put("status", 200);
        responseMap.put("message", "Success");
        return responseMap;
    }

}
