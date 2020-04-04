import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MainComponent} from "./Pages/main/main.component";
import {LoginComponent} from "./Pages/login/login.component";
import {ClerkComponent} from "./Pages/clerk/clerk.component";
import {ClerkMainComponent} from "./Pages/clerk-main/clerk-main.component";
import {SummaryComponent} from "./Pages/summary/summary.component";
import {ClientDetailsComponent} from "./Pages/client-details/client-details.component";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    ClerkComponent,
    ClerkMainComponent,
    SummaryComponent,
    ClientDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
