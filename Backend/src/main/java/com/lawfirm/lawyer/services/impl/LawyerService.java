package com.lawfirm.lawyer.services.impl;

import com.lawfirm.lawyer.model.Client;
import com.lawfirm.lawyer.repository.LawyerRepository;
import com.lawfirm.lawyer.services.LawyerInterface;
import org.springframework.beans.factory.annotation.Autowired;

public class LawyerService implements LawyerInterface {

    @Autowired
    private LawyerRepository lawyerRepository;

    @Override
    public Client addCustomer(Client customer) {
            return lawyerRepository.save(customer);
    }

}
