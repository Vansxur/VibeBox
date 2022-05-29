import { Component, OnInit } from '@angular/core';
import {EventSettingsModel, View} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-agenda',
  template: '<ejs-schedule [currentView]="setView" ></ejs-schedule>',
  // templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  public setView: View = 'Month';
  // public setDate: Date = new Date(2022, 4, 26);
  // public eventObject: EventSettingsModel = {
  //   dataSource: [{
  //     EventTitle: 'test',
  //     EventStart: new Date(2022, 4, 26),
  //     EventEnd: new Date(2022, 4, 26)
  //   }],
  //   fields: {
  //     subject: {name: 'EventTitle'},
  //     startTime: {name: 'EventStart'},
  //     endTime: {name: 'EventEnd'},
  //   }
  // };

  constructor() { }

  ngOnInit(): void {
  }

}
