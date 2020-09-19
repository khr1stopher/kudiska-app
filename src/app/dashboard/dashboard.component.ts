import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  name: String;
  fecha: String;
  ip: String;

  constructor() { 
    this.name = "khris"
    this.fecha = "Sep 13, 2018, 7:54:35 PM"
    this.ip = "190.77.133.12 Caracas, Venezuela"
  }

  ngOnInit(): void {
  }

}
