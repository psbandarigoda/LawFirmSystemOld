import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  headerText: string;
  time = new Date();
  curDate = new Date();

  constructor(private router: Router) {

    router.events.subscribe((val) => {
      this.setHeaderTextAndButtons();
    });

  }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);

  }

  setHeaderTextAndButtons() {

    if (this.router.url == '/main/summary') {
      this.headerText = "Summary";
    } else if (this.router.url == '/main/clientDetails') {
      this.headerText = "Client Details";
    }
  }

  changeRoute(button) {
    console.log(button);
    if (button == "Summary") {
      this.router.navigate(['/main/summary']);
    } else if (button == "Client Details") {
      this.router.navigate(['/main/clientDetails']);
    }
  }

}
