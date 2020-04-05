package com.lawfirm.lawyer.repository;

import com.lawfirm.lawyer.model.Client;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LawyerRepository extends MongoRepository<Client, Long> {


}
