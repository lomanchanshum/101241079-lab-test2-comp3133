import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../models/mission';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(private http: HttpClient) {

   }

   getAPIData():Observable<Mission[]>{
     return this.http.get<Mission[]>('https://api.spacexdata.com/v3/launches');
  }

  getMission(flight_number: string): Observable<Mission> {
    return this.http.get<Mission>('https://api.spacexdata.com/v3/launches/'+ flight_number);
  }
}
