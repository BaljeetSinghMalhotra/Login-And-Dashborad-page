import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items = [
    { title: 'Profile',icon:'person-outline', },
    { title: 'Logout',icon:'unlock-outline',link:'/login' },
  ];
  coll: NbMenuItem[] =[
    {title:'Home',icon:'home'},
    {title:'Monitoring',icon:'eye'},
    {title:'Test Execution',icon:'settings'},
    {title:'Test Suit management',icon:'layers'},
    {title:'Admin',icon:'person'},];


    title = 'Angular Charts';

  view: any[] = [600, 400];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Process';
  showYAxisLabel = true;
  yAxisLabel = 'Values';
  timeline = true;

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#17fc03', '#fc0f03', '#9370DB']
  };

  //pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  // data goes here
public single = [
  {
    "name": "Started",
    "value": 2
  },
  {
    "name": "Queued",
    "value": 3
  },
  {
    "name": "Sceduled",
    "value": 1
  },
  {
    "name": "Completed",
    "value": 10
  },
  {
    "name": "Error",
    "value": 0.05
  },
  {
    "name": "Aborted",
    "value": 0.05
  }
];


  constructor() { }

  ngOnInit(): void {
  }

}
