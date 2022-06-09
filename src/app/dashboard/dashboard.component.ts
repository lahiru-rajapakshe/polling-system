import { Component, OnInit } from '@angular/core';
import {Poll} from "../dto/poll";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  polls:Array<Poll>=[];



  constructor(
    private userService:userSevice,
    private routerSrvice:Router
  ) {

  }

  ngOnInit(): void {
  }

  createPolls(title:string){
    this.polls.push(new Poll(Math.random(),title,this.userService.getPrincipal()));
  }
}
