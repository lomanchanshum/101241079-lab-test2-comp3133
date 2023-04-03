import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions: Mission[] = [];
  @Output() newMissionEvent = new EventEmitter<Mission>();

  selectedMission?: Mission;
 
  constructor(private _api: SpacexapiService) { 
  }

  ngOnInit(){
    this._api.getAPIData().subscribe(data=> {
      this.missions = data
      console.log(this.missions);
    });
  }

  onSelect(mission: Mission): void {
    this.selectedMission = mission;
    }

}
