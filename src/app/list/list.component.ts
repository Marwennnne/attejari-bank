import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  staticList = [
    {
      date: '2021-07-25',
      duree: 40,
      programme: "this a test programme",
      constats: "this a test constats",
      investigation: 'this a test investigation',
      cause: 'this a test cause',
      consequence: 'this a test consequence',
      action: 'this a test action'
    },
    {
      date: '2020-01-25',
      duree: 200,
      programme: "this a test programme v1",
      constats: "this a test constats v1",
      investigation: 'this a test investigation v1',
      cause: 'this a test cause v1',
      consequence: 'this a test consequence v1',
      action: 'this a test action v1'
    },
    {
      date: '2019-01-25',
      duree: 200,
      programme: "this a test programme v1",
      constats: "this a test constats v1",
      investigation: 'this a test investigation v1',
      cause: 'this a test cause',
      consequence: 'this a test consequence',
      action: 'this a test action'
    },
  ]
  selectedIntervention: any;

  constructor() { }

  ngOnInit(): void {
  }

  testing(intervention: any){
    this.selectedIntervention = intervention;
  }

}
