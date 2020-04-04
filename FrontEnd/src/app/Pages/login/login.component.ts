import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrlLaw: string;
  returnUrlCla: string;
  uName: string;
  uPwd: string;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrlCla = this.route.snapshot.queryParams['returnUrlCla'] || 'clerkMain/clerk';
    this.returnUrlLaw = this.route.snapshot.queryParams['returnUrlLaw'] || 'main/summary';
  }

  login(){
    if(this.loginForm.value.username.toString() === "97psps@gmail.com"){
      this.router.navigate([this.returnUrlLaw]);
    }else if(this.loginForm.value.username.toString() === "kdu@gmail.com"){
      this.router.navigate([this.returnUrlCla]);
    }else {
      console.log("Error User");
    }
  }

}
