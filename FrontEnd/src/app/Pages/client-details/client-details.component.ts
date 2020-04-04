import { Component, OnInit } from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Client} from "../../Model/Client";
import {LawyerService} from "../../Service/lawyer.service";

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  searchClientNIC:string;
  firstName1 : String;
  lastName1 : String;
  userName1 : String;
  address1 : String;
  nic1 : String;
  phone1 : String;
  email1 : String;
  country1 : String;
  postal1 : String;
  aboutCus1 : String;

  constructor(private lawyersvr:LawyerService) { }

  ngOnInit() {
  }

  client: Client = new Client();

  form = new FormGroup({
    firstName: new FormControl(' ',Validators.required),
    lastName: new FormControl('',Validators.required),
    userName: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    nic: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    postal: new FormControl('',Validators.required),
    country: new FormControl('', Validators.required),
    aboutCus: new FormControl('',Validators.required)
  });

  addClient(){
    this.lawyersvr.addClient(this.client).subscribe((result)=>{
      if(result!=null){
        alert('Customer Added Successfully');
        this.client = new Client();
        this.form.reset();
      }
    });
  }


  searchClientByNIC($event: KeyboardEvent){

  }
}
