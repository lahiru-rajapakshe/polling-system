import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  polls=[];



  constructor() { }

  ngOnInit(): void {
  }

  createPolls(){
    this.polls.push(1);
  }
}
