import { Injectable } from '@angular/core';
import {Client} from "../Model/Client";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

const URL ='/LawyerController';

@Injectable({
  providedIn: 'root'
})
export class LawyerService {

  constructor(private http:HttpClient) { }

  addClient(client: Client) {
    return this.http.post<Client>(environment.backend_url + URL + '/addClient',client);

  }
}
