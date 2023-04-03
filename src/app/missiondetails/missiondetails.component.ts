import { Component, OnInit, Input } from '@angular/core';
import { Mission } from '../models/mission';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {SpacexapiService } from '../network/spacexapi.service';
@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  mission?: Mission;

  constructor( 
    private route: ActivatedRoute,
    private service: SpacexapiService,
    private location: Location
    ) {}


  ngOnInit(): void {
    this.getMission();
  }

  getMission(): void{
    const flightNum = this.route.snapshot.paramMap.get('flightnumber');
    if(flightNum){
    this.service.getMission(flightNum)
      .subscribe(mission => this.mission = mission);
    }
  }

  goBack():void{
    this.location.back();
  }
}
