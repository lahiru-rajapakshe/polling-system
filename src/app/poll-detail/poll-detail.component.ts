import {Component, Input, OnInit} from '@angular/core';
import {Poll} from "../dto/poll";

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.scss']
})
export class PollDetailComponent implements OnInit {

  @Input()
  poll: Poll;
  constructor() { }

  ngOnInit(): void {
  }

}
