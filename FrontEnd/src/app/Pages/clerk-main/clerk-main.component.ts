import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-clerk-main',
  templateUrl: './clerk-main.component.html',
  styleUrls: ['./clerk-main.component.css']
})
export class ClerkMainComponent implements OnInit {

  headerText: string;

  constructor(private router: Router) {

    router.events.subscribe((val) => {
      this.setHeaderTextAndButtons();
    });

  }

  ngOnInit() {

  }

  setHeaderTextAndButtons() {

    if (this.router.url == '/clerkMain/clerk') {
      this.headerText = "clerk";
    }
    // } else if (this.router.url == '/main/customer_vehicle') {
    //   this.headerText = "Customer Vehicle Details";
    // }
  }

  changeRoute(button) {
    console.log(button)
    if (button == "clerk") {
      this.router.navigate(['/clerkMain/clerk'])
    }
    // } else if (button == "Employees") {
    //   this.router.navigate(['/main/employee'])
    // }
  }


}
